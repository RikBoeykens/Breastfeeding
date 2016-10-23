# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('children', '0003_child_is_active'),
    ]

    operations = [
        migrations.AlterField(
            model_name='child',
            name='is_active',
            field=models.BooleanField(default=True),
            preserve_default=True,
        ),
    ]
