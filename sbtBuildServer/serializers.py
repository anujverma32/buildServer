from django.contrib.auth.models import User, Group
from sbtBuildServer.models import UserMeta, Servers
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class UserMetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMeta
        fields = ('user_id', 'meta_key', 'meta_value')

class TestSerializer(serializers.Serializer):
    data = serializers.CharField()

class ServersSerializer(serializers.ModelSerializer):
    user_id = serializers.ReadOnlyField(source='user_id.id')

    class Meta:
        model = Servers
        fields = ('id', 'user_id' ,'server_name', 'ssh_username', 'ssh_ip', 'ssh_port', 'ssh_password', 'sbt_app_dir')
