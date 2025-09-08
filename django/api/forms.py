from django import forms
from .models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password_hash','first_name','last_name','phone_number']
        widgets = {
            'password_hash': forms.PasswordInput(),
        }