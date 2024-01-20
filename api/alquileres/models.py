import uuid
from django.db import models
from account.models import Empresa


class Alquiler(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    empresa_id = models.ForeignKey(Empresa, on_delete=models.CASCADE)
