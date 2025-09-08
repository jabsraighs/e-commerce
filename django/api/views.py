from django.shortcuts import render, redirect, get_object_or_404
from .models import User
from .forms import UserForm

def getAllUsers(request):
    users = User.objects.all()
    return render(request, 'user/list.html', {'users': users})

def addUser(request):
    form = UserForm(request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect('getAllUsers')
    return render(request, 'user/add.html', {'form': form})

def editUser(request, id):
    user = get_object_or_404(User , id=id)
    form = UserForm(request.POST or None, instance=user)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect('viewUser', id=user.id)
    return render(request, 'user/edit.html', {'form': form, 'user': user})

def deleteUser(request, id):
    user = get_object_or_404(User , id=id)
    if request.method == 'POST':
        user.delete()
        return redirect('getAllUsers')
    return render(request, 'user/delete.html', {'user': user})

def viewUser(request, id):
    user = get_object_or_404(User , id=id)
    return render(request, 'user/view.html', {'user': user})
