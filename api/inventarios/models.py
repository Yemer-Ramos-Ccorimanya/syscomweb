import uuid
from django.db import models
from account.models import Empresa, Terminal


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
    codigo_sku = models.CharField(max_length=256, null=True, unique=True)
    unidad_medida = models.CharField(max_length=256, null=True)
    descripcion = models.CharField(max_length=256, null=True)
    estado = models.BooleanField(default=True)


class CatalogoSkuAlmacen(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    catalogo_sku = models.ForeignKey(CatalogoSku, on_delete=models.SET_NULL, null=True)
    almacen = models.ForeignKey(Almacen, on_delete=models.SET_NULL, null=True)
    costo_unitario = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    stock_minimo = models.IntegerField(default=0)
    punto_reposicion = models.IntegerField(default=0)


class CatalogoSkuStock(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    catalogo_sku = models.ForeignKey(CatalogoSku, on_delete=models.SET_NULL, null=True)
    almacen = models.ForeignKey(Almacen, on_delete=models.SET_NULL, null=True)
    cantidad_entrada = models.IntegerField(default=0, null=True)
    cantidad_salida = models.IntegerField(default=0, null=True)
    fecha_registro = models.DateField(auto_now=True, null=True)
    comentario = models.CharField(max_length=256, null=True)


class Categoria(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)


class SubCategoria(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True)
    nombre = models.CharField(max_length=256, null=True)


class Producto(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=256, null=True)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True, blank=True)
    sub_categoria = models.ForeignKey(SubCategoria, on_delete=models.CASCADE)
    descripcion = models.CharField(max_length=256, null=True)
    precio_unitario = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    unidad_medida = models.CharField(max_length=256, null=True)
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
    atributo_producto = models.ForeignKey(AtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    valor = models.CharField(max_length=256, null=True)


class VariacionAtributoProducto(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    producto = models.ForeignKey(Producto, on_delete=models.SET_NULL, null=True, blank=True)
    atributo_producto = models.ForeignKey(AtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    valor_atributo_producto = models.ForeignKey(ValorAtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    precio_unitario = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    codigo_barra = models.CharField(max_length=64, null=True)


class VariacionAtributoProductoSku(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    variacion_atributo_producto = models.ForeignKey(VariacionAtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    catalogo_sku = models.ForeignKey(CatalogoSku, on_delete=models.SET_NULL, null=True, blank=True)
    cantidad_descontada = models.CharField(max_length=256, null=True)


class VariacionAtributoProductoTerminal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    variacion_atributo_producto = models.ForeignKey(VariacionAtributoProducto, on_delete=models.SET_NULL, null=True, blank=True)
    terminal = models.ForeignKey(Terminal, on_delete=models.SET_NULL, null=True, blank=True)
    precio_unitario = models.DecimalField(max_digits=15, decimal_places=4, null=True)


class ProductoTerminal(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    producto = models.ForeignKey(Producto, on_delete=models.SET_NULL, null=True, blank=True)
    terminal = models.ForeignKey(Terminal, on_delete=models.SET_NULL, null=True, blank=True)
    precio_unitario = models.DecimalField(max_digits=15, decimal_places=4, null=True)


class ProductoSku(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    producto = models.ForeignKey(Producto, on_delete=models.SET_NULL, null=True, blank=True)
    catalogo_sku = models.ForeignKey(CatalogoSku, on_delete=models.SET_NULL, null=True, blank=True)
    cantidad_descontada = models.IntegerField(default=0)
