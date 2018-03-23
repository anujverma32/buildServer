from django.urls import path

from sbtBuildServer.views import *

urlpatterns = [
    path('echo/', EchoView.as_view(), name='EchoView'),
    path('test/', TestView.as_view(), name='TestView'),
    path('servers/', ServerList.as_view(), name='ServersList'),
    path('servers/<int:pk>', ServerDetail.as_view(), name='ServerDetail'),
]
