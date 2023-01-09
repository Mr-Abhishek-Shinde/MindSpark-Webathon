from rest_framework.serializers import ModelSerializer
from .models import Ideator, Innovation_Champion, Admin
from django.contrib.auth.models import User

class IdeatorSerializer(ModelSerializer):
    class Meta:
        model = Ideator
        fields = '__all__'

class InnovationChampionSerializer(ModelSerializer):
    class Meta:
        model = Innovation_Champion
        fields = '__all__'

class AdminSerializer(ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'