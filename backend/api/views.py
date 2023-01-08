from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Ideator
from .serializers import UserSerializer

# Create your views here.

@api_view(["GET"])
def getRoutes(request):
    routes = [
            {
                'Endpoint': '/idea/',
                'method': 'GET',
                'body': None,
                'description': 'Returns an array of ideas'
            },
            {
                'Endpoint': '/idea/id',
                'method': 'GET',
                'body': None,
                'description': 'Returns a single idea object'
            },
            {
                'Endpoint': '/idea/create/',
                'method': 'POST',
                'body': {'body': ""},
                'description': 'Creates new idea with data sent in post request'
            },
            {
                'Endpoint': '/idea/id/update/',
                'method': 'PUT',
                'body': {'body': ""},
                'description': 'Creates an existing idea with data sent in post request'
            },
            {
                'Endpoint': '/idea/id/delete/',
                'method': 'DELETE',
                'body': None,
                'description': 'Deletes and exiting idea'
            },

            {
                'Endpoint': '/ideators/',
                'method': 'GET',
                'body': None,
                'description': 'Returns an array of ideatorss'
            },
            {
                'Endpoint': '/ideators/id',
                'method': 'GET',
                'body': None,
                'description': 'Returns a single ideators object'
            },
            {
                'Endpoint': '/ideators/create/',
                'method': 'POST',
                'body': {'body': ""},
                'description': 'Creates new ideators with data sent in post request'
            },
            {
                'Endpoint': '/ideators/id/update/',
                'method': 'PUT',
                'body': {'body': ""},
                'description': 'Creates an existing ideators with data sent in post request'
            },
            {
                'Endpoint': '/ideators/id/delete/',
                'method': 'DELETE',
                'body': None,
                'description': 'Deletes and exiting ideators'
            },
        ]
    return Response(routes)

@api_view(["POST"])
def createIdeator(request):
    data = request.data
    print("Request Data:", data)
    ideator =  Ideator.objects.get(id=1)
    print("Ideator:", ideator)
    serializer = UserSerializer(instance=ideator, data=data)
    print("Serializer:", serializer)
    # print("Serializer.data:", serializer.data)
    return Response("Data Received!") 