# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feeds', '0002_auto_20161021_2109'),
    ]

    operations = [
        migrations.AddField(
            model_name='feed',
            name='right_side',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
    ]
