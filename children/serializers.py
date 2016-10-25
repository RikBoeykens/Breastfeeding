from rest_framework import serializers

from children.models import Child
from feeds.serializers import FeedSerializer


class ChildSerializer(serializers.ModelSerializer):

    class Meta:
        model = Child

        fields = ('id', 'name', 'is_active', 'birth_date', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ChildSerializer, self).get_validation_exclusions()

        return exclusions + ['parent']

class ChildFeedSerializer(serializers.ModelSerializer):
    feeds = FeedSerializer(many=True, read_only=True)

    class Meta:
        model = Child

        fields = ('id', 'name', 'is_active', 'birth_date', 'created_at', 'updated_at', 'feeds')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ChildSerializer, self).get_validation_exclusions()

        return exclusions + ['parent']