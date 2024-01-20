import uuid
from django.db import models
from account.models import Empresa


class Categoria(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa_id = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)


class Atributo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa_id = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)


ESTADO_CHOICES_CATALOGO = [
    ('DISPONIBLE', 'Disponible'),
    ('ALQUILADO', 'Alquilado'),
    ('EN_MANTENIMIENTO', 'En Mantenimiento'),
]


class Catalogo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa_id = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)
    description = models.CharField(max_length=256, null=True)
    precio_unitario = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    precio_por_volumen = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    cantidad_min_volumen = models.IntegerField(null=True)
    estado = models.CharField(max_length=256, choices=ESTADO_CHOICES_CATALOGO)
    categoria_id = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, blank=True)


class AtributoCatalogo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa_id = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    atributo_id = models.ForeignKey(Atributo, on_delete=models.SET_NULL, null=True, blank=True)
    catalogo_id = models.ForeignKey(Catalogo, on_delete=models.SET_NULL, null=True, blank=True)
    valor_atributo = models.CharField(max_length=256, null=True)
