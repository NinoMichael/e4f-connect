from django.db import models
from django.contrib.auth.models import AbstractUser

class Level(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class User(AbstractUser):
    lastname = models.CharField(max_length=250)
    firstname = models.CharField(max_length=250)
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(
        choices=[('M','M'), ('F','F')],
        default='M'
    )
    email = models.EmailField(unique=True, null=True)
    contact = models.CharField(max_length=15, null=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    role = models.CharField(
        choices=[('member', 'member'), ('manager', 'manager')],
        default='member'
    )
    level = models.ForeignKey(Level, on_delete=models.SET_NULL, null=True, blank=True)
    school = models.JSONField(default=list, blank=True)
    certification = models.CharField(max_length=255, null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname} - {self.email}"

class Member(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='member_profile')
    identifier = models.CharField(max_length=13, unique=True)
    badge = models.IntegerField(default=1)
    points = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.identifier

class Manager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='manager_profile')
    identifier = models.CharField(max_length=13, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.identifier