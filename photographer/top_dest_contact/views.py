from django.shortcuts import render, redirect
from top_dest_contact.serializer import contactSerializer, top_destinationSerializer # import pizza_choice form seializer file.
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from top_dest_contact.models import destination
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.views import APIView
from photographer_thing import pagination
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import permissions
from photographer_thing.permissions import IsOwner

# api  for contact
# post request to post the contact form
@csrf_exempt
def contact(request):
    try:
        if request.method == 'POST': 
            data = JSONParser().parse(request)
            serializer = contactSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)
    except:
        print("please try after some Time Thanks!") 

# fetch all the blogs 
@api_view(['GET',])
@permission_classes([permissions.IsAuthenticated])
def destination_list(request):
    paginator = pagination.mypagination()
   # paginator.page_size = 5
    destination_blog = destination.objects.all()
    result_page = paginator.paginate_queryset(destination_blog, request)
    serializer = top_destinationSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializer.data)

    
# fetch all the blogs according to their slug feild
@permission_classes([permissions.IsAuthenticated])
def top_destination_slug(request, slug):
    try:
        destination_slug = destination.objects.filter(slug=slug).first()
    except destination_slug.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET': # get request to fetch all the data according to the id
        serializer = top_destinationSerializer(destination_slug)
        return JsonResponse(serializer.data)