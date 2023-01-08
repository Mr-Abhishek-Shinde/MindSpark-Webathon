from django.db import models

# Create your models here.


class Ideator(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=254, null=True)
    password = models.CharField(max_length=30, blank=True)
    ideas = models.JSONField(encoder=None, decoder=None, default=dict, blank=True)
    # auto now add takes the time only on creation
    created =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        full_name = self.first_name + " " + self.last_name
        return full_name