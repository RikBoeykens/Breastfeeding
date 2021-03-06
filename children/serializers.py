from rest_framework import serializers

from children.models import Child


class ChildSerializer(serializers.ModelSerializer):

    class Meta:
        model = Child

        fields = ('id', 'name', 'is_active', 'birth_date', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(ChildSerializer, self).get_validation_exclusions()

        return exclusions