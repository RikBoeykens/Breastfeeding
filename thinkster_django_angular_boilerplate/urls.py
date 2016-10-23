from django.conf.urls import patterns, url, include
from rest_framework_nested import routers

from views import IndexView
from authentication.views import AccountViewSet, LoginView, LogoutView
from children.views import ChildViewSet
from feeds.views import FeedViewSet, StartFeedView, EndFeedView, ChildFeedsViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'children', ChildViewSet)
router.register(r'feeds', FeedViewSet)

children_router = routers.NestedSimpleRouter(
    router, r'children', lookup='child'
)
children_router.register(r'feeds', ChildFeedsViewSet)

urlpatterns = patterns(
     '',
    # ... URLs
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/', include(children_router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
    url(r'^api/v1/feed/start/$', StartFeedView.as_view(), name='start'),
    url(r'^api/v1/feed/end/$', EndFeedView.as_view(), name='end'),

    url('^.*$', IndexView.as_view(), name='index'),
)