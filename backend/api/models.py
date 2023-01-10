from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.
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

class Program(models.Model):
    title = models.CharField(max_length=50)
    subtitle = models.CharField(max_length=100)
    image = models.CharField(max_length=200, default="https://i0.wp.com/t-artmagazine.com/wp-content/uploads/2021/04/vector-creator.png?fit=800%2C534&ssl=1")
    starting_date = models.DateTimeField(default=None)
    submission_date = models.DateTimeField(default=None)
    author = models.ForeignKey(Admin, on_delete=models.CASCADE, default=None)
    created =  models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


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
    program = models.ForeignKey(Program, on_delete=models.CASCADE, default=None)
    image = models.TextField(default="https://images.ctfassets.net/d0t1b8j9k0xb/q874gZ95BsMs7F10yKYDR/03be7ed0c4fb18c0c3800b41c1c16541/Design_01_Is_the_Big_Tech_Art.jpg?fm=webp")
    author = models.JSONField(encoder=None, decoder=None, default=dict, blank=True)
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

