from django.db.models.fields import files
from rest_framework import serializers
from core.models import Rank, Achievement
from user.models import CustomUser
from rest_auth.registration.serializers import RegisterSerializer as RARegisterSerializer

class Base64ImageField(serializers.ImageField):

    def to_internal_value(self, data):
        from django.core.files.base import ContentFile
        import base64
        import six
        import uuid

        if isinstance(data, six.string_types):
            if 'data:' in data and ';base64,' in data:
                header, data = data.split(';base64,')

            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_image')

            file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
            file_extension = self.get_file_extension(file_name, decoded_file)
            complete_file_name = "%s.%s" % (file_name, file_extension, )
            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension

class CustomRegisterSerializer(RARegisterSerializer):
    first_name = serializers.CharField(required=False)
    second_name = serializers.CharField(required=False)
    profile_image = Base64ImageField(max_length=None, use_url=True)

    def custom_signup(self, request, user):
        user.first_name = self.validated_data.get('first_name', '')
        user.second_name = self.validated_data.get('second_name', '')
        user.profile_image = self.validated_data.get('profile_image', '')
        user.save(update_fields=['first_name', 'second_name', 'profile_image'])

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