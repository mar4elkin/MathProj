from rest_framework import routers
from rest_framework.schemas import get_schema_view
from allauth.account.views import confirm_email
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from api.views import UserViewSet, RankViewSet, AchievementViewSet, RegistrationView

router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'ranks', RankViewSet)
router.register(r'achievement', AchievementViewSet)

urlpatterns = [
    path('openapi', get_schema_view(
        title="MathProj",
        description="API Schema",
        version="1.0.0"
    ), name='openapi-schema'),
    url(r'^rest-auth/', include('rest_auth.urls')),
    #url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    url(r'^accounts-rest/registration/account-confirm-email/(?P<key>.+)/$', confirm_email, name='account_confirm_email'),
    path('api-auth/', include('rest_framework.urls')),
    url(r'^rest-auth/registration/', RegistrationView.as_view())
]

urlpatterns += router.urls