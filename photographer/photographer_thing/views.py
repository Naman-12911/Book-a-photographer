from django.shortcuts import render
from rest_framework.views import APIView
from .searilizer import photographerSerializer, likeSerializer # searilizers
from rest_framework.response import Response
from .models import photographer,like               # import models
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.views import APIView
from . import pagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import generics # import genric view for the img url
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import viewsets
from account.models import User
from django.db.models import Q
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from .permissions import IsOwner
# Create your views here.
@csrf_exempt
def photographer_post(request):  
    permission_classes = (permissions.IsAuthenticated,)
    paginator = pagination.mypagination()
        # post api
    parser_classes = (MultiPartParser, FormParser)
    if request.method == 'POST': 
        data = JSONParser().parse(request)
        serializer = photographerSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    # get request to fetch the data
    


@csrf_exempt
def photographerId_get(request,pk):
    permission_classes = [IsAuthenticated]
    try:
        photographer_id = photographer.objects.get(pk=pk)
    except photographer_id.DoesNotExist:
        return HttpResponse(status=404)
    # Patch request to update the data
    if request.method == 'PUT': # put request to updat the partical data
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


 # like apis 
class photographer_get(viewsets.ModelViewSet): # to fetch all the photographer main thingd to use gives umg url
    permission_classes = (permissions.IsAuthenticated,)
    queryset = photographer.objects.all()
    serializer_class = photographerSerializer


class single_photographer(generics.ListAPIView): #to fect onyly 1 photgrapher details in main things to use is gives img url

    serializer_class =photographerSerializer
    queryset = photographer.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, pk=None):
        imgobj = photographer.objects.get(pk=pk)
        serializer = photographerSerializer(imgobj, context= 
        {'request': request})
        return Response( serializer.data)