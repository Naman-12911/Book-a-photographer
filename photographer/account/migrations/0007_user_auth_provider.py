# Generated by Django 3.0.5 on 2021-11-20 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0006_user_is_verified'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='auth_provider',
            field=models.CharField(default='email', max_length=255),
        ),
    ]
