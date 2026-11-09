"""
تحويل report.md إلى PDF بسيط للتسليم.
شغّل بعد ما تتأكد إن report.md جاهز:
    python make_report_pdf.py
"""

from pathlib import Path

from fpdf import FPDF

BASE_DIR = Path(__file__).resolve().parent
MD_PATH = BASE_DIR / "report.md"
PDF_PATH = BASE_DIR / "outputs" / "Oil_Sales_Report.pdf"


class PDF(FPDF):
    def footer(self) -> None:
        self.set_y(-15)
        self.set_font("Helvetica", size=9)
        self.cell(0, 10, f"Page {self.page_no()}", align="C")


def main() -> None:
    text = MD_PATH.read_text(encoding="utf-8")
    PDF_PATH.parent.mkdir(exist_ok=True)

    pdf = PDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font("Helvetica", size=12)

    for raw_line in text.splitlines():
        line = raw_line.rstrip()
        if not line:
            pdf.ln(4)
            continue
        # تبسيط عناوين Markdown
        if line.startswith("# "):
            pdf.set_font("Helvetica", "B", 16)
            pdf.multi_cell(0, 8, line[2:])
            pdf.set_font("Helvetica", size=12)
        elif line.startswith("## "):
            pdf.ln(2)
            pdf.set_font("Helvetica", "B", 13)
            pdf.multi_cell(0, 7, line[3:])
            pdf.set_font("Helvetica", size=12)
        else:
            clean = line.replace("**", "").replace("`", "")
            pdf.multi_cell(0, 6, clean)

    pdf.output(PDF_PATH)
    print(f"تم إنشاء التقرير: {PDF_PATH}")


if __name__ == "__main__":
    main()
