# Oil Sales Analysis Report

## 1. Approach & Assumptions

- Dataset: synthetic edible-oil retail sales (`oil_sales_assignment_dataset.csv`).
- Each row = product sales for a city/store/brand/class/size in a given year-month.
- Assumed `average_price` should approximately equal `value_sales / volume_sales`.
- Built a simple classification model: **High Sales** vs **Low Sales** using the mean of `value_sales` as the threshold.
- Chose **Random Forest** because it is simple, robust with mixed categorical features (after encoding), and suitable for a first predictive baseline.

## 2. Data Preprocessing

Cleaning checks performed:

- Missing values: none found (all columns 2000 non-null).
- Invalid values: no zero/negative `value_sales` or `volume_sales`.
- Consistency check: max absolute difference between provided `average_price` and recomputed price was ~0.005 (rounding only).
- Outliers: 147 IQR outliers in `value_sales`, mostly very high sales. Kept them because they represent strong performers, not clear data errors.

**Cleaning strategy:** validate first, delete only when clearly broken. Here the data was already consistent, so no aggressive deletion was needed.

## 3. Key EDA Findings

- **Cities:** AL BAHA highest total sales; HAIL among the lowest.
- **Brands:** GULF GOLD strongest; BAYTNA weakest among observed brands.
- **Oil class:** CORN highest; VEGETABLE lowest.
- **Years:** 2022 highest, 2023 declined, 2024 partially recovered.
- **Products:** Top SKUs tend to be mid/family sizes (e.g., 1.5L–2.9L) with pack variants; tiny sizes (e.g., 0.2L) often underperform.

## 4. Machine Learning Result

- Task: classify rows into High vs Low sales.
- Features: city, brand, class, size, price_bracket, year, month.
- Model: RandomForestClassifier (n_estimators=100).
- Result: about **66% accuracy**.
- Observation: model predicts Low better than High because Low class is more frequent (class imbalance).

## 5. Business Insights & Recommendations

1. Increase promotions in weaker cities (e.g., HAIL) while protecting share in strong cities (e.g., AL BAHA).
2. Prioritize shelf space for strong brands (e.g., GULF GOLD); review pricing/placement for weaker brands (e.g., BAYTNA).
3. Expand assortment around high-demand oil classes (CORN/SUNFLOWER); revisit VEGETABLE assortment.
4. Investigate 2023 sales drop drivers (pricing, stockouts, competition) to protect 2024–2025 growth.
5. Favor mid/family pack sizes in assortment planning; reduce over-allocation to very small packs with weak sales.

## 6. Next Steps (if more time)

- Try better models / tuning and handle class imbalance (class weights, SMOTE).
- Predict continuous `value_sales` with regression.
- Add seasonality analysis by month and city-brand interaction effects.
- Build a simple dashboard for store managers.
