# Generated by Django 5.0.6 on 2024-07-11 06:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.IntegerField(blank=True, null=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
        ),
    ]
