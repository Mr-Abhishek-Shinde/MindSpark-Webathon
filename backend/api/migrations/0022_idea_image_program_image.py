# Generated by Django 4.1.5 on 2023-01-10 14:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_idea_program'),
    ]

    operations = [
        migrations.AddField(
            model_name='idea',
            name='image',
            field=models.CharField(default='https://i0.wp.com/t-artmagazine.com/wp-content/uploads/2021/04/vector-creator.png?fit=800%2C534&ssl=1', max_length=200),
        ),
        migrations.AddField(
            model_name='program',
            name='image',
            field=models.CharField(default='https://i0.wp.com/t-artmagazine.com/wp-content/uploads/2021/04/vector-creator.png?fit=800%2C534&ssl=1', max_length=200),
        ),
    ]