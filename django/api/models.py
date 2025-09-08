from django.db import models

# Create your models here.
class User (models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    password_hash = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    email_verified = models.BooleanField(default=False)
    last_login = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.email