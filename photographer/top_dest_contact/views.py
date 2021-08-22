from django.shortcuts import render, redirect
from .models import contact  # importing models from model file
from .serializer import contactSerializer # import pizza_choice form seializer file.
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
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