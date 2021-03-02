from django.contrib import admin

# Register your models here.

from .models import TodoItems
#Category


admin.site.register(TodoItems)
#admin.site.register(Category)