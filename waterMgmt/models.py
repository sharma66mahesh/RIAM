from django.db import models
from .utils.choices import countryList
from django.contrib.auth.models import User
import datetime

from django.utils import timezone

# Create your models here.

COUNTRY_LIST = countryList()

class Resource(models.Model):
  latitude = models.DecimalField(max_digits=8, decimal_places=7, help_text="Latitude in degrees.")
  longitude = models.DecimalField(max_digits=9, decimal_places=7, help_text="Longitude in degrees.")
  problem = models.BooleanField(help_text="True if it is a problem. False if this is a water solution.")
  community = models.CharField(default='test', max_length=40, help_text='name of community associated with problem or solution')
  country = models.CharField(choices=COUNTRY_LIST, max_length=3, default=COUNTRY_LIST[0][0], help_text='Country where problem/solution exists.')
  description = models.TextField(help_text="Short description of the problem/solution.")
  img_or_vid = models.FileField(upload_to='img_vid/', help_text='Image or Video representing the problem/solution.', null=True, blank=True)
  #related_name added to prevent duplicate error on reverse lookup
  added_by = models.ForeignKey(User, related_name='added_by', on_delete=models.SET_NULL, null=True)
  verified_by = models.ForeignKey(User, null=True, related_name='verified_by', blank=True, on_delete=models.SET_NULL)
  added_on = models.DateTimeField(default=timezone.now())

  def __str__(self):
    state = 'Solution'
    if self.problem:
      state = "Problem"
    return f'{state}, {self.get_country_display()}'

class Profile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  first_name = models.CharField(max_length=20)
  last_name = models.CharField(max_length=20)
  email = models.CharField(max_length=50)
  profile_pic = models.ImageField(upload_to="profiles/", help_text="User's Profile Picture", null=True, blank=True)

  def __str__(self):
    return f'{self.first_name} {self.last_name}'