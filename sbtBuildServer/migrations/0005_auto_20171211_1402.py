# Generated by Django 2.0 on 2017-12-11 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sbtBuildServer', '0004_auto_20171211_1400'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usermeta',
            name='mata_key',
            field=models.TextField(),
        ),
    ]