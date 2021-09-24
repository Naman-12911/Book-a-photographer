from django.urls import path, include
from photographer_thing import views
from django.views.static import serve

urlpatterns = [
    path('photographer-account/', views. photographer_post, name='photographer_post'), # get and post api
    path('photographer-account/<int:pk>/',views. photographerId_get, name=" photographerId_get"), # get request according to Id and Patch, delete request.
    path('posts/<int:pk>/like/',views.LikeListCreate, name = 'post_likes'),
]
