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
from rest_framework.generics import RetrieveAPIView
from rest_framework.views import APIView
from . import pagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import generics # import genric view for the img url

# Create your views here.
@csrf_exempt
def photographer_post(request):  
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

class LikeListCreate(APIView):

    # def get(self,request,pk):#function to get total number of likes to particular post
    #     post = photographer.objects.filter(pk=pk) # find which post's likes are to be extracted
    #     like_count = post.likepost.count()# counts total user likes ,besides my code is wrong
    #     serializer = photographer(like_count,many=True)
    #     return Response(serializer.data)

    def post(self,request,pk):#function to add likes to post
        # how do I check if user is already liked the post ?
        likeusers = request.user
        likepost = photographer.objects.filter(pk=pk)
        new_like = like(likeusers=request.user, likepost=likepost)
        new_like.save()
        serializer = likeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(likeusers,likepost)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
@csrf_exempt
def email(request,pk):
    try:
        photographer_id = photographer.objects.get(pk=pk)
    except photographer_id.DoesNotExist:
        return HttpResponse(status=404)
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework import viewsets
from django.shortcuts import get_object_or_404

class photographer_get(viewsets.ModelViewSet): # to fetch all the photographer main thingd to use gives umg url
    permission_classes = [AllowAny]
    queryset = photographer.objects.all()
    serializer_class = photographerSerializer
    # def retrieve(self, request, pk=None):
    
        # Returns a single object
        # and this is not gives the img and file url in postman 
        
        # photographer_id = get_object_or_404(self.queryset,pk=pk)
        # serializer_class = photographerSerializer(photographer_id)
        # return Response(serializer_class.data)



class single_photographer(generics.ListAPIView): #to fect onyly 1 photgrapher details in main things to use is gives img url

    serializer_class =photographerSerializer
    queryset = photographer.objects.all()
    permission_classes = [AllowAny] 

    def get(self, request, pk=None):
        imgobj = photographer.objects.get(pk=pk)
        serializer = photographerSerializer(imgobj, context= 
        {'request': request})
        return Response( serializer.data)