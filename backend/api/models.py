from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.

class Ideator(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30, blank=True)
    email = models.EmailField(max_length=254, null=True)
    password = models.CharField(max_length=30, blank=True)
    ideas = models.JSONField(encoder=None, decoder=None, default=dict, blank=True)
    role = models.CharField(max_length=30)
    date_joined =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        full_name = self.first_name + " " + self.last_name
        return full_name

class Idea(models.Model):
    title = models.CharField(max_length=30)
    body = models.TextField()
    author = models.ForeignKey(Ideator, on_delete=models.CASCADE, default=None)
    created =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Innovation_Champion(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30, blank=True)
    email = models.EmailField(max_length=254, null=True)
    password = models.CharField(max_length=30, blank=True)
    judged_ideas = models.JSONField(encoder=None, decoder=None, default=dict, blank=True)
    role = models.CharField(max_length=30)
    date_joined =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        full_name = self.first_name + " " + self.last_name
        return full_name

class Admin(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    username = models.CharField(max_length=30, blank=True)
    email = models.EmailField(max_length=254, null=True)
    password = models.CharField(max_length=30, blank=True)
    role = models.CharField(max_length=30)
    date_joined =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        full_name = self.first_name + " " + self.last_name
        return full_name