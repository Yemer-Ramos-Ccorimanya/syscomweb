from django.contrib import admin
from .models import Empresa, Sucursal


@admin.register(Empresa)
class EmpresaAdmin(admin.ModelAdmin):
    list_display = ['id', 'ruc', 'rzn_social', 'direccion', 'celular']
    search_fields = ['ruc', 'rzn_social', 'address', 'celular']


@admin.register(Sucursal)
class SucursalAdmin(admin.ModelAdmin):
    list_display = ('id', 'cod_sunat', 'nombre', 'direccion', 'descripcion')
    search_fields = ('nombre', 'cod_sunat',)
    list_filter = ('empresa',)
