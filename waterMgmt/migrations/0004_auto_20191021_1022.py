# Generated by Django 2.2.6 on 2019-10-21 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('waterMgmt', '0003_auto_20191021_1021'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='img_or_vid',
            field=models.FileField(help_text='Image or Video representing the problem/solution.', upload_to='', verbose_name='Image or Video'),
        ),
    ]