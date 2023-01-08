from django.shortcuts import render
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth import authenticate
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

from .serializers import UserSerializer

# Create your views here.
@api_view(["GET"])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def createUser(request):
    username = request.data['email'].split("@")[0]
    email = request.data['email']
    password = request.data['password']
    first_name = request.data['first_name']
    last_name = request.data['last_name']

    data = {
        "username": username, 
        "email": email, 
        "password": password, 
        "first_name": first_name, 
        "last_name": last_name
        }

    try:
        user = User.objects.create_user(
            username=username, 
            email=email, 
            password=password,
            first_name=first_name,
            last_name=last_name
            )
        return JsonResponse(data)
    except:
        return Response("existing_user")