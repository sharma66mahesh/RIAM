# Generated by Django 2.2.6 on 2019-10-21 11:30

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('waterMgmt', '0006_auto_20191021_1037'),
    ]

    operations = [
        migrations.AddField(
            model_name='resource',
            name='added_on',
            field=models.DateTimeField(default=datetime.datetime(2019, 10, 21, 11, 30, 45, 418604, tzinfo=utc)),
        ),
    ]
