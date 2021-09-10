from django.shortcuts import render
from rest_framework.views import APIView
from .searilizer import UserSerializers, photographerSerializer,UserLoginSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import User, photographer # import models
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.generics import RetrieveAPIView
from rest_framework.views import APIView
# Create your views here.
# user registration 
class Register(APIView):
    permission_classes = [AllowAny]
    authentication_classes = [JWTAuthentication]
    def post(self, request):
        serializer = UserSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        status_code = status.HTTP_201_CREATED
        return Response(serializer.data,status=status_code)

class  Login(RetrieveAPIView):

    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        response = {
            'success' : 'True',
            'status code' : status.HTTP_200_OK,
            'message': 'User logged in  successfully',
            'token' : serializer.data['token'],
            }
        status_code = status.HTTP_200_OK

        return Response(response, status=status_code)

#permission_classes = [IsAuthenticated]
# #authentication_classes = [JWTAuthentication]

# photographer APIs with CURD operations

@csrf_exempt
def photographer_post(request):  
        # post api
    if request.method == 'POST': 
        data = JSONParser().parse(request)
        serializer = photographerSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    # get request to fetch the data
    elif request.method == "GET":
        photographer_feild = photographer.objects.all()
        serializer = photographerSerializer(photographer_feild, many=True)
        return JsonResponse(serializer.data, safe=False)
    
@csrf_exempt
def photographerId_get(request,pk):
    try:
        photographer_id = photographer.objects.get(pk=pk)
    except photographer_id.DoesNotExist:
        return HttpResponse(status=404)
    # get request to fetch all the data according to the id
    if request.method == 'GET': 
        serializer = photographerSerializer(photographer_id)
        return JsonResponse(serializer.data)
    # Patch request to update the data
    elif request.method == 'PUT': # put request to updat the partical data
        data = JSONParser().parse(request)
        serializer = photographerSerializer(photographer_id, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    # delete request to delete accoriding to id.
    elif request.method == 'DELETE': 
        photographer_id.delete()
        return HttpResponse("data delete",status=204)
