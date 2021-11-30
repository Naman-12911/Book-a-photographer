from rest_framework import serializers
from .models import Bookings
from photographer_thing.searilizer import photographerSerializer

class bookingserializer(serializers.ModelSerializer):
    #photographer_set = photographerSerializer()
    user = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())
    class Meta:
        model = Bookings
        fields = ['id', 'address','near_by','phone_number','date',"photographer",'user','status']
        depth = 1
    def save(self, **kwargs):
        """Include default for read_only `user` field"""
        kwargs["user"] = self.fields["user"].get_default()
        return super().save(**kwargs)