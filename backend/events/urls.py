from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'register_user', views.register_user, name='register_user'),
    url(r'login_user', views.login_user, name='login_user'),
]
