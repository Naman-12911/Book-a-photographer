from django.db import models
from django.contrib.auth.models import AbstractUser,PermissionsMixin
from django.utils.translation import ugettext_lazy as _
from account.managers import CustomUserManager
# Create your models here.
from django.contrib.auth.models import User

class User(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    phone_no = models.CharField(unique=True,  null=True,max_length=10)
    type_choice = (
        ('photographer', 'Photographer'),
        ('customer','Customer'),
    )
    user_type = models.CharField(choices = type_choice,max_length=20, default='customer')
    USERNAME_FIELD = 'email'
    objects = CustomUserManager() 
    REQUIRED_FIELDS = []
    def __str__(self):
        return self.email

class photographer(models.Model):
    email = models.EmailField(unique=True)
    #user = models.OneToOneField(User , on_delete=models.CASCADE, default=email)
    name = models.CharField(max_length= 200) 
    phone_number = models.BigIntegerField(unique=True)
    image1 = models.ImageField(null=True) # entre url of the Image
    image3 = models.ImageField(null=True)  # entre image of photogapher to represent 
    image2 = models.ImageField(null=True) # entre image of photogapher to represent 
    image4 = models.ImageField(null=True) # entre image of photogapher to represent 
    image5 = models.ImageField(null=True) # entre image of photogapher to represent 
    speaclization = models.CharField(max_length=200) # fill photographer spelization
    work_experience = models.TextField() # entre work enxperince of the user.
    awards = models.TextField(null=True) # entre awards if any awards 
    company_colaboration = models.TextField(null =True) # entre any company colloration
    preffred_location = models.CharField(null=True, max_length= 200) # any preferd loction you want.
    price = models.IntegerField() # entre price of the photographer.

    def __str__(self):
        return self.speaclization