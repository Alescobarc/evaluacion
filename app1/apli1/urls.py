from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cart/', views.cart,name='cart'),
    path('cart2/', views.cart,name='cart2'),
    path('cart3/', views.cart,name='cart3'),
    path('Checkout/', views.Checkout,name='checkout'),
    path('login/', views.login, name='login'),
    path('register/', views.register,name= 'register'),
    path('recuperar/', views.recuperar, name='recuperar'),
]
