from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib.auth import login, authenticate
from .models import Sale
from .forms import SaleForm
from django.views.generic import CreateView, ListView
from .forms import AdminLoginForm


def index(request):
    return render(request, 'index.html')

def cart(request):
    return render(request, 'cart.html')

def Checkout(request):
    return render(request, 'Checkout.html')

def user_login(request):
    pass

def base_view(request):
    return render(request, 'base.html')

def register(request):
    return render(request, 'register.html')

def recuperar(request):
    return render(request, 'recuperar.html')

def base(request):
    return render(request, 'base.html')

def admin_login(request):
    if request.method == 'POST':
        form = AdminLoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['usuario']
            password = form.cleaned_data['contraseña']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                if user.is_staff:
                    login(request, user)
                    return redirect('base_view')  # Redirigir a la página principal de administración
                else:
                    return HttpResponse("No tienes permiso de administrador.")
            else:
                return HttpResponse("Credenciales inválidas.")
    else:
        form = AdminLoginForm()
    return render(request, 'admin_login.html', {'form': form})

# CRUD de ventas


def lista_ventas(request):
    sales = Sale.objects.all()
    return render(request, 'lista_ventas.html', {'sales': sales})

def agregar_venta(request):
    if request.method == 'POST':
        form = SaleForm(request.POST)
        if form.is_valid():
            print("Form no valido")
            form.save()
            print("Form guardado")
            return redirect('lista_ventas') 
        else:
            print("Formato no valido")
            print(form.errors)  
            for field, errors in form.errors.items():
                print(f"Error en {field}: {errors}")
    else:
        form = SaleForm()
    return render(request, 'agregar_venta.html', {'form': form})

def actualizar_ventas(request, pk):
    sale = get_object_or_404(Sale, pk=pk)
    if request.method == 'POST':
        form = SaleForm(request.POST, instance=sale)
        if form.is_valid():
            form.save()
            return redirect('lista_ventas')
    else:
        form = SaleForm(instance=sale)
    return render(request, 'modificar_venta.html', {'form': form})

def eliminar_venta(request, pk):
    sale = get_object_or_404(Sale, pk=pk)
    if request.method == 'POST':
        sale.delete()
        return redirect('lista_ventas')
    return render(request, 'eliminar_venta.html', {'sale': sale})

class StrikeListView(ListView):
    model = Sale
    context_object_name = 'strikes'
    template_name = 'lista_ventas.html'


class StrikeCreateView(CreateView):
    model = Sale
    form_class = SaleForm
    success_url = '/strikes/'

    def form_valid(self, form):
        form.save()  
        return redirect(self.success_url)
    

