from django.urls import path
from .views import current_user, UserList, ChangePasswordView, UpdateProfileView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('change_password/<int:pk>/', ChangePasswordView.as_view()),
    path('update_profile/<int:pk>/', UpdateProfileView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]