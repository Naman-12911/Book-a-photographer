from os import name
from .views import Register, Login, VerifyEmail,logout
from django.urls import path, include
from account import views

urlpatterns = [
    path('register/', Register.as_view(),name="register"),
    path('login/', Login.as_view()),
    path('logout/',logout.as_view(),name='logout'),
    path('email-verify/',VerifyEmail.as_view(),name="email-verify")
]