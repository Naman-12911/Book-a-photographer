from .models import photographer,like
from rest_framework import serializers


class photographerSerializer(serializers.HyperlinkedModelSerializer):
    #image1 = serializers.HyperlinkedIdentityField(view_name='img',read_only=True)
    class Meta:
        model = photographer
        fields = ['id','name','email','phone_number','image1','image2','image3','image4','image5','speaclization','work_experience','price','awards',
        "preffred_location","company_colaboration"]
        #fields = "__all__"
        
class likeSerializer(serializers.ModelSerializer):
    class Meta:
        model = like
        fields = '__all__'