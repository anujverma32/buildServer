from django.db import models

class UserMeta(models.Model):
    user_id = models.IntegerField()
    mata_key = models.TextField()
    meta_value = models.TextField()

    def __str__(self):
        return self.email
