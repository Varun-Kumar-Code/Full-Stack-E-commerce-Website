# Full-Stack-Ecommerce-Website
Full-Stack E-commerce Website

Description:
This is a full-stack e-commerce website built using HTML, CSS, JavaScript, Django, Python, and MySQL. The project provides a complete online shopping experience, featuring user authentication, product listings, a shopping cart, and secure payment processing.

Features:
+ User authentication and registration
+ Product listings with search functionality
+ Shopping cart management
+ Secure payment processing
+ Responsive design for mobile and desktop

Technologies Used
+ Frontend: HTML, CSS, JavaScript
+ Backend: Django, Python
+ Database: MySQL

Getting Started

+ Check your Python version:
python --version

+ Install Pipenv:
pip install pipenv
(Optional: Upgrade pip)
python.exe -m pip install --upgrade pip

+ Create and activate a Pipenv shell:
pipenv shell

+ Install Django:
pip install django

+ Verify the Pipenv virtual environment:
pipenv --venv

+ Install MySQL client
pip install mysqlclient

+ Install Pillow for image handling:
pip install pillow

+ Install Django Jazzmin for admin interface customization:
pip install django-jazzmin

+ Create the database in MySQL:
CREATE DATABASE django_avk;

+ Make migrations:
pipenv run python manage.py makemigrations

+ Apply migrations:
pipenv run python manage.py migrate

+ Create a superuser for the admin interface:
python manage.py createsuperuser

+ Set up the database and run migrations:
python manage.py migrate

* Start the development server:
python manage.py runserver

Contributing
Feel free to fork the repository and submit pull requests for any improvements or features!
