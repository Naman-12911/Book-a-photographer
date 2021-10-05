# Generated by Django 3.0.5 on 2021-09-18 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='photographer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('phone_number', models.BigIntegerField(unique=True)),
                ('image1', models.ImageField(null=True, upload_to='')),
                ('image3', models.ImageField(null=True, upload_to='')),
                ('image2', models.ImageField(null=True, upload_to='')),
                ('image4', models.ImageField(null=True, upload_to='')),
                ('image5', models.ImageField(null=True, upload_to='')),
                ('speaclization', models.CharField(max_length=200)),
                ('work_experience', models.TextField()),
                ('awards', models.TextField(null=True)),
                ('company_colaboration', models.TextField(null=True)),
                ('preffred_location', models.CharField(max_length=200, null=True)),
                ('price', models.IntegerField()),
            ],
        ),
    ]