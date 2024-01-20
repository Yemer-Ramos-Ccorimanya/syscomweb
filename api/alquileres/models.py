import uuid
from django.db import models
from account.models import Empresa
from clientes.models import Cliente


class Alquiler(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa_id = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    cliente_id = models.ForeignKey(Cliente, on_delete=models.SET_NULL, null=True, blank=True)
    monto_total = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    descuento = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    fecha_alquiler = models.DateField(null=True)
    fecha_devolucion = models.DateField(null=True)
    monto_garantia = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    monto_adelanto = models.DecimalField(max_digits=15, decimal_places=4, null=True)
    direccion_evento = models.CharField(max_length=256, null=True)
    es_una_reservacion = models.BooleanField(null=True)
    fecha_entrega = models.DateField(null=True)
