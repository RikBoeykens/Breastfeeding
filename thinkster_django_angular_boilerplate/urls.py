from django.conf.urls import patterns, url, include
from rest_framework_nested import routers

from views import IndexView
from authentication.views import AccountViewSet, LoginView, LogoutView
from children.views import ChildViewSet, ChildFeedsViewSet
from feeds.views import FeedViewSet, StartFeedView, EndFeedView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'children', ChildViewSet)
router.register(r'childfeeds', ChildFeedsViewSet)
router.register(r'feeds', FeedViewSet)

urlpatterns = patterns(
     '',
    # ... URLs
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),
    url(r'^api/v1/feed/start/$', StartFeedView.as_view(), name='start'),
    url(r'^api/v1/feed/end/$', EndFeedView.as_view(), name='end'),

    url('^.*$', IndexView.as_view(), name='index'),
)