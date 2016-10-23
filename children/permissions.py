from rest_framework import permissions

class IsParentOfChild(permissions.BasePermission):
    def has_object_permission(self, request, view, child):
        if request.user:
            return child.parent == request.user
        return False