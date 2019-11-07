from django import forms
from django.core.exceptions import ValidationError
from .models import Resource
from django.contrib.auth.models import User

import re

class ProfileForm(forms.Form):
  first_name = forms.CharField(max_length=20)
  last_name = forms.CharField(max_length=20)
  email = forms.CharField(max_length=50)
  user_name = forms.CharField(max_length=20)
  password = forms.CharField(max_length=20, widget=forms.PasswordInput)
  confirm_password = forms.CharField(max_length=20, widget=forms.PasswordInput)
  profile_pic = forms.ImageField(label="Profile Picture", required=False)

  def clean_user_name(self):
    user_name = self.cleaned_data['user_name']
    existingUser = User.objects.filter(username__exact=user_name).count()
    print(existingUser)
    if existingUser:
      raise ValidationError("User already exists!")
    return user_name

  def clean_email(self):
    email = self.cleaned_data['email']
    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
      raise ValidationError("Invalid email!")
    return email
  
  def clean_password(self):
    password = self.cleaned_data['password']
    confirm_password = self.data['confirm_password']
    if password != confirm_password:
      raise ValidationError("Passwords don't match!")
    elif len(password) < 6:
      raise ValidationError("Password must be at least 6 characters long!")
    return password


class ResourceForm(forms.ModelForm):
  class Meta:
    model = Resource
    fields = '__all__'