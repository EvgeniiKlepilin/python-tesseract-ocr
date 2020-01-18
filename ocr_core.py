try:
    from PIL import Image
except ImportError:
    import Image
import pytesseract

def ocr_core(filename):
    return pytesseract.image_to_string(Image.open(filename))