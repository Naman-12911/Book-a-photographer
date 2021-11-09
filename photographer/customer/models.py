from django.db import models
from account.models import User
from photographer_thing.models import photographer
# Create your models here.
class Bookings(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    photographer = models.ForeignKey(photographer,on_delete=models.CASCADE,null=True)
    