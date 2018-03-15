from pathlib import Path
import subprocess

from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import views, status, viewsets
from rest_framework.response import Response
from sbtBuildServer.models import Servers
from sbtBuildServer.serializers import *
from django.http import Http404

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
        return Response(serializer.data)

class TestView(views.APIView):
    def post(self, request, *args, **kwargs):
        file_path = Path('~/.ssh/id_rsa.pub')
        if file_path.expanduser().is_file():
            public_ssh_file = open(str(file_path.expanduser()), 'r')
            public_key = public_ssh_file.read()
            public_ssh_file.close()
            serializer = TestSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            return Response({'public_key': public_key})

class ServersView(views.APIView):

    def get_object(self, user_id):
        try:
            return Servers.objects.get(user_id=user_id)
        except Servers.DoesNotExist:
            raise Http404

    def get(self, request, user_id, *args, **kwargs):
        print(user_id)
        servers = self.get_object(user_id)
        serializer = ServersSerializer(servers, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = ServersSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)