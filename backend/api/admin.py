from django.contrib import admin
from .models import Ideator, Admin, Idea, Innovation_Champion, Program

# Register your models here.
admin.site.register(Idea)
admin.site.register(Program)
admin.site.register(Ideator)
admin.site.register(Innovation_Champion)
admin.site.register(Admin)