# Python Tesseract OCR Web Application

[![Python](https://img.shields.io/badge/python-3.7-blue.svg)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/flask-1.1.1-green.svg)](https://flask.palletsprojects.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tesseract](https://img.shields.io/badge/tesseract-OCR-orange.svg)](https://github.com/tesseract-ocr/tesseract)

A simple web application built with Flask that allows users to upload images and extract text from them using Google's Tesseract OCR engine. The application provides an intuitive web interface for optical character recognition tasks.

## Features

- 📸 **Image Upload**: Support for PNG, JPG, and JPEG image formats
- 🔤 **Text Extraction**: Powered by Google Tesseract OCR engine
- 🌐 **Web Interface**: Clean, responsive Bootstrap-based UI
- ⚡ **Real-time Processing**: Instant text extraction with loading indicators

## Screenshots

The application features a clean, modern interface with:
- File upload functionality
- Real-time processing indicators
- Side-by-side image and extracted text display
- Responsive Bootstrap design

## Prerequisites

Before running this application, make sure you have:

- Python 3.7 or higher
- Tesseract OCR installed on your system
- Pipenv (recommended) or pip for dependency management

### Installing Tesseract OCR

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install tesseract-ocr
```

**macOS:**
```bash
brew install tesseract
```

**Windows:**
Download and install from the [official Tesseract repository](https://github.com/UB-Mannheim/tesseract/wiki)

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd python-tesseract-ocr
   ```

2. **Install dependencies:**
   ```bash
   pipenv install
   pipenv shell
   ```

   Or using pip:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application:**
   ```bash
   flask run
   ```

4. **Open in browser:**
   Navigate to [http://localhost:5000](http://localhost:5000)

## Usage

1. **Home Page**: Visit the root URL to see the welcome page
2. **Upload Page**: Navigate to `/upload` or click the upload link
3. **Select Image**: Choose a PNG, JPG, or JPEG file containing text
4. **Extract Text**: Click "Upload" to process the image
5. **View Results**: The extracted text will appear alongside the uploaded image

## Project Structure

```
python-tesseract-ocr/
├── app.py                 # Main Flask application
├── ocr_core.py           # OCR processing logic
├── requirements.txt      # Python dependencies
├── Pipfile              # Pipenv configuration
├── Pipfile.lock         # Locked dependencies
├── static/
│   ├── css/
│   │   └── main.css     # Custom styles
│   ├── js/
│   │   └── upload.js    # Client-side JavaScript
│   └── uploads/         # Uploaded images storage
├── templates/
│   ├── index.html       # Home page template
│   └── upload.html      # Upload page template
└── README.md           # Project documentation
```

## Dependencies

### Production Dependencies
- **Flask (1.1.1)**: Web framework
- **Pillow (6.1.0)**: Python Imaging Library
- **pytesseract (0.2.7)**: Python wrapper for Tesseract OCR

### Development Dependencies
- **pylint**: Code linting and style checking

## Configuration

The application uses the following configuration:
- **Upload folder**: `static/uploads/`
- **Allowed file extensions**: PNG, JPG, JPEG
- **Maximum file size**: No explicit limit (consider adding for production)

## API Endpoints

- `GET /` - Home page
- `GET /upload` - Upload form page
- `POST /upload` - Process uploaded image and extract text

## Development

To set up the development environment:

```bash
# Install development dependencies
pipenv install --dev

# Run linting
pylint *.py

# Run the application in debug mode
export FLASK_ENV=development
flask run
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Google Tesseract OCR](https://github.com/tesseract-ocr/tesseract) for the OCR engine
- [Flask](https://flask.palletsprojects.com/) for the web framework
- [Bootstrap](https://getbootstrap.com/) for the responsive UI components

## Future Enhancements

- [ ] Support for additional image formats (TIFF, BMP, GIF)
- [ ] Batch processing for multiple images
- [ ] OCR confidence scores display
- [ ] Language selection for OCR processing
- [ ] Image preprocessing options (rotation, enhancement)
- [ ] Export results to different formats (PDF, DOCX)
- [ ] REST API endpoints for programmatic access
