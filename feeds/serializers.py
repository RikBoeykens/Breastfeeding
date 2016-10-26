from rest_framework import serializers

from feeds.models import Feed

from children.serializers import ChildSerializer

class FeedSerializer(serializers.ModelSerializer):

    child = ChildSerializer(read_only=True, required=False)

    class Meta:
        model = Feed

        fields = ('id', 'start_time', 'end_time', 'right_side', 'created_at', 'updated_at', 'child')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ChildSerializer, self).get_validation_exclusions()

        return exclusions + ['child']