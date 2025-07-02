from django.db import models
from django.contrib.auth.models import AbstractUser

class Level(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class User(AbstractUser):
    lastname = models.CharField(max_length=250)
    firstname = models.CharField(max_length=250)
    birth_date = models.DateField()
    gender = models.CharField(
        choices=[('M','M'), ('F','F')],
        default='M'
    )
    email = models.EmailField(unique=True, null=True)
    contact = models.CharField(max_length=15, null=True)
    avatar = models.CharField(max_length=255, null=True)
    role = models.CharField(
        choices=[('member', 'member'), ('admin', 'admin')],
        default='member'
    )
    level = models.ForeignKey(Level, on_delete=models.SET_NULL)
    school = models.JSONField(default=list)
    certification = models.CharField(max_length=255, null=True)
    bio = models.TextField()

    def __str__(self):
        return f"{self.firstname} {self.lastname} - {self.email}"

class Member(models.Model):
    id = models.OneToOneField(User, on_delete=models.CASCADE, related_name='member_profile')
    identifier = models.CharField(max_length=13, unique=True)
    badge = models.IntegerField()
    points = models.IntegerField()

    def __str__(self):
        return self.identifier

class Manager(models.Model):
    id = models.OneToOneField(User, on_delete=models.CASCADE, related_name='manager_profile')
    identifier = models.IntegerField()

    def __str__(self):
        return self.identifier