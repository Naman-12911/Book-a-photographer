from django.urls import path, include
from .views import booking
from .import views
from .views import bookings

urlpatterns = [
    path('booking/', views.booking, name='booking'),
    path('book/',bookings.as_view(),name='book')
]

