# Generated by Django 5.0.6 on 2024-07-11 06:35

import restaurant.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('category', models.CharField(choices=[('Asian', 'Asian'), ('Italian', 'Italian'), ('Burger', 'Burger'), ('Arab', 'Arab'), ('Mexican', 'Mexican')], default='none', max_length=20)),
                ('country', models.CharField(max_length=100)),
                ('street', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('zip', models.CharField(max_length=100)),
                ('website', models.CharField(max_length=100, null=True)),
                ('phone', models.CharField(max_length=100, null=True)),
                ('email', models.CharField(max_length=100, null=True)),
                ('opening_hours', models.CharField(max_length=100, null=True)),
                ('price_level', models.CharField(null=True)),
                ('image', models.ImageField(null=True, upload_to=restaurant.models.get_image_upload_path)),
            ],
        ),
    ]
