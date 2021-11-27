from django.urls import path, include
from .views import booking
from .import views

urlpatterns = [
    path('booking/', views.booking, name='booking'),
]

