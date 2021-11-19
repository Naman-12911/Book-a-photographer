from django.shortcuts import render

from photographer.photographer_thing.models import photographer
from .serializer import bookingserializer
from .models import Bookings
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

# create the fetch the deatils of the photographer.po
# @api_view(['GET',])
@permission_classes([AllowAny,])
@csrf_exempt
def booking(request,self):
    if request.method == "GET":
        booking = Bookings.objects.all()
        serializer =  bookingserializer(booking, many=True)
        return  JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        
        serializer = bookingserializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = 201)
        return JsonResponse(serializer.errors, status=400)

class booking_view(APIView):
    #permission_classes = (permissions.IsAuthenticated,) # For not handling authorization mannually

    def post(request):
        serializer = bookingserializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # Trigger Bad Request if errors exist
        serializer.save(user=request.user, photographer=)         # Passing the current user
        return Response(serializer.data, status=status.HTTP_201_CREATED)