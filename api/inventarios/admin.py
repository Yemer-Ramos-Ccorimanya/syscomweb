from django.contrib import admin
from .models import Categoria, Atributo, Catalogo, AtributoCatalogo


@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre']
    search_fields = ['nombre']


@admin.register(Atributo)
class AtributoAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre']
    search_fields = ['nombre']


@admin.register(Catalogo)
class CatalogoAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'estado']
    search_fields = ['nombre']


@admin.register(AtributoCatalogo)
class AtributoCatalogoAdmin(admin.ModelAdmin):
    list_display = ['id', 'valor_atributo', 'get_nombre_atributo']
    search_fields = ['valor_atributo']

    def get_nombre_atributo(self, obj):
        return obj.atributo_id.nombre if obj.atributo_id else None

    get_nombre_atributo.short_description = 'Nombre del Atributo'
    get_nombre_atributo.admin_order_field = 'atributo_id__nombre'
