from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import Level, User, Member, Manager

class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'lastname', 'firstname', 'birth_date', 'gender', 'email', 'contact', 'avatar', 'role', 'level', 'school', 'certification', 'bio', 'created_at', 'updated_at']

        def validate_birth_date(self, value):
            if not value:
                raise serializers.ValidationError('The birth date is required')
            return value

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manager
        fields = '__all__'

class LoginSerializer(serializers.Serializer):
    identifier = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(identifier=data['identifier'], password=data['password'])
        if not user:
            raise serializers.ValidationError('Invalid credentials')
        return user