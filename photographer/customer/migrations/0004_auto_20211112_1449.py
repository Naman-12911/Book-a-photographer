# Generated by Django 3.0.5 on 2021-11-12 09:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0003_bookings_near_by'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookings',
            name='date',
            field=models.DateField(default=datetime.datetime.today),
        ),
    ]
