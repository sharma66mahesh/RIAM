# Generated by Django 2.2.6 on 2019-10-22 11:38

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('waterMgmt', '0011_auto_20191022_1124'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='image',
            new_name='profile_pic',
        ),
        migrations.AlterField(
            model_name='resource',
            name='added_on',
            field=models.DateTimeField(default=datetime.datetime(2019, 10, 22, 11, 38, 7, 213790, tzinfo=utc)),
        ),
    ]
