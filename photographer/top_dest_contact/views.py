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
from account.pagination import mypagination
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
            return JsonResponse(serializer.errors, status=400)#
    except:
        print("please try after some Time Thanks!") 

# fetch all the blogs 
def destination_list(request):
    try:
        if request.method == "GET":# get request to fetch the data
            destination_blog = destination.objects.all()
            serializer = top_destinationSerializer(destination_blog, many=True)
            return JsonResponse(serializer.data, safe=False)
            pagination_list = mypagination
    except:
        print("please try after some Time Thanks!")
# fetch all the blogs according to their slug feild
def top_destination_slug(request, slug):
    try:
        destination_slug = destination.objects.filter(slug=slug).first()
    except destination_slug.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == 'GET': # get request to fetch all the data according to the id
        serializer = top_destinationSerializer(destination_slug)
        return JsonResponse(serializer.data)