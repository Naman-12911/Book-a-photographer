from rest_framework import fields, serializers
from .models import Booking
from photographer_thing.models import photographer
from photographer_thing.searilizer import photographerSerializer
from account.searilizer import UserSerializers

class bookingserializer(serializers.ModelSerializer):
    # photographer = photographerSerializer(many=True)
    #user = UserSerializers(many=True,read_only=True)
    class Meta:
        model = Booking
        fields = ['id', 'address','near_by','phone_number','date',"photographer",'status','user']
        #fields = "__all__"
        # depth = 1
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['photographer'] = photographerSerializer(instance.photographer).data
        response['user'] = UserSerializers(instance.user).data
        return response