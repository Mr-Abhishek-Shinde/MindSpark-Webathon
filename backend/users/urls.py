from django.urls import path
from . import views

urlpatterns = [
    path("", views.getUsers, name="users"),
    path("new/", views.createUser, name="users-create"),
    path("login/", views.loginUser, name="users-login"),
]