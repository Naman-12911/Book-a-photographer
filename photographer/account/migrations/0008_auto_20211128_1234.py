# Generated by Django 3.0.5 on 2021-11-28 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0007_user_auth_provider'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_type',
            field=models.CharField(choices=[('photographer', 'Photographer'), ('customer', 'Customer')], default='customer', max_length=20),
        ),
    ]
