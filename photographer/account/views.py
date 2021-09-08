from django.shortcuts import render
from rest_framework.views import APIView
from .searilizer import UserSerializers, photographerSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import User, photographer # import models
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt


from rest_framework.views import APIView
# Create your views here.

class Register(APIView):
    permission_classes = [AllowAny]
    authentication_classes = [JWTAuthentication]
    def post(self, request):
        serializer = UserSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
   
class Login(APIView):
    #permission_classes = [IsAuthenticated]
    #authentication_classes = [JWTAuthentication]
    def post(self,request):
        email = request.data['email']
        password = request.data['password']
        user = User.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed('user not found')
        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect Password")
        return Response({
            'message':'success'
        })

# photographer APIs with CURD operations
@csrf_exempt
def photographer_post(request): # post api 
    try:
        if request.method == 'POST': 
            data = JSONParser().parse(request)
            serializer = photographerSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)#
    except:
        print("please try after some Time Thanks!") 
# get request to fetch all the photographers
def photographer_get(request):
    try:
        if request.method == "GET":# get request to fetch the data
            photographer_feild = photographer.objects.all()
            serializer = photographerSerializer(photographer_feild, many=True)
            return JsonResponse(serializer.data, safe=False)
    except:
        print("please try after some Time Thanks!")