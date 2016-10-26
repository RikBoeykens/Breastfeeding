from rest_framework import permissions, viewsets
from rest_framework.response import Response

from children.models import Child
from children.permissions import IsParentOfChild
from children.serializers import ChildSerializer
from children.childfeedserializers import ChildFeedSerializer


class ChildViewSet(viewsets.ModelViewSet):
    queryset = Child.objects.select_related('parent').order_by('-birth_date')
    serializer_class = ChildSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(), IsParentOfChild(),)

    def perform_create(self, serializer):
        instance = serializer.save(parent=self.request.user)

        return super(ChildViewSet, self).perform_create(serializer)

    def list(self, request):
        queryset = self.queryset.filter(parent=self.request.user)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)

class ActiveChildrenViewSet(viewsets.ViewSet):
    queryset = Child.objects.select_related('parent').order_by('-birth_date')
    serializer_class = ChildFeedSerializer

    def list(self, request):
        queryset = self.queryset.filter(parent=self.request.user).filter(is_active=True)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)