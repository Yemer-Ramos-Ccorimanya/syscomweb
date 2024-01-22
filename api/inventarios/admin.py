from django.contrib import admin
from .models import Categoria, Atributo, Producto, AtributoProducto, Almacen, CatalogoSku,CatalogoSkuAlmacen,CatalogoSkuStock,SubCategoria,VariacionAtributoProducto,VariacionAtributoProductoSku,VariacionAtributoProductoTerminal


@admin.register(Almacen)
class AlmacenAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'telefono', ' direccion', 'descripcion'] 
    search_fields = ['nombre']


@admin.register(CatalogoSku)
class AlmacenAdmin(admin.ModelAdmin):
    list_display = ['id', 'codigo_sku', ' unidad_medida', 'descripcion','estado'] 
    search_fields = ['nombre']

@admin.register(CatalogoSkuAlmacen)
class AlmacenAdmin(admin.ModelAdmin):
    list_display = ['id', ' costo_unitario', 'stock_minimo','punto_reposicion'] 
    search_fields = ['almacen']

@admin.register(CatalogoSkuStock)
class AlmacenAdmin(admin.ModelAdmin):
    list_display = ['id', ' catalogo_sku','empresa'] 
    search_fields = ['almacen']

@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre']
    search_fields = ['nombre']

@admin.register(SubCategoria)
class AlmacenAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre'] 
    search_fields = ['nombre']

@admin.register(Atributo)
class AtributoAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre']
    search_fields = ['nombre']


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'precio_unitario','categoria','Sub_categoria','tipo_producto']
    search_fields = ['nombre']

@admin.register(AtributoProducto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre']
    search_fields = ['nombre']

@admin.register(VariacionAtributoProducto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ['id', 'precio_unitario']
    search_fields = ['codigo_barra']

@admin.register(VariacionAtributoProductoSku)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ['id', 'cantidad_descontada']
    search_fields = ['catalogo_sku']

@admin.register(VariacionAtributoProductoTerminal)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ['id', 'precio']
    search_fields = ['terminal']    

""" @admin.register(AtributoProducto)
class AtributoCatalogoAdmin(admin.ModelAdmin):
    list_display = ['id', 'valor_atributo', 'get_nombre_atributo']
    search_fields = ['valor_atributo']

    def get_nombre_atributo(self, obj):
        return obj.atributo_id.nombre if obj.atributo_id else None

    get_nombre_atributo.short_description = 'Nombre del Atributo'
    get_nombre_atributo.admin_order_field = 'atributo_id__nombre' """
