from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Problem(models.Model):
    pass

class MonthActivity(models.Model):
    pass

class Rank(models.Model):
    rank_list = [
        ('empty', 'empty'),
        ('bronze', 'bronze'),
        ('silver', 'silver'),
        ('gold', 'gold'),
        ('plat', 'plat'),
        ('diamond', 'diamond'),
        ('master', 'master'),
        ('grand_master', 'grand_master')
    ]

    rank_name = models.CharField(
        max_length=30,
        choices=rank_list,
        default='empty'
    )

    rank_image = models.ImageField(upload_to='rank_images', null=True, blank=True)

    def __str__(self):
        return str(self.rank_name)

class Achievements(models.Model):
    title = models.CharField(('title'), max_length=50, unique=True)
    description = models.CharField(('description'), max_length=350, unique=True)
    achieve_image = models.ImageField(upload_to='achieve_images', null=True, blank=True)
    
    def __str__(self):
        return str(self.title)

class CustomUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.ImageField(upload_to='user_images', null=True, blank=True)
    rank = models.ManyToManyField(Rank, blank=True, default=None)
    level_xp = models.IntegerField(null=True, blank=True, default=0)

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            CustomUser.objects.create(user=instance)

    # @receiver(post_save, sender=User)
    # def save_user_profile(sender, instance, **kwargs):
    #     instance.profile.save()
    
    def __str__(self):
        return str(self.user)