# Generated by Django 4.0.2 on 2023-01-09 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_rename_jury_innovation_champion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='admin',
            name='role',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='innovation_champion',
            name='role',
            field=models.CharField(max_length=30),
        ),
    ]
