from top_dest_contact import views
from .views import contact
from django.urls import path

urlpatterns = [
    #path('contact/', contact.as_view()),
    path('contact/', views.contact, name='contact'),
]
