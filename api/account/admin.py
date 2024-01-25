from django.contrib import admin
from .models import Empresa, EmpresaPorDefecto, Sucursal


@admin.register(Empresa)
class EmpresaAdmin(admin.ModelAdmin):
    list_display = ['id', 'ruc', 'rzn_social', 'direccion', 'celular']
    search_fields = ['ruc', 'rzn_social', 'address', 'celular']


@admin.register(EmpresaPorDefecto)
class EmpresaPorDefectoAdmin(admin.ModelAdmin):
    list_display = ('user', 'empresa',)
    search_fields = ('user__username', 'empresa__nombre',)


@admin.register(Sucursal)
class SucursalAdmin(admin.ModelAdmin):
    list_display = ('id', 'cod_sunat', 'nombre', 'direccion', 'descripcion')
    search_fields = ('nombre', 'cod_sunat',)
    list_filter = ('empresa',)
