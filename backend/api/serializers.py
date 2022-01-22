from django.db.models.fields import files
from rest_framework import serializers
from core.models import Rank, Achievement
from user.models import CustomUser

class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = [
            'id',
            'rank_name',
            'rank_position',
            'rank_mmr_range_start',
            'rank_mmr_range_end',
            'rank_image'
        ]

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = [
            'id',
            'title',
            'description',
            'achieve_image'
        ]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id', 
            'email', 
            'first_name', 
            'last_name', 
            'date_of_birth',
            'profile_image',
            'rank',
            'mmr'
        ]