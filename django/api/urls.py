from django.contrib import admin
from django.urls import path , include
from . import views

urlpatterns = [
    path('users/', views.getAllUsers, name='getAllUsers'),
    path('users/add/', views.addUser, name='addUser'),
    path('users/edit/<int:id>/', views.editUser, name='editUser'),
    path('users/delete/<int:id>/', views.deleteUser, name='deleteUser'),
    path('users/view/<int:id>/', views.viewUser, name='viewUser'),
]
