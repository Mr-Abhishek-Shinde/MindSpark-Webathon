# Generated by Django 4.0.2 on 2023-01-08 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_ideator_email_ideator_ideas'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ideator',
            name='ideas',
            field=models.JSONField(default=[]),
        ),
    ]
