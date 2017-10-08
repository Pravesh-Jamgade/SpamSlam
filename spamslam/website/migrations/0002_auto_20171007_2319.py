# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-10-07 23:19
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='market_address',
            field=models.CharField(max_length=42, null=True, validators=[django.core.validators.RegexValidator(code='nomatch', message='Length has to be 42', regex='^.{42}$')]),
        ),
    ]
