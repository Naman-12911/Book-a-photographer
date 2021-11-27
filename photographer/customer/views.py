from django.shortcuts import render

# from photographer.photographer_thing.models import photographer
from .serializer import bookingserializer
from .models import Bookings
from account.models import User
from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

# create the fetch the deatils of the photographer.po
# @api_view(['GET',])
# @permission_classes([AllowAny,])
@csrf_exempt
def booking(request):
    if request.method == "GET":
        booking = Bookings.objects.all()
        serializer =  bookingserializer(booking, many=True)
        return  JsonResponse(serializer.data, safe=False)

    # elif request.method == 'POST':
    #     # data = JSONParser().parse(request)
    #     serializer = bookingserializer(data=request.data)
    #     # request.data['user'] = request.user.id
    #     # request.data['user']= request.user.id
    #     #request.data['status'] = True
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status =status.HTTP_201_CREATED)
    #     return JsonResponse(serializer.errors, status=400)
        

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
class booking(generics.GenericAPIView):
    # permission_classes = [AllowAny]
    serializer_class = bookingserializer
    # renderer_classes = (UserRenderer,)
    @csrf_exempt
    def post(self, request):
        booking = request.data
        booking_user = self.request.user
        serializer = self.serializer_class(data=booking, data_=booking_user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        # user_data = serializer.data
        # user = User.objects.get(email=user_data['email'])
        # current_site = get_current_site(request).domain
        # relativeLink = reverse('photographer information')
        # absurl = 'http://'+current_site+relativeLink+"?token="+str(token)
        # email_body = 'Hi '+user.email + \
        #     ' Use the link below to verify your email \n' + absurl
        # data = {'email_body': email_body, 'to_email': user.email,
        #         'email_subject': 'Verify your email'}

        # Utils.send_email(data)
        return Response(status=status.HTTP_201_CREATED)