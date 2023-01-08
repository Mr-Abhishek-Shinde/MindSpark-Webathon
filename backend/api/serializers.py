from rest_framework.serializers import ModelSerializer
from .models import Ideator

class UserSerializer(ModelSerializer):
    class Meta:
        model = Ideator
        fields = '__all__'