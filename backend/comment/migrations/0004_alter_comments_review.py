# Generated by Django 5.0.6 on 2024-07-11 13:51

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0003_initial'),
        ('review', '0004_review_liked_by'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='review',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='review.review'),
        ),
    ]