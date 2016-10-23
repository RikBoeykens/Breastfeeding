from rest_framework import serializers

from children.serializers import ChildSerializer
from feeds.models import Feed


class FeedSerializer(serializers.ModelSerializer):
    child = ChildSerializer(read_only=True, required=False)

    class Meta:
        model = Feed

        fields = ('id', 'child', 'start_time', 'end_time', 'right_side', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ChildSerializer, self).get_validation_exclusions()

        return exclusions + ['child']