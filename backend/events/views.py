from django.http import HttpResponse
import json
from events.models import UserInfo


def login_user(request):
    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))
        user = data.get('email')
        try:
            user_details = UserInfo.objects.get(user_name=user)
        except UserInfo.DoesNotExist:
            return HttpResponse('User Not Registered', status='403')
        if user_details.password == data.get("password"):
            return HttpResponse(status='200')
        else:
            return HttpResponse('Wrong Password', status='403')
    else:
        return HttpResponse(status='404')


def register_user(request):
    ''' handle registration of users '''
    if request.method == "POST":

        """convert the request to simple dict format"""
        user_dict = json.loads(request.body.decode('utf-8'))
        user = user_dict.get('email')
        try:
            user_details = UserInfo.objects.get(user_name=user)
            return HttpResponse("User already exists", status='400')
        except UserInfo.DoesNotExist:
            pass
        try:
            user = UserInfo()
            user.user_name = user_dict['email']
            user.password = user_dict['password']
            user.save()
            return HttpResponse("Success", status='201' )
        except Exception as e:
            return HttpResponse(e.args[0], status='400')
    else:
        return HttpResponse(status='404')
