from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

TEMPLATE_DIRS = (
    'os.path.join(BASE_DIR, "templates"),'
    )

def index(request):
    return render(request, 'index.html')

def cart(request):
    return render(request, 'cart.html')

def Checkout(request):
    return render(request, 'Checkout.html')

def login(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')


def recuperar(request):
    return render(request, 'recuperar.html')
