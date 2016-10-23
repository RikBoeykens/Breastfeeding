from rest_framework import permissions

class IsParentOfChild(permissions.BasePermission):
    def has_object_permission(self, request, view, feed):
        if request.user:
            return feed.child.parent == request.user
        return False