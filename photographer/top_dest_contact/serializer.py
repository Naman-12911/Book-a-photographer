from rest_framework import serializers
from .models import contact,destination
# creating API of the pizza.
class  contactSerializer(serializers.ModelSerializer):
    class Meta:
        model =  contact
        fields=['id', 'name', 'phone', 'email', 'desc']

class  top_destinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = destination
        fields = ['id', 'place', 'popular_for', 'tumbnail', 'pic1', 'pic2', 'pic3', 'decription']