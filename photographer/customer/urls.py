from django.urls import path
from .views import booking
from .import views
from .views import bookings,booking_id

urlpatterns = [
    path('booking/', views.booking, name='booking'),
    path('book/',bookings.as_view(),name='book'),
    path('booking-id/<int:pk>/',views.booking_id,name="booking_id")
]

