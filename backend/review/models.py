from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from project import settings
from restaurant.models import Restaurant


class Review(models.Model):
    text_content = models.TextField()
    rating = models.PositiveSmallIntegerField(validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
