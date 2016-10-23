# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('children', '0002_auto_20161009_0937'),
    ]

    operations = [
        migrations.AddField(
            model_name='child',
            name='is_active',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
    ]
