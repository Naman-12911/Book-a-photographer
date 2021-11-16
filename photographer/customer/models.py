from django.db import models
from account.models import User
from photographer_thing.models import photographer
import datetime
# Create your models here.
class Bookings(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    photographer = models.ForeignKey(photographer,on_delete=models.CASCADE,null=True)
    address = models.CharField(max_length=100, null=True)
    near_by = models.CharField(max_length=100, null=True)
    phone_number = models.BigIntegerField(null=True)
    status = models.BooleanField(default=False)
    date = models.DateField(default=datetime.date.today)

    print(user)

    @staticmethod
    def get_booking_by_customer(user_id):
        return Bookings.objects.filter(user=user_id).order_by('_date')
    