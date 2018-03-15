from django.urls import path

from sbtBuildServer.views import *

urlpatterns = [
    path('echo/', EchoView.as_view(), name='EchoView'),
    path('test/', TestView.as_view(), name='TestView'),
    path('servers/<int:user_id>', ServersView.as_view(), name='ServerView')
]
