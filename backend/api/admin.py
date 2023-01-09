from django.contrib import admin
from .models import Ideator, Admin, Idea, Innovation_Champion

# Register your models here.
admin.site.register(Idea)
admin.site.register(Ideator)
admin.site.register(Innovation_Champion)
admin.site.register(Admin)