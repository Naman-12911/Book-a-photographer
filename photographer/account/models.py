from django.db import models
from django.contrib.auth.models import AbstractUser,PermissionsMixin
from django.utils.translation import ugettext_lazy as _
from account.managers import CustomUserManager
# Create your models here.
from django.contrib.auth.models import User

class User(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    phone_no = models.BigIntegerField(unique=True,null=True)
    USERNAME_FIELD = 'email'
    objects = CustomUserManager() 
    REQUIRED_FIELDS = []
    def __str__(self):
        return self.email