# Setup for Todo Application

## Backend

1. create a virtual env
'''
python3 -m venv django_env
'''

2. activate the env
'''
source django_env/bin/activate
'''

3. Install the requirements
'''
pip3 -r install requirements.txt
'''

4. run these commands

'''
cd backend
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createsuperuser
'''

## Frontend

1. cd frontend
2. npm install
3. npm start


## routes

1. / => homepage which is listing page shows all todos
2. /edit/{id} => Update page to update existing todos
3. /create_todo => To create a new todo item

