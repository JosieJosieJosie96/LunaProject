from django.db import models

from project import settings


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    opening_hours = models.CharField(max_length=100)
    price_level = models.CharField()
    image = models.ImageField(upload_to='restaurant_images')
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
