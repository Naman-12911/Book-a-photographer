from .models import User, photographer
from rest_framework import serializers

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name','last_name','phone_no','email','password','user_type']
        extra_kwargs = {
            'password' :{'write_only':True}  #  to does not return password in api ## postman
        }
    # convert password to hash key
    def create(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class photographerSerializer(serializers.ModelSerializer):
    class Meta:
        model = photographer
        feilds = ['id','email','user','phone_numbe','image1','image2','image3','image4','image5','speaclization',' work_experience',' price']
        