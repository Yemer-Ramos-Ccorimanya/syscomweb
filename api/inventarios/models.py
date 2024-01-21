import uuid
from django.db import models
from account.models import Empresa


class Almacen(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)
    direccion = models.CharField(max_length=256, null=True)
    telefono = models.CharField(max_length=256, null=True)
    descripcion = models.CharField(max_length=256, null=True)


class CatalogoSku(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)
    codigo_sku = models.CharField(max_length=256, null=True)
    unidad_medida = models.CharField(max_length=256, null=True)
    descripcion = models.CharField(max_length=256, null=True)
    estado = models.BooleanField(default=True)


class Categoria(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)


class Atributo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)


ESTADO_CHOICES_PRODUCTO = [
    ('DISPONIBLE', 'Disponible'),
    ('ALQUILADO', 'Alquilado'),
    ('EN_MANTENIMIENTO', 'En Mantenimiento'),
]


class Producto(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)
    description = models.CharField(max_length=256, null=True)
    precio_unitario = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    precio_por_volumen = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    cantidad_min_volumen = models.IntegerField(null=True)
    estado = models.CharField(max_length=256, choices=ESTADO_CHOICES_PRODUCTO)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, blank=True)


class AtributoProducto(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    atributo = models.ForeignKey(Atributo, on_delete=models.SET_NULL, null=True, blank=True)
    producto = models.ForeignKey(Producto, on_delete=models.SET_NULL, null=True, blank=True)
    valor_atributo = models.CharField(max_length=256, null=True)
