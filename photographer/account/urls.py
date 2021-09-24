from .views import Register, Login,logout
from django.urls import path, include
from account import views

urlpatterns = [
    path('register/', Register.as_view()),
    path('login/', Login.as_view()),
    path('logout/',views.logout,name='logout'),
]