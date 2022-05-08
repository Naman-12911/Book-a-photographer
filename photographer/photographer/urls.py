
from django.contrib import admin
from django.urls import path,include
from django.urls import re_path as url
from django.conf import settings
from django.conf.urls.static import static, serve
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView
from rest_framework import routers
from photographer_thing.views import photographer_get
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

router = routers.DefaultRouter()
router.register('img',photographer_get)

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="web development project",
      terms_of_service="https://photographerhire.herokuapp.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="test License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)
urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/',include(router.urls)),
    path('account/',include('account.urls')), # account url
    path('photographer-account/',include('photographer_thing.urls')), # url for photographer things
    path('top_dest_contact/', include('top_dest_contact.urls')), #contact url
    path('customer/', include('customer.urls')), # coustomer  url
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # get a token
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # refresh a token
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'), # verify a token
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redopath')
    
] +static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
