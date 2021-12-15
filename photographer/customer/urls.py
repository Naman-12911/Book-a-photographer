from django.urls import path
from .import views
from .views import bookings,booking_id

urlpatterns = [
    path('book/',bookings.as_view(),name='book'),
    path('booking_id/',views.booking_id.as_view(),name="booking_id"),
    path('booking_delete/<int:pk>/',views.booking_delete,name="booking_delete"),

]

