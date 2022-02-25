from rest_framework import viewsets
from rest_framework.views import APIView
from core.models import Rank, Achievement
from user.models import CustomUser
from rest_auth.registration.views import RegisterView
from api.serializers import RankSerializer, AchievementSerializer, UserSerializer, CustomRegisterSerializer

class RegistrationView(RegisterView):
    serializer_class = CustomRegisterSerializer

class RankViewSet(viewsets.ModelViewSet):
    queryset = Rank.objects.all()
    serializer_class = RankSerializer

class AchievementViewSet(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()