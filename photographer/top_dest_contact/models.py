from django.db import models

# Create your models here.
class contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.BigIntegerField()
    desc = models.TextField()
    def __str__(self):
        return self.email
class destination(models.Model):
    place = models.CharField(max_length=100)
    popular_for = models.CharField(max_length=100, null=True)
    slug = models.SlugField()
    tumbnail = models.URLField()
    decription = models.TextField()
    def __str__(self):
        return self.place