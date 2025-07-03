from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from .serializers import UserSerializer, MemberSerializer, ManagerSerializer, LoginSerializer

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer._validated_data
            token, created = Token.objects.get_or_create(user=user)
            
            role_data = {}
            if hasattr(user, 'member_profile'):
                role_data = MemberSerializer(user.member_profile).data
            elif hasattr(user, 'manager_profile'):
                role_data = ManagerSerializer(user.manager_profile).data
            role_data['user'] = UserSerializer(user).data
            
            return Response(
                {
                    'token': token.key,
                    'role': role_data
                },
                status = status.HTTP_200_OK
            )
        
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST) 
