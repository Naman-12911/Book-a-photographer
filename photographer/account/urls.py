from .views import Register, Login
from django.urls import path, include
from account import views

urlpatterns = [
    path('register/', Register.as_view()),
    path('login/', Login.as_view()),
    path('photographer-account/', views. photographer_post, name='photographer_post'), # get and post api
    path('photographer-account/<int:pk>/',views. photographerId_get, name=" photographerId_get") # get request according to Id and Patch, delete request.

]