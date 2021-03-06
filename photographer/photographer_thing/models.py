from django.db import models
from account.models import User
class photographer(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length= 200) 
    phone_number = models.BigIntegerField(unique=True)
    image1 = models.ImageField(null=True,upload_to='post_images') # entre url of the Image
    image3 = models.ImageField(null=True,upload_to='post_images')  # entre image of photogapher to represent 
    image2 = models.ImageField(null=True,upload_to='post_images') # entre image of photogapher to represent 
    image4 = models.ImageField(null=True,upload_to='post_images') # entre image of photogapher to represent 
    image5 = models.ImageField(null=True,upload_to='post_images') # entre image of photogapher to represent 
    speaclization = models.CharField(max_length=200) # fill photographer spelization
    work_experience = models.TextField() # entre work enxperince of the user.
    awards = models.TextField(null=True) # entre awards if any awards 
    company_colaboration = models.TextField(null =True) # entre any company colloration
    preffred_location = models.CharField(null=True, max_length= 200) # any preferd loction you want.
    price = models.IntegerField() # entre price of the photographer.
    like = models.ManyToManyField(User, blank=True)

    def __str__(self):
        return self.email
    @property # for count all the likes
    def getlike(self):
        return like.objects.filter(post=self).count()
    
class like(models.Model):
    likeusers = models.ForeignKey(User,on_delete=models.CASCADE,null=True )
    likepost = models.ForeignKey(photographer ,on_delete=models.CASCADE,null=True,related_name='likepost')
    def __str__(self):
        return self.likeusers.count()