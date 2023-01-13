from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User

from .models import Ideator, Innovation_Champion, Admin, Idea, Program
from .serializers import IdeatorSerializer, UserSerializer, InnovationChampionSerializer, AdminSerializer, IdeaSerializer, ProgramSerializer

# Create your views here.

@api_view(["GET"])
def getRoutes(request):
    routes = [
            {
                'Endpoint': '/ideas/',
                'method': 'GET',
                'description': 'Returns an array of ideas'
            },
            {
                'Endpoint': '/ideas/id',
                'method': 'GET',
                'description': 'Returns a single idea object'
            },
            {
                'Endpoint': '/ideas/create/',
                'method': 'POST',
                'description': 'Creates new idea with data sent in post request'
            },
            {
                'Endpoint': '/ideas/id/update/',
                'method': 'PUT',
                'description': 'Creates an existing idea with data sent in post request'
            },
            {
                'Endpoint': '/ideas/id/delete/',
                'method': 'DELETE',
                'description': 'Deletes and exiting idea'
            },
            {
                'Endpoint': '/users/',
                'method': 'GET',
                'description': 'Returns an array of users'
            },
            {
                'Endpoint': '/users/id',
                'method': 'GET',
                'description': 'Returns a single users object'
            },
            {
                'Endpoint': '/users/new/',
                'method': 'POST',
                'description': 'Creates new users with data sent in post request'
            },
            {
                'Endpoint': '/users/id/update/',
                'method': 'PUT',
                'description': 'Creates an existing users with data sent in post request'
            },
            {
                'Endpoint': '/users/id/delete/',
                'method': 'DELETE',
                'description': 'Deletes and exiting users'
            },
                        {
                'Endpoint': '/users/login',
                'method': 'POST',
                'description': 'Logs in an user'
            },
                        {
                'Endpoint': '/ideators/',
                'method': 'GET',
                'description': 'Returns an array of ideators'
            },
        ]
    return Response(routes)

@api_view(["GET"])
def getIdeators(request):
    ideators = Ideator.objects.all()
    serializer = IdeatorSerializer(ideators, many=True)
    return Response(serializer.data)

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
    role = request.data['role']

    try:
        user = User.objects.create_user(
            username = username, 
            email = email, 
            password = password,
            first_name = first_name,
            last_name = last_name
        )

        
        if role == "ideator":
            ideator  =  Ideator.objects.create(
                first_name = first_name,
                last_name = last_name,
                email = email, 
                username = username, 
                password = user.password,
                role = role,
                date_joined = user.date_joined
            )

            data = {
                "id" : ideator.id,
                "first_name": ideator.first_name, 
                "last_name": ideator.last_name,
                "username": ideator.username, 
                "email": ideator.email, 
                "password": ideator.password,
                "role" : ideator.role,
                "date_joined" : ideator.date_joined 
            }

            return JsonResponse(data)

        elif role == "innovation_champion":
            innovation_champion  =  Innovation_Champion.objects.create(
                first_name = first_name,
                last_name = last_name,
                email = email, 
                username = username, 
                password = user.password,
                role = role,
                date_joined = user.date_joined
            )

            data = {
                "id" : innovation_champion.id,
                "first_name": innovation_champion.first_name, 
                "last_name": innovation_champion.last_name,
                "username": innovation_champion.username, 
                "email": innovation_champion.email, 
                "password": innovation_champion.password,
                "role" : innovation_champion.role,
                "date_joined" : innovation_champion.date_joined 
            }

            return JsonResponse(data)

        elif role == "admin":
            admin  =  Admin.objects.create(
                first_name = first_name,
                last_name = last_name,
                email = email, 
                username = username, 
                password = user.password,
                role = role,
                date_joined = user.date_joined
            )

            data = {
                "id": admin.id,
                "first_name": admin.first_name, 
                "last_name": admin.last_name,
                "username": admin.username, 
                "email": admin.email, 
                "password": admin.password,
                "role" : admin.role,
                "date_joined" : admin.date_joined 
            }
            return JsonResponse(data)

    except:
        return Response("existing_user")

@api_view(["POST"])
def loginUser(request):
    username = request.data['email'].split("@")[0]
    password = request.data['password']
    user = authenticate(request, username=username, password=password)

    if user:
        found_ideator = Ideator.objects.filter(username= username).first()
        found_innovation_champion = Innovation_Champion.objects.filter(username= username).first()
        found_admin = Admin.objects.filter(username= username).first()

        if found_ideator:
            serializer = IdeatorSerializer(found_ideator, many=False)
            return Response(serializer.data)
        elif found_innovation_champion:
            serializer = InnovationChampionSerializer(found_innovation_champion, many=False)
            return Response(serializer.data)
        elif found_admin:
            serializer = AdminSerializer(found_admin, many=False)
            return Response(serializer.data)
    else:
        return Response("invalid_credentials")

@api_view(["GET"])
def getIdeas(request):
    ideas = Idea.objects.all()
    serializer = IdeaSerializer(ideas, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getPrograms(request):
    programs = Program.objects.all()
    serializer = ProgramSerializer(programs, many=True)
    return Response(serializer.data)