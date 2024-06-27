from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cart/', views.cart, name='cart'),
    path('Checkout/', views.Checkout, name='checkout'),
    path('login/', views.user_login, name='login'),
    path('register/', views.register, name='register'),
    path('recuperar/', views.recuperar, name='recuperar'),
    path('admin_login/', views.admin_login, name='admin_login'),
    path('base/', views.base_view, name='base_view'),
    path('lista_ventas/', views.lista_ventas, name='lista_ventas'),  # Lista de ventas
    path('agregar_venta/', views.agregar_venta, name='agregar_venta'),  # Añadir venta
    path('modificar_venta/<int:pk>/', views.actualizar_ventas, name='modificar_venta'), # Actualizar venta
    path('eliminar_venta/<int:pk>/', views.eliminar_venta, name='eliminar_venta'),  # Eliminar venta
    # Otras URLs necesarias para tu aplicación
]