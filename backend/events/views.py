from django.http import HttpResponse
import json

def login_user(request):
    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))
        user = data.get('email')
        print("user", user)
        return HttpResponse(status='200')
    else:
        return HttpResponse(status='404')


def register_user(request):
    ''' handle registration of users '''
    if request.method == "POST":
        """convert the request to simple dict format"""
        return HttpResponse("Success", status='201')