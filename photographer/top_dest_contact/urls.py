from top_dest_contact import views
from .views import contact
from django.urls import path

urlpatterns = [
    path('contact/', views.contact, name='contact'),
    path('top-destination/', views.destination_list, name='destination_list'),
    path('destination/<int:pk>', views.destination_detail, name="destination_detail")
]
