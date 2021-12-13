from os import name
from .views import Register, Login, VerifyEmail,userData, deleteAccount,update_profile
from django.urls import path, include
from account import views

urlpatterns = [
    path('register/', Register.as_view(),name="register"),
    path('login/', Login.as_view()),
    path('email-verify/',VerifyEmail.as_view(),name="email-verify"),
    path('profile/',userData.as_view(),name="profile"),
    path('delete-account/',deleteAccount.as_view(),name="delete-account"),
    path('update-profile/',update_profile.as_view(),name="update_profile"),

]