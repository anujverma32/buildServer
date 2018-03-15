from django.db import models

class UserMeta(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user_id = models.IntegerField()
    meta_key = models.TextField()
    meta_value = models.TextField()

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.meta_key

class Servers(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user_id = models.IntegerField()
    server_name = models.TextField()
    ssh_username = models.TextField()
    ssh_ip = models.TextField()
    ssh_port = models.IntegerField()
    ssh_password = models.TextField()
    sbt_app_dir = models.TextField()

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.server_name