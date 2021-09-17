from django.contrib.auth import base_user
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from core.models import CustomUser


class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = [
            'profile_image', 
            'rank', 
            'level_xp',
        ]


class UserSerializer(serializers.ModelSerializer):

    customuser = CustomUserSerializer(required=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name', 
            'last_name',
            'customuser'
        ]


class UserSerializerWithToken(serializers.ModelSerializer):

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'password', 'email')

class ChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)
    old_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('old_password', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def validate_old_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"old_password": "Old password is not correct"})
        return value

    def update(self, instance, validated_data):

        user = self.context['request'].user

        if user.pk != instance.pk:
            raise serializers.ValidationError({"authorize": "You dont have permission for this user."})

        instance.set_password(validated_data['password'])
        instance.save()

        return instance

class UpdateUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)

    customuser = CustomUserSerializer(required=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name', 
            'last_name',
            'customuser'
        ]

        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
        }

    def validate_email(self, value):
        user = self.context['request'].user
        if User.objects.exclude(pk=user.pk).filter(email=value).exists():
            raise serializers.ValidationError({"email": "This email is already in use."})
        return value

    def validate_username(self, value):
        user = self.context['request'].user
        if User.objects.exclude(pk=user.pk).filter(username=value).exists():
            raise serializers.ValidationError({"username": "This username is already in use."})
        return value

    def update(self, instance, validated_data):
        user = self.context['request'].user

        if user.pk != instance.pk:
            raise serializers.ValidationError({"authorize": "You dont have permission for this user."})

        instance.first_name = validated_data['first_name']
        instance.last_name = validated_data['last_name']
        instance.email = validated_data['email']
        instance.username = validated_data['username']
        instance.username = validated_data['customuser']['profile_image']

        instance.save()

        return instance

