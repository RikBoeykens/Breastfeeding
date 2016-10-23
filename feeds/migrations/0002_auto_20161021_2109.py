# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feeds', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feed',
            name='end_time',
            field=models.DateTimeField(null=True, blank=True),
            preserve_default=True,
        ),
    ]
