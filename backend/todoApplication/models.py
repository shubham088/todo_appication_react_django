from django.db import models

# Create your models here.


class TodoItems(models.Model):
    title = models.CharField(max_length = 100, null = False, default = 'New Title')
    description = models.TextField(max_length = 200)
    done = models.BooleanField(default = False)
    category_name = models.CharField(null = False, max_length = 20, default = 'General')

    class Meta:
        verbose_name = 'Todo'
        verbose_name_plural = 'Todos'

    def __str__(self):
        return self.title


# class Category(models.Model):
#     name = models.CharField(max_length = 20, null=False, default = 'General', primary_key = True)

#     class Meta:
#         verbose_name = 'Category'
#         verbose_name_plural = 'Category'