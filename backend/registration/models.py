import string
import random

from django.db import models

from project import settings


def code_generator(length=12):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))


class Registration(models.Model):
    registration_code = models.CharField(max_length=12, default=code_generator)
    user = models.OneToOneField(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f"registration with code {self.registration_code}"
