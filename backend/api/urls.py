from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("ideators/new", views.createIdeator, name="users-create")
]