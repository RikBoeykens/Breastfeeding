import json
from datetime import datetime
from rest_framework import permissions, viewsets, status, views
from rest_framework.response import Response

from django.utils import timezone

from children.models import Child

from feeds.models import Feed
from feeds.permissions import IsParentOfChild
from feeds.serializers import FeedSerializer

class FeedViewSet(viewsets.ModelViewSet):
    queryset = Feed.objects.select_related('child__parent').order_by('-start_time')
    serializer_class = FeedSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsParentOfChild(),)

    def list(self, request):
        queryset = self.queryset.filter(child__parent=self.request.user)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)

    def create(self, request):
        data = json.loads(request.body)

        child_id = data.get('child_id', None)
        start_time_string = data.get('start_time', None)
        start_time = datetime.strptime(start_time_string, "%Y-%m-%dT%H:%M:%S.%fZ")
        end_time_string = data.get('end_time', None)
        end_time = datetime.strptime(end_time_string, "%Y-%m-%dT%H:%M:%S.%fZ")
        right_side = data.get('right_side', None)

        child = Child.objects.get(id=child_id)

        newFeed = Feed.objects.create(child=child, start_time=start_time, end_time=end_time, right_side=right_side)
        
        serialized = FeedSerializer(newFeed)

        return Response(serialized.data)

class StartFeedView(views.APIView):
    def post(self, request, format=None):
        data = json.loads(request.body)

        child_id = data.get('child_id', None)
        right_side = data.get('right_side', None)

        child = Child.objects.get(id=child_id)

        newFeed = Feed.objects.create(child=child, right_side=right_side, start_time=timezone.now())
        
        serialized = FeedSerializer(newFeed)

        return Response(serialized.data)

class EndFeedView(views.APIView):
    def post(self, request, format=None):
        data = json.loads(request.body)

        feed_id = data.get('feed_id', None)

        feed = Feed.objects.get(id=feed_id)

        feed.end_time = timezone.now()

        feed.save()
        
        serialized = FeedSerializer(feed)

        return Response(serialized.data)