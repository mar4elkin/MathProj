from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from core.models import Rank, Problem, GenTest
from .managers import CustomUserManager

class CustomUser(AbstractUser):
    username = models.CharField(blank=False, max_length=100, default="")
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    first_name = models.CharField(blank=True, max_length=100)
    second_name = models.CharField(blank=True, max_length=100)
    date_of_birth = models.DateField(blank=True, null=True)

    #ApplicationData
    profile_image = models.ImageField(upload_to='user_images', null=True, blank=True)
    rank = models.ForeignKey(Rank, default=None, null=True, blank=True, on_delete=models.CASCADE)
    mmr = models.IntegerField(null=True, blank=True, default=0)
    problems_history = models.ManyToManyField(Problem, default=None, blank=True)
    gentests_history = models.ManyToManyField(GenTest, default=None, blank=True)
    
    def __str__(self):
        return self.email
