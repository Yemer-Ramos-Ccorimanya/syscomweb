from django.contrib import admin
from .models import (
    Almacen, CatalogoSku, CatalogoSkuAlmacen, CatalogoSkuStock,
    Categoria, SubCategoria, Producto, AtributoProducto,
    ValorAtributoProducto, VariacionAtributoProducto,
    VariacionAtributoProductoSku, VariacionAtributoProductoTerminal,
    ProductoTerminal, ProductoSku
)

@admin.register(Almacen)
class AlmacenAdmin(admin.ModelAdmin):
    list_display = ('id', 'empresa', 'nombre', 'direccion', 'telefono', 'descripcion')


@admin.register(CatalogoSku)
class CatalogoSkuAdmin(admin.ModelAdmin):
    list_display = ('id', 'empresa', 'nombre', 'codigo_sku', 'unidad_medida', 'descripcion', 'estado')


@admin.register(CatalogoSkuAlmacen)
class CatalogoSkuAlmacenAdmin(admin.ModelAdmin):
    list_display = ('id', 'empresa', 'catalogo_sku', 'almacen', 'costo_unitario', 'stock_minimo', 'punto_reposicion')


@admin.register(CatalogoSkuStock)
class CatalogoSkuStockAdmin(admin.ModelAdmin):
    list_display = ('id', 'empresa', 'catalogo_sku', 'almacen', 'cantidad_entrada', 'cantidad_salida', 'fecha_registro', 'comentario')


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ('id', 'empresa', 'nombre')


@admin.register(SubCategoria)
class SubCategoriaAdmin(admin.ModelAdmin):
    list_display = ('id', 'categoria', 'nombre')


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ('id', 'empresa', 'nombre', 'categoria', 'sub_categoria', 'descripcion', 'precio_unitario', 'unidad_medida', 'impuesto', 'codigo_barra', 'tipo_producto', 'gestion_inventario')


@admin.register(AtributoProducto)
class AtributoProductoAdmin(admin.ModelAdmin):
    list_display = ('id', 'producto', 'nombre')


@admin.register(ValorAtributoProducto)
class ValorAtributoProductoAdmin(admin.ModelAdmin):
    list_display = ('id', 'atributo_producto', 'valor')


@admin.register(VariacionAtributoProducto)
class VariacionAtributoProductoAdmin(admin.ModelAdmin):
    list_display = ('id', 'producto', 'atributo_producto', 'valor_atributo_producto', 'precio_unitario', 'codigo_barra')


@admin.register(VariacionAtributoProductoSku)
class VariacionAtributoProductoSkuAdmin(admin.ModelAdmin):
    list_display = ('id', 'variacion_atributo_producto', 'catalogo_sku', 'cantidad_descontada')


@admin.register(VariacionAtributoProductoTerminal)
class VariacionAtributoProductoTerminalAdmin(admin.ModelAdmin):
    list_display = ('id', 'variacion_atributo_producto', 'terminal', 'precio_unitario')


@admin.register(ProductoTerminal)
class ProductoTerminalAdmin(admin.ModelAdmin):
    list_display = ('id', 'producto', 'terminal', 'precio_unitario')


@admin.register(ProductoSku)
class ProductoSkuAdmin(admin.ModelAdmin):
    list_display = ('id', 'producto', 'catalogo_sku', 'cantidad_descontada')
