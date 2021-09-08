from top_dest_contact import views
from .views import contact
from django.urls import path

urlpatterns = [
    path('contact/', views.contact, name='contact'), # url fro post the contact form
    path('top-destination/', views.destination_list, name='destination_list'), # url for fetch all the blogs 
    path('top-destination/<str:slug>/', views. top_destination_slug, name=" top_destination_slug"), # url for fetch all the blogs according to their slug feild
]
