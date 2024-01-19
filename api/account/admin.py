from django.contrib import admin
from .models import Empresa


@admin.register(Empresa)
class EmpresaAdmin(admin.ModelAdmin):
    list_display = ['id', 'ruc', 'rzn_social', 'address', 'celular']
    search_fields = ['ruc', 'rzn_social', 'address', 'celular']
