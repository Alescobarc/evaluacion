
from django import forms
from .models import Sale


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

