"""Extract images from Anbessa PDF (logo and watermark) using pypdf."""
import os
import sys

try:
    from pypdf import PdfReader
except ImportError:
    print("pypdf not installed. Run: pip install pypdf")
    sys.exit(1)

PDF_DIR = r"c:\Users\User\AppData\Roaming\Cursor\User\workspaceStorage\87cc124f1c366b546399c2fa0e61d8d9\pdfs\602b8bd1-8af6-4b5f-a8b0-5a4807b25ab9"
OUT_DIR = os.path.join(os.path.dirname(__file__), "assets")

def main():
    pdf_path = None
    for name in os.listdir(PDF_DIR):
        if name.endswith(".pdf"):
            pdf_path = os.path.join(PDF_DIR, name)
            break
    if not pdf_path:
        print("PDF not found in", PDF_DIR)
        return
    os.makedirs(OUT_DIR, exist_ok=True)
    reader = PdfReader(pdf_path)
    for page_no, page in enumerate(reader.pages):
        try:
            for name in page.images.keys():
                try:
                    img_obj = page.images[name]
                    img = img_obj.image
                    fname = os.path.join(OUT_DIR, f"pdf_p{page_no}_{name.replace('/', '_')}.png")
                    if hasattr(img, "save"):
                        img.save(fname)
                        w, h = img.size if hasattr(img, "size") else (0, 0)
                        print("Saved", fname, f"{w}x{h}")
                except Exception as e:
                    print("Skip image", name, e)
        except Exception as e:
            print("Page", page_no, e)
    print("Done.")

if __name__ == "__main__":
    main()
