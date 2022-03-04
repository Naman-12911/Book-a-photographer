from django.db import models
from account.models import User
from photographer_thing.models import photographer
import datetime
# Create your models here.
class Booking(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE, null=True)
    photographer = models.ForeignKey(photographer,on_delete=models.CASCADE,null=True, related_name="photographer_set")
    address = models.CharField(max_length=100, null=True)
    near_by = models.CharField(max_length=100, null=True)
    phone_number = models.BigIntegerField(null=True)
    status = models.BooleanField(default=False)
    date = models.DateField(default=datetime.date.today)

    @staticmethod
    def get_booking_by_customer(user_id):
        return Booking.objects.filter(user=user_id).order_by('_date')
    