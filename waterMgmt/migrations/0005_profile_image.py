# Generated by Django 2.2.6 on 2019-10-21 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('waterMgmt', '0004_auto_20191021_1022'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='image',
            field=models.ImageField(blank=True, help_text="User's Profile Picture", null=True, upload_to=''),
        ),
    ]