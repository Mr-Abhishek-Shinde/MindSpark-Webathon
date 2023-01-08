from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Ideator, Jury, Admin
from .serializers import IdeatorSerializer

# Create your views here.

@api_view(["GET"])
def getRoutes(request):
    routes = [
            {
                'Endpoint': '/idea/',
                'method': 'GET',
                'description': 'Returns an array of ideas'
            },
            {
                'Endpoint': '/idea/id',
                'method': 'GET',
                'description': 'Returns a single idea object'
            },
            {
                'Endpoint': '/idea/create/',
                'method': 'POST',
                'description': 'Creates new idea with data sent in post request'
            },
            {
                'Endpoint': '/idea/id/update/',
                'method': 'PUT',
                'description': 'Creates an existing idea with data sent in post request'
            },
            {
                'Endpoint': '/idea/id/delete/',
                'method': 'DELETE',
                'description': 'Deletes and exiting idea'
            },

            {
                'Endpoint': '/ideators/',
                'method': 'GET',
                'description': 'Returns an array of ideatorss'
            },
            {
                'Endpoint': '/ideators/id',
                'method': 'GET',
                'description': 'Returns a single ideators object'
            },
            {
                'Endpoint': '/ideators/create/',
                'method': 'POST',
                'description': 'Creates new ideators with data sent in post request'
            },
            {
                'Endpoint': '/ideators/id/update/',
                'method': 'PUT',
                'description': 'Creates an existing ideators with data sent in post request'
            },
            {
                'Endpoint': '/ideators/id/delete/',
                'method': 'DELETE',
                'description': 'Deletes and exiting ideators'
            },
        ]
    return Response(routes)

@api_view(["GET"])
def getIdeators(request):
    ideators = Ideator.objects.all()
    serializer = IdeatorSerializer(ideators, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def createIdeator(request):
    data = request.data
    ideator =  Ideator.objects.get(id=1)
    serializer = IdeatorSerializer(instance=ideator, data=data)
    return Response("Data Received!") 

@api_view(["GET"])
def getUsers(request):
    ideators = Ideator.objects.all()
    jurys = Jury.objects.all()
    admins = Admin.objects.all()

    ideator_data = IdeatorSerializer(ideators, many=True).data
    jury_data = IdeatorSerializer(jurys, many=True).data
    admin_data = IdeatorSerializer(admins, many=True).data


    users = ideator_data + jury_data + admin_data
    

    return Response(users)