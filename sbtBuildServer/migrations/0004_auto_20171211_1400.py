# Generated by Django 2.0 on 2017-12-11 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sbtBuildServer', '0003_auto_20171211_1352'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserMeta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mata_key', models.CharField(max_length=100)),
                ('meta_value', models.TextField()),
                ('update_date', models.DateTimeField(verbose_name='date modified')),
                ('creation_date', models.DateTimeField(verbose_name='date published')),
            ],
        ),
        migrations.DeleteModel(
            name='Users',
        ),
    ]
