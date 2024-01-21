import uuid
from django.db import models
from account.models import Empresa


class Categoria(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)

class SubCategoria(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    categoria= models.ForeignKey(Categoria, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)

class Atributo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)

"""
GESTION_INVENTARIO_PRODUCTO = [
    ('DISPONIBLE', 'Disponible'),
    ('ALQUILADO', 'Alquilado'),
    ('EN_MANTENIMIENTO', 'En Mantenimiento'),
]
"""

class Producto(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, blank=True)
    Sub_categoria=models.ForeignKey(SubCategoria, on_delete=models.CASCADE)
    description = models.CharField(max_length=256, null=True)
    precio_unitario = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    unidad_medida =models.CharField(max_length=256, null=True)
    impuesto = models.CharField(max_length=256, null=True)
    codigo_barra= models.CharField(max_length=64, null=True)
    tipo_producto =  models.CharField(max_length=256, null=True)
    gestion_inventario= models.CharField(max_length=256, null=True)
    

class AtributoProducto(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    producto = models.ForeignKey(Producto, on_delete=models.SET_NULL, null=True, blank=True)
    nombre = models.CharField(max_length=256, null=True)

    

class ValorAtributoProducto(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Atributo_producto = models.ForeignKey(AtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    valor = models.CharField(max_length=256, null=True)

class VariacionAtributoProducto(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Atributo_producto = models.ForeignKey(AtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    Valor_atributo_producto = models.ForeignKey(ValorAtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    precio_unitario= models.CharField(max_length=256, null=True)
    codigo_barra = models.CharField(max_length=64, null=True)

class VariacionAtributoProductoSku(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Variacion_atributo_producto = models.ForeignKey(ValorAtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    catalogo_sku=  models.ForeignKey(CatalogoSku, on_delete=models.SET_NULL, null=True, blank=True)
    cantidad_descontada = models.CharField(max_length=256, null=True)

class VariacionAtributoProductoTerminal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Variacion_atributo_producto = models.ForeignKey(ValorAtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    catalogo_sku=  models.ForeignKey(CataogoSku, on_delete=models.SET_NULL, null=True, blank=True)
    cantidad_descontada = models.CharField(max_length=256, null=True)
    