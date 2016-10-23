from django.db import models
from authentication.models import Account

class Child(models.Model):
    parent = models.ForeignKey(Account)
    name = models.TextField()
    is_active = models.BooleanField(default=True)
    birth_date = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '{0}'.format(self.name)