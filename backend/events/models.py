from django.db import models
from datetime import datetime
# Create your models here.


class UserInfo(models.Model):
    '''class for user login '''
    user_name = models.CharField(max_length=100, null=False, primary_key=True)
    password = models.CharField(max_length=100)

class ReminderDetails(models.Model):
    '''doc string for reminder'''
    id = models.AutoField(primary_key=True)
    reminder_name = models.CharField(max_length=50, null=False)
    description = models.CharField(max_length=800)
    date_time = models.DateTimeField(default=datetime.now, null=False)
    
class CreatedReminders(models.Model):
    '''class to identify reminders created by users'''
    user_name = models.ForeignKey(UserInfo, on_delete=models.CASCADE)
    reminder_id = models.OneToOneField(ReminderDetails, on_delete=models.CASCADE, primary_key=True)


class Notes(models.Model):
    '''doc string for notes'''
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50, null=False)
    description = models.CharField(max_length=800)
    
class CreatedNotes(models.Model):
    '''class to identify notess created by users'''
    user_name = models.ForeignKey(UserInfo, on_delete=models.CASCADE)
    notes_id = models.OneToOneField(Notes, on_delete=models.CASCADE, primary_key=True)