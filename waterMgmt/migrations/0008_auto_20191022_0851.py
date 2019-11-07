# Generated by Django 2.2.6 on 2019-10-22 08:51

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('waterMgmt', '0007_resource_added_on'),
    ]

    operations = [
        migrations.AddField(
            model_name='resource',
            name='community',
            field=models.CharField(default='test', help_text='name of community associated with problem or solution', max_length=40),
        ),
        migrations.AlterField(
            model_name='resource',
            name='added_on',
            field=models.DateTimeField(default=datetime.datetime(2019, 10, 22, 8, 51, 0, 689197, tzinfo=utc)),
        ),
    ]
