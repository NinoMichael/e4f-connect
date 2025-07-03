from django.contrib.auth.backends import ModelBackend
from .models import User, Member, Manager

class IdentifierAuthBackend(ModelBackend):
    def authenticate(self, request, identifier = None, password = None, **kwargs):
        try:
            member = Member.objects.get(identifier=identifier)
            user = member.user
        except Member.DoesNotExist:
            try:
                manager = Manager.objects.get(identifier=identifier)
                user = manager.user
            except Manager.DoesNotExist:
                return None
        if user.check_password(password):
            return user
        return None
