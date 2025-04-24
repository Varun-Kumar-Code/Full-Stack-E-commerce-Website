# Full-Stack E-commerce Website

This is a full-stack e-commerce website built using HTML, CSS, JavaScript, Django, Python, and MySQL. The project provides a complete online shopping experience, featuring user authentication, product listings, a shopping cart, and secure payment processing.

## ✨ Features

- User authentication and registration
- Product listings with search functionality
- Shopping cart management
- Secure payment processing
- Responsive design for mobile and desktop

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Django, Python
- **Database:** MySQL

## 🚀 Getting Started

Follow these steps to set up the project locally:

1. **Check your Python version:**
   ```bash
   python --version

2. **Install Pipenv (Optional: Upgrade pip):**
   ```bash
   pip install pipenv
   python.exe -m pip install --upgrade pip
   
3. **Create and activate a Pipenv shell:**
   ```bash
   pipenv shell

4. **Install Django:**
   ```bash
   pip install django

5. **Verify the Pipenv virtual environment:**
   ```bash
   pipenv --venv
   
6. **Install MySQL client:**
   ```bash
   pip install mysqlclient

7. **Install Pillow for image handling:**
   ```bash
   pip install pillow

8. **Install Django Jazzmin for admin interface customization:**
   ```bash
   pip install django-jazzmin

9. **Create the database in MySQL:**
   ```bash
   CREATE DATABASE database_name;

10. **Make migrations:**
    ```bash
     pipenv run python manage.py makemigrations

11. **Apply migrations:**
    ```bash
    pipenv run python manage.py migrate

12. **Create a superuser for the admin interface:**
    ```bash
    python manage.py createsuperuser

13. **Set up the database and run migrations:**
    ```bash
    python manage.py migrate

14. **Start the development server:**
    ```bash
    python manage.py runserver

## 👥 Contributing
Feel free to fork the repository and submit pull requests for any improvements or features!

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.
