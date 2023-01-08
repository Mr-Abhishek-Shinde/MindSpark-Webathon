from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.

class Ideator(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=254, null=True)
    password = models.CharField(max_length=30, blank=True)
    ideas = models.JSONField(encoder=None, decoder=None, default=dict, blank=True)
    role = models.CharField(max_length=30, default="Ideator")
    # auto now add takes the time only on creation
    created =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        full_name = self.first_name + " " + self.last_name
        return full_name

class Idea(models.Model):
    title = models.CharField(max_length=30)
    body = models.CharField(max_length=150)
    author = models.ForeignKey(Ideator, on_delete=models.CASCADE)
    created =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Jury(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=254, null=True)
    password = models.CharField(max_length=30, blank=True)
    judged_ideas = models.JSONField(encoder=None, decoder=None, default=dict, blank=True)
    role = models.CharField(max_length=30, default="Jury")
    created =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        full_name = self.first_name + " " + self.last_name
        return full_name

class Admin(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=254, null=True)
    password = models.CharField(max_length=30, blank=True)
    ideas = models.JSONField(encoder=None, decoder=None, default=dict, blank=True)
    role = models.CharField(max_length=30, default="Admin")
    # auto now add takes the time only on creation
    created =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        full_name = self.first_name + " " + self.last_name
        return full_name