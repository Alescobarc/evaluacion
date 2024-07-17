
from django import forms
from .models import Sale
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class AdminLoginForm(forms.Form):
    username = forms.CharField(max_length=100)
    password = forms.CharField(widget=forms.PasswordInput)

class SaleForm(forms.ModelForm):
    class Meta:
        model = Sale
        fields = ('product_name', 'price', 'quantity', 'date_sold')
    def __init__(self, *args, **kwargs):
        super(SaleForm, self).__init__(*args, **kwargs)
        # Ajustes adicionales si necesitas modificar algún campo o agregar widgets

class ClientLoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)

class SignUpForm(UserCreationForm):
    nombre = forms.CharField(max_length=30, required=True)
    email = forms.EmailField(max_length=254, help_text='Required. Inform a valid email address.')
    telefono = forms.CharField(max_length=15)

    class Meta:
        model = User
        fields = ('username', 'nombre', 'email', 'telefono', 'password1', 'password2')