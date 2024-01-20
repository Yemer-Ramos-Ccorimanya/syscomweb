from django.contrib import admin
from .models import Cliente


@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('nombre_completo', 'dni', 'address', 'celular')
    search_fields = ('nombre_completo', 'dni', 'address', 'celular')
    list_filter = ('empresa_id',)
