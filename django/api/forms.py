from django import forms
from .models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password_hash','first_name','last_name','phone_number']
        widgets = {
            'username' : forms.TextInput(attrs={
                'class': 'input w-full' ,
                'placeholder': 'nom d\'utilisateur'
            }),
            'email': forms.TextInput(attrs={
                'class': 'input w-full' ,
                'placeholder': 'nom d\'utilisateur'
            }),
            'first_name' : forms.TextInput(attrs={ 'class':
                'input w-full' ,
                'placeholder': 'nom d\'utilisateur'
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'input w-full' ,
                'placeholder': 'nom d\'utilisateur'
            }),
            'phone_number' :  forms.TextInput(attrs={
                'class': 'input w-full' ,
                'placeholder': 'nom d\'utilisateur'
            }),
            'password_hash': forms.PasswordInput(attrs={
                'class': 'input w-full' ,
                'placeholder': 'nom d\'utilisateur'
            }),
        }