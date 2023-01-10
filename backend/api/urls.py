from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("ideas/", views.getIdeas, name="ideas"),
    path("users/", views.getUsers, name="users"),
    path("programs/", views.getPrograms, name="programs"),
    path("users/new/", views.createUser, name="users-create"),
    path("users/login/", views.loginUser, name="users-login"),
    path("ideators/", views.getIdeators, name="ideators"),
]