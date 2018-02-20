from pathlib import Path
import subprocess

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
