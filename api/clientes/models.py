import uuid
from django.db import models
from account.models import Empresa


class Cliente(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    dni = models.CharField(max_length=15, null=True)
    nombre_completo = models.CharField(max_length=256, null=True)
    address = models.CharField(max_length=256, null=True)
    celular = models.CharField(max_length=15, null=True)
