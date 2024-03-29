# Generated by Django 2.2.6 on 2019-10-21 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('waterMgmt', '0005_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='img_or_vid',
            field=models.FileField(blank=True, help_text='Image or Video representing the problem/solution.', null=True, upload_to='', verbose_name='Image or Video'),
        ),
    ]
