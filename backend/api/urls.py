from rest_framework import routers
from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from api.views import UserViewSet, RankViewSet, AchievementViewSet

router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'ranks', RankViewSet)
router.register(r'achievement', AchievementViewSet)

urlpatterns = [
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    url(r'^accounts-rest/registration/account-confirm-email/(?P<key>.+)/$', confirm_email, name='account_confirm_email'),
    path('api-auth/', include('rest_framework.urls')),
]

urlpatterns += router.urls