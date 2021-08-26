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
# api  for contact
@csrf_exempt
def contact(request):
    if request.method == 'POST': # post request to post the contact form
        data = JSONParser().parse(request)
        serializer = contactSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)#

def destination_list(request):
    if request.method == "GET":# get request to fetch the data
        pizza_choice = destination.objects.all()
        serializer = top_destinationSerializer(pizza_choice, many=True)
        return JsonResponse(serializer.data, safe=False)

def destination_detail(request, pk):
    try:
        destination_id = destination.objects.get(pk=pk)
    except destination_id.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET': # get request to fetch all the data according to the id
        serializer = top_destinationSerializer(destination_id)
        return JsonResponse(serializer.data)