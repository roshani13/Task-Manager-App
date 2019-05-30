from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'register_user', views.register_user, name='register_user'),
    url(r'login_user', views.login_user, name='login_user'),
    url(r'add_note', views.add_note, name='add_note'),
    url(r'add_reminder', views.add_reminder, name="add_reminder"),
    url(r'get_dashboard_details', views.get_dashboard_details, name="get_details")
]
