from rest_framework import serializers
from .models import contact
# creating API of the pizza.
class  contactSerializer(serializers.ModelSerializer):
    class Meta:
        model =  contact
        fields=['id', 'name', 'phone', 'email', 'desc']