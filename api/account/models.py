import uuid

from django.db import models


class Empresa(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    ruc = models.CharField(max_length=15, null=True)
    rzn_social = models.CharField(max_length=256, null=True)
    direccion = models.CharField(max_length=256, null=True)
    celular = models.CharField(max_length=15, null=True)
    sucursal_por_defecto = models.UUIDField(null=True)


class Sucursal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    cod_sunat = models.CharField(max_length=64, null=True)
    nombre = models.CharField(max_length=256, null=True)
    direccion = models.CharField(max_length=256, null=True)
    descripcion = models.CharField(max_length=256, null=True)
    nombre_contacto = models.CharField(max_length=256, null=True)
    telefono_contacto = models.CharField(max_length=256, null=True)
    correo_contacto = models.CharField(max_length=256, null=True)
    almacen = models.UUIDField(null=True)
