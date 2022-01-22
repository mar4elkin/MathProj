from rest_framework import viewsets, filters
from rest_framework import authentication, permissions
from core.models import Rank, Achievement
from user.models import CustomUser
from api.serializers import RankSerializer, AchievementSerializer, UserSerializer

class RankViewSet(viewsets.ModelViewSet):
    queryset = Rank.objects.all()
    serializer_class = RankSerializer

class AchievementViewSet(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer