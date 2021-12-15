# from _typeshed import Self
from django.shortcuts import render,HttpResponse
from .serializer import bookingserializer
from .models import Booking
from account.models import User
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions
from photographer_thing.permissions import IsOwner
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

# Create your views here.

# book the photographer with post request
class bookings(generics.GenericAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = bookingserializer
    @csrf_exempt
    def post(self, request):
        booking = request.data
        serializer = self.serializer_class(data=booking)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)
        return Response(status=status.HTTP_201_CREATED)

# get booking by current user 
from rest_framework.generics import ListCreateAPIView
class booking_id(ListCreateAPIView):
    permission_classes= (permissions.IsAuthenticated,)
    queryset = Booking.objects.all()
    serializer_class = bookingserializer
    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

# delete request in bookings
@csrf_exempt
def booking_delete(request,pk):
    permission_classes =  (permissions.IsAuthenticated,)
    try:
        booking_id = Booking.objects.get(pk=pk)
    except booking_id.DoesNotExist:
        return HttpResponse(status=404)
    # delete request to delete accoriding to id.
    if request.method == 'DELETE': 
        booking_id.delete()
        return HttpResponse("data delete",status=204)
