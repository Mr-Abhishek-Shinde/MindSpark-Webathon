from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("users/", views.getUsers, name="ideators"),
    path("ideators/", views.getIdeators, name="ideators"),
    path("ideators/new", views.createIdeator, name="ideatorss-create")
]