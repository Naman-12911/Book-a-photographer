# Generated by Django 3.0.5 on 2021-09-06 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.BigIntegerField()),
                ('desc', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='destination',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('place', models.CharField(max_length=100)),
                ('popular_for', models.CharField(max_length=100, null=True)),
                ('slug', models.SlugField(max_length=200, unique=True)),
                ('tumbnail', models.URLField()),
                ('decription', models.TextField()),
            ],
        ),
    ]
