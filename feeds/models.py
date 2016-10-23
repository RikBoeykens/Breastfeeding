from django.db import models
from children.models import Child

class Feed(models.Model):
    child = models.ForeignKey(Child)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(null=True, blank=True)
    right_side = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return '{0}'.format(self.start_time)