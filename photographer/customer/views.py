from django.shortcuts import render
# from photographer.photographer_thing.models import photographer
from .serializer import bookingserializer
from .models import Booking
from account.models import User
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions
from photographer_thing.permissions import IsOwner
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

# Create your views here.

# create the fetch the deatils of the photographer.po
@api_view(['GET','POST'])
@csrf_exempt
@permission_classes([permissions.IsAuthenticated])
def booking(request):
    if request.method == "GET":
        booking = Booking.objects.all()
        serializer =  bookingserializer(booking, many=True)
        return  JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        # data = JSONParser().parse(request)
        serializer = bookingserializer(data=request.data)
        request.data['user'] = request.user.id
        if not Booking.status:
            Booking.status = True
            Booking.save()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


# @csrf_exempt
@permission_classes([permissions.IsAuthenticated])
# def booking(request):
#     if request.method == "POST":
#         # data = JSONParser().parse(request)
#         serializer = bookingserializer(data=request.data)
#         request.data['user'] = request.user.id
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return JsonResponse(serializer.errors, status=400)


class bookings(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = bookingserializer
    @csrf_exempt
    def post(self, request):
        booking = request.data
        # booking_user = self.request.user
        serializer = self.serializer_class(data=booking)
        Booking.status = True
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
