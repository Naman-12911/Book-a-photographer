# Generated by Django 3.0.5 on 2021-11-12 08:39

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookings',
            name='address',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='bookings',
            name='date',
            field=models.DateField(default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='bookings',
            name='phone_number',
            field=models.BigIntegerField(null=True),
        ),
        migrations.AddField(
            model_name='bookings',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]
