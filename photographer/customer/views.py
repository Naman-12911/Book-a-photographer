from django.shortcuts import render
from .serializer import bookingserializer
from .models import Bookings
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, permission_classes
from django.http import HttpResponse,JsonResponse
# Create your views here.

# create the fetch the deatils of the photographer.po
@api_view(['GET',])
@permission_classes([AllowAny,])
def booking(request):
    if request.method == "GET":
        booking = Bookings.objects.all()
        serializer =  bookingserializer(booking, many=True)
        return  JsonResponse(serializer.data, safe=False)
