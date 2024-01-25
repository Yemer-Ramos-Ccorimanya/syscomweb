import uuid
from django.db import models
from account.models import Empresa

TIPO_DOCUMENTO_CHOICES = [
    ('0', 'SIN DEFINIR'),
    ('1', 'D.N.I'),
    ('6', 'R.U.C'),
    ('7', 'PASAPORTE'),
]


class Cliente(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    tipo_doc = models.CharField(max_length=1, choices=TIPO_DOCUMENTO_CHOICES, null=True)
    dni = models.CharField(max_length=15, null=True)
    nombre_completo = models.CharField(max_length=256, null=True)
    address = models.CharField(max_length=256, null=True, blank=True)
    cod_ubigeo = models.CharField(max_length=256, null=True, blank=True)
    celular = models.CharField(max_length=15, null=True, blank=True)
