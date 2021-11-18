from rest_framework import serializers
from .models import Bookings
from photographer_thing.searilizer import photographerSerializer

class bookingserializer(serializers.ModelSerializer):
    #photographer_set = photographerSerializer()
    class Meta:
        model = Bookings
        fields = ['id', 'address','near_by','phone_number','date',"photographer",'user',]
        depth = 1