from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import views, status, viewsets
from rest_framework.response import Response

from sbtBuildServer.serializers import *

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class EchoView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = MessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class TestView(views.APIView):
    def post(self, request, *args, **kwargs):
        serializer = TestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)