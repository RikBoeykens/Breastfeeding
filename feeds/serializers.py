from rest_framework import serializers

from feeds.models import Feed


class FeedSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feed

        fields = ('id', 'start_time', 'end_time', 'right_side', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ChildSerializer, self).get_validation_exclusions()

        return exclusions + ['child']