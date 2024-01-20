from django.contrib import admin
from .models import Alquiler


@admin.register(Alquiler)
class AlquilerAdmin(admin.ModelAdmin):
    list_display = ('id', 'cliente_id', 'monto_total', 'fecha_alquiler', 'fecha_devolucion')
    search_fields = ('id', 'cliente_id__nombre_completo', 'direccion_evento')
    list_filter = ('empresa_id', 'fecha_alquiler', 'es_una_reservacion')
