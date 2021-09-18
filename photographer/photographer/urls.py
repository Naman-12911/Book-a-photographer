
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/',include('account.urls')), # account url
    path('top_dest_contact/', include('top_dest_contact.urls')), #contact url
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # get a token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # refresh a token
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'), # verify a token
]


"""
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYyODk1ODQzMywianRpIjoiZjc2YmJhMzRhNWI3NDg0YjkyMzNiNmE4MzBjNzA2NTUiLCJ1c2VyX2lkIjoxfQ.Wg3XztEbnB3yDzecs68NV5XjOXk4qjccIs3v2GIPWto

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI4ODc1NjMzLCJqdGkiOiIzMGU3Zjlh
"""