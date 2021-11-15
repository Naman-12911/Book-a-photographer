from django.urls import path, include
from customer import views

urlpatterns = [
    path('booking/', views.booking, name='booking'),
]

