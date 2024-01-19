import uuid

from django.db import models


class Empresa(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4(), editable=False)
    ruc = models.CharField(max_length=15, null=True)
    rzn_social = models.CharField(max_length=256, null=True)
    address = models.CharField(max_length=256, null=True)
    celular = models.CharField(max_length=15, null=True)
