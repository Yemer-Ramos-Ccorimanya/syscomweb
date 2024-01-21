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


class Terminal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    sucursal = models.ForeignKey(Sucursal, on_delete=models.SET_NULL, null=True)
    nombre = models.CharField(max_length=256, null=True)


class SerieComprobante(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    serie = models.CharField(max_length=256, null=True)
    tipo_comprobante = models.CharField(max_length=128, null=True)
    correlativo = models.IntegerField(default=0)
    estado = models.BooleanField(default=True)


class SerieTerminal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    terminal = models.ForeignKey(Terminal, on_delete=models.CASCADE)
    serie_comprobante = models.ForeignKey(SerieComprobante, on_delete=models.CASCADE)
