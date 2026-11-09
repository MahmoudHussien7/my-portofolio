"""
Oil Sales Assignment
--------------------
تحليل بيانات مبيعات الزيوت:
1) تنظيف الداتا
2) تحليل استكشافي (EDA)
3) موديل تصنيف بسيط (High vs Low Sales)
4) استخراج insights بيزنس
"""

from pathlib import Path

import matplotlib.pyplot as plt
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

# =========================
# إعداد المسارات
# =========================
BASE_DIR = Path(__file__).resolve().parent
DATA_PATH = BASE_DIR / "data" / "oil_sales_assignment_dataset.csv"
OUTPUT_DIR = BASE_DIR / "outputs"
OUTPUT_DIR.mkdir(exist_ok=True)


def main() -> None:
    # -------------------------
    # 1) تحميل الداتا
    # -------------------------
    if not DATA_PATH.exists():
        raise FileNotFoundError(
            f"ملف الداتا مش موجود:\n{DATA_PATH}\n"
            "حط الملف باسم oil_sales_assignment_dataset.csv داخل فولدر data"
        )

    df = pd.read_csv(DATA_PATH)
    print("=== تحميل الداتا ===")
    print("Shape:", df.shape)
    print(df.head(), "\n")

    # -------------------------
    # 2) Preprocessing / فحص الجودة
    # -------------------------
    print("=== فحص القيم الناقصة ===")
    print(df.isnull().sum(), "\n")

    print("volume_sales = 0:", (df["volume_sales"] == 0).sum())
    print("value_sales = 0:", (df["value_sales"] == 0).sum())
    print("volume_sales < 0:", (df["volume_sales"] < 0).sum())
    print("value_sales < 0:", (df["value_sales"] < 0).sum(), "\n")

    # التحقق إن average_price ≈ value_sales / volume_sales
    df["price_check"] = df["value_sales"] / df["volume_sales"]
    df["price_diff"] = (df["average_price"] - df["price_check"]).abs()
    print("أكبر فرق سعر:", df["price_diff"].max())
    print("صفوف الفرق > 0.5:", (df["price_diff"] > 0.5).sum(), "\n")

    # Outliers بطريقة IQR
    q1 = df["value_sales"].quantile(0.25)
    q3 = df["value_sales"].quantile(0.75)
    iqr = q3 - q1
    lower = q1 - 1.5 * iqr
    upper = q3 + 1.5 * iqr
    outliers = df[(df["value_sales"] < lower) | (df["value_sales"] > upper)]
    print("عدد Outliers في value_sales:", len(outliers))
    print("الحد الأدنى:", lower)
    print("الحد الأعلى:", upper, "\n")

    # ملاحظة: مش هنحذف الـ outliers لأنها غالبًا مبيعات عالية حقيقية ومفيدة للبيزنس

    # -------------------------
    # 3) EDA
    # -------------------------
    print("=== EDA ===")

    sales_by_city = df.groupby("city")["value_sales"].sum().sort_values(ascending=False)
    print("Sales by city:\n", sales_by_city, "\n")
    sales_by_city.plot(kind="bar", figsize=(10, 5), title="Total Sales by City")
    plt.ylabel("Total value_sales")
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "sales_by_city.png")
    plt.close()

    sales_by_brand = df.groupby("brand")["value_sales"].sum().sort_values(ascending=False)
    print("Sales by brand:\n", sales_by_brand, "\n")
    sales_by_brand.plot(kind="bar", figsize=(10, 5), title="Total Sales by Brand")
    plt.ylabel("Total value_sales")
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "sales_by_brand.png")
    plt.close()

    sales_by_class = df.groupby("class")["value_sales"].sum().sort_values(ascending=False)
    print("Sales by class:\n", sales_by_class, "\n")
    sales_by_class.plot(kind="bar", figsize=(8, 5), title="Total Sales by Oil Class")
    plt.ylabel("Total value_sales")
    plt.xticks(rotation=0)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "sales_by_class.png")
    plt.close()

    sales_by_year = df.groupby("year")["value_sales"].sum().sort_index()
    print("Sales by year:\n", sales_by_year, "\n")
    sales_by_year.plot(kind="bar", figsize=(7, 5), title="Total Sales by Year")
    plt.ylabel("Total value_sales")
    plt.xticks(rotation=0)
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / "sales_by_year.png")
    plt.close()

    sales_by_sku = df.groupby("sku")["value_sales"].sum().sort_values(ascending=False)
    print("Top 10 products:\n", sales_by_sku.head(10), "\n")
    print("Bottom 10 products:\n", sales_by_sku.tail(10), "\n")

    # -------------------------
    # 4) Machine Learning: High vs Low Sales
    # -------------------------
    print("=== Machine Learning ===")
    avg_sales = df["value_sales"].mean()
    df["sales_level"] = df["value_sales"].apply(lambda x: "High" if x >= avg_sales else "Low")
    print("متوسط value_sales:", avg_sales)
    print(df["sales_level"].value_counts(), "\n")

    features = ["city", "brand", "class", "size", "price_bracket", "year", "month"]
    X = df[features].copy()
    y = df["sales_level"].copy()

    # تحويل الأعمدة النصية لأرقام
    for col in ["city", "brand", "class", "size", "price_bracket"]:
        encoder = LabelEncoder()
        X[col] = encoder.fit_transform(X[col])

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # اخترنا Random Forest لأنه بسيط ويتعامل كويس مع categorical features بعد الترميز
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)

    acc = accuracy_score(y_test, y_pred)
    print("Accuracy:", acc)
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred))

    # حفظ ملخص سريع للنتائج
    summary_path = OUTPUT_DIR / "model_summary.txt"
    with summary_path.open("w", encoding="utf-8") as f:
        f.write(f"Accuracy: {acc:.4f}\n\n")
        f.write(classification_report(y_test, y_pred))

    # -------------------------
    # 5) Business Insights
    # -------------------------
    print("=== Business Insights ===")
    insights = [
        "1) AL BAHA أعلى مدينة في المبيعات وHAIL من الأضعف؛ زوّد الترويج في المدن الأضعف.",
        "2) GULF GOLD أقوى براند وBAYTNA الأضعف؛ ركّز مساحة الرف على الأقوى وراجع تسعير الأضعف.",
        "3) CORN أعلى فئة زيوت وVEGETABLE الأضعف؛ حسّن التشكيلة حسب الطلب.",
        "4) 2023 انخفضت عن 2022 ثم تحسنت جزئيًا في 2024؛ حلل أسباب التراجع.",
        "5) المنتجات القوية غالبًا أحجام متوسطة/عائلية، والعبوات الصغيرة جدًا ضعيفة الأداء.",
    ]
    for line in insights:
        print(line)

    insights_path = OUTPUT_DIR / "business_insights.txt"
    insights_path.write_text("\n".join(insights), encoding="utf-8")

    print("\nتم حفظ الرسومات والنتائج في فولدر outputs/")


if __name__ == "__main__":
    main()
