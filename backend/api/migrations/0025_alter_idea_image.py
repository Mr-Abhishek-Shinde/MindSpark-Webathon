# Generated by Django 4.0.2 on 2023-01-10 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0024_alter_idea_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='idea',
            name='image',
            field=models.TextField(default='https://images.ctfassets.net/d0t1b8j9k0xb/q874gZ95BsMs7F10yKYDR/03be7ed0c4fb18c0c3800b41c1c16541/Design_01_Is_the_Big_Tech_Art.jpg?fm=webp'),
        ),
    ]
