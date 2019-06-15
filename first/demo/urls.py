from django.urls import path
from . import views
from .views import Another

urlpatterns = [
    path('first', views.first, name='first'),
    path('another', Another.as_view(), name='another'),
]
