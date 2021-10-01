from django.urls import path, include
from photographer_thing import views
from django.views.static import serve
from .views import single_photographer
from rest_framework import routers


urlpatterns = [
    path('photographer-account/', views. photographer_post, name='photographer_post'), # get and post api
    path('photographer-account/<int:pk>/',views. photographerId_get, name=" photographerId_get"), # get request according to Id and Patch, delete request.
    path('like/',views.LikeListCreate, name = 'post_likes'),
    path('single-photographer/<int:pk>/',single_photographer.as_view()), # genric api for pk img
    #path('pic/',photographer_get.as_view()), # model viewset api view to fecth all the photographer
    #path('photographer-account/pic/',views.postview.as_view(), name="postview"),

]
