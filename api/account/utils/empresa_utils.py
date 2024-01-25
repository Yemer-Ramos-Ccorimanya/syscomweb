from account.models import EmpresaPorDefecto


def get_empresa_por_defecto(user):
    try:
        empresa_por_defecto = EmpresaPorDefecto.objects.get(user=user)
        return empresa_por_defecto.empresa
    except EmpresaPorDefecto.DoesNotExist:
        return None
