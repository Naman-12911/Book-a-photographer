from .views import Register, Login
from django.urls import path, include

urlpatterns = [
    path('register/', Register.as_view()),
    path('login/', Login.as_view())

]