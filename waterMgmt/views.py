from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile

from django.contrib.auth.models import User
from .models import Resource, Profile
from .forms import ProfileForm, ResourceForm

from django.contrib.auth.decorators import login_required

@login_required
def homepage(request):
  return render(request, 'waterMgmt/index.html');

def register(request):
  if request.method == 'POST':
    form = ProfileForm(request.POST, request.FILES)

    if form.is_valid():
      #create Profile and User model and save them.
      user_name = form.cleaned_data['user_name']
      password = form.cleaned_data['password']
      first_name = form.cleaned_data['first_name']
      last_name = form.cleaned_data['last_name']
      email = form.cleaned_data['email']
      image = form.cleaned_data['profile_pic']
      # image = request.FILES['image']


      user = User.objects.create_user(user_name, None, password)

      profile = Profile.objects.create(user=user, first_name=first_name, last_name=last_name, 
        email=email, profile_pic=image)
      
      user.save()
      profile.save()
  
  elif request.method == 'GET':
    form = ProfileForm()
  
  context = {
    "form": form,
  }

  return render(request, 'waterMgmt/register.html', context)


@login_required
def display_profile(request):
  prof = Profile.objects.filter(user__username__exact=request.user.username)
  print(request.user.username)
  context = {"profile": prof}
  
  return render(request, 'waterMgmt/display_profile.html', context)