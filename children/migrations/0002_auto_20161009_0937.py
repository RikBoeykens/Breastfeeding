# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('children', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='child',
            old_name='birthDate',
            new_name='birth_date',
        ),
    ]
