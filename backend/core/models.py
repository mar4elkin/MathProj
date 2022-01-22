from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db.models.fields import CharField

#todo: xp rate and test like ege

class Problem(models.Model):
    problem_description = models.CharField(max_length=1000, default="", blank=False)
    problem_latex = models.CharField(max_length=1000, default="", blank=False)
    answer = models.CharField(max_length=1000, default="", blank=False)
    problem_mmr = models.IntegerField(null=True, blank=True, default=0)
    #datetime.now
    problem_date_generation = models.DateField(blank=False)

class GenTest(models.Model):
    #нужно хранить сколько задач решено
    difficult_list = [
        ('Easy', 'Easy'), 
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
        ('Pro', 'Pro'),
    ]

    title = models.CharField(default="", blank=False, max_length=1000)
    difficult = models.CharField(
        max_length=30,
        choices=difficult_list,
        default='Easy'
    )
    
    hours_expected = models.TimeField(blank=False)
    description = models.CharField(default="", blank=False, max_length=1000)
    problems = models.ManyToManyField(Problem, blank=False, default=None)
    test_date_generation = models.DateField(blank=False)

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

    rank_position = models.IntegerField(
        default=1,
        validators=[MaxValueValidator(8), MinValueValidator(1)],
        unique=True
    )
    rank_mmr_range_start = models.IntegerField(null=False, blank=False, default=0)
    rank_mmr_range_end = models.IntegerField(null=False, blank=False, default=0)
    rank_image = models.ImageField(upload_to='rank_images', null=True, blank=True)

    def __str__(self):
        return str(self.rank_name)

class Achievement(models.Model):
    title = models.CharField(('title'), max_length=50, unique=True)
    description = models.CharField(('description'), max_length=350, unique=True)
    achieve_image = models.ImageField(upload_to='achieve_images', null=True, blank=True)
    
    def __str__(self):
        return str(self.title)