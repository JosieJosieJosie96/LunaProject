from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.postgres.fields import ArrayField

from review.models import Review


class User(AbstractUser):
    location = models.CharField(max_length=50, blank=True)
    phone = models.CharField(max_length=50, blank=True)
    things_i_love = ArrayField(ArrayField(models.TextField()), null=True)
    description = models.TextField(blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    profile_picture = models.ImageField(upload_to="profile_picture", blank=True)
    banner_picture = models.ImageField(upload_to="banner_picture", blank=True)
    likes = models.ManyToManyField(Review, blank=True, related_name="liked_by")



