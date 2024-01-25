from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from clientes.models import Cliente
from account.utils.empresa_utils import get_empresa_por_defecto
from clientes.serializers import ClienteSerializer


class ClienteListCreateView(APIView):
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get(self, request):
        empresa_por_defecto = get_empresa_por_defecto(request.user)

        if empresa_por_defecto:
            clientes = Cliente.objects.filter(empresa=empresa_por_defecto)
            paginator = self.pagination_class()
            result_page = paginator.paginate_queryset(clientes, request, view=self)
            serializer = ClienteSerializer(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        else:
            return Response({'detail': 'No se ha definido una empresa por defecto para este usuario.'},
                            status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        data = request.data
        empresa_por_defecto = get_empresa_por_defecto(request.user)
        data["empresa"] = empresa_por_defecto.id

        serializer = ClienteSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ClienteDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get_cliente(self, pk, user):
        empresa_por_defecto = get_empresa_por_defecto(user)

        if empresa_por_defecto:
            try:
                return Cliente.objects.get(pk=pk, empresa=empresa_por_defecto)
            except Cliente.DoesNotExist:
                return None
        else:
            return None

    def get(self, request, pk):
        cliente = self.get_cliente(pk, request.user)
        if cliente:
            serializer = ClienteSerializer(cliente)
            return Response(serializer.data)
        else:
            return Response(
                {'detail': 'No se ha definido una empresa por defecto para este usuario o el cliente no existe.'},
                status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        cliente = self.get_cliente(pk, request.user)
        if cliente:
            request.data["empresa"] = cliente.empresa_id
            serializer = ClienteSerializer(cliente, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(
                {'detail': 'No se ha definido una empresa por defecto para este usuario o el cliente no existe.'},
                status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, pk):
        cliente = self.get_cliente(pk, request.user)
        if cliente:
            serializer = ClienteSerializer(cliente, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(
                {'detail': 'No se ha definido una empresa por defecto para este usuario o el cliente no existe.'},
                status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        cliente = self.get_cliente(pk, request.user)
        if cliente:
            cliente.delete()
            return Response({'detail': 'Cliente eliminado correctamente.'}, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(
                {'detail': 'No se ha definido una empresa por defecto para este usuario o el cliente no existe.'},
                status=status.HTTP_404_NOT_FOUND)
