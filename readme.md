Pasos para poder ingresar al proyecto

1.-  py -m venv myenv  -----> Crea un entorno virtual llamado myenv en el directorio actual. Un entorno virtual es un entorno aislado donde puedes instalar paquetes y dependencias de Python sin afectar el sistema global de Python ni otros proyectos.

2.- .\myenv\Scripts\activate ----> Se usa para activar el entorno virtual en Windows.

3.- pip install django  ----> En resumen, este comando descarga e instala la última versión de Django desde el índice de paquetes de Python (PyPI) en tu entorno actual.

4.- python.exe -m pip install ----> Este comando se asegura de que estás utilizando la versión más reciente de pip, lo cual es importante para mantener compatibilidad con los paquetes y obtener las últimas características y correcciones de errores.

5.- django-admin startproject tienda . ----> Este comando crea un nuevo proyecto Django llamado "tienda" en el directorio actual, configurando todos los archivos y directorios necesarios para empezar a desarrollar tu aplicación web con Django.

6.- python manage.py startapp comics ----> Este comando crea una nueva aplicación llamada "comics" dentro de tu proyecto Django actual.

7.- python manage.py runserver ----> Se utiliza para iniciar el servidor de desarrollo de Django. 

8.- py -m pip install --upgrade pip ----> Se utiliza para actualizar pip, el gestor de paquetes de Python, a la última versión disponible.

9.- pip install python-decouple ----> Se utiliza para instalar la biblioteca python-decouple en tu entorno de Python. 

10.- pip install django-crispy-forms ----> Se utiliza para instalar la biblioteca django-crispy-forms en tu entorno de Python.

11.- pip install crispy-bootstrap4 ----> Se utiliza para instalar el paquete crispy-bootstrap4, que es un complemento para django-crispy-forms.

12.- pip install Pillow ----> Se utiliza para instalar la biblioteca Pillow en tu entorno de Python.

---- Super usuario ----

python manage.py createsuperuser -------> Creacion de superusuarios 

--> Usuario de prueba creado: carol, Contraseña: 123456