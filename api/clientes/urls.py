from django.urls import path
from .views.cliente import ClienteListCreateView, ClienteDetailView

urlpatterns = [
    path('', ClienteListCreateView.as_view()),
    path('<uuid:pk>/', ClienteDetailView.as_view()),
]
