from django.contrib import admin
from .models import Ideator, Admin, Idea, Jury

# Register your models here.
admin.site.register(Idea)
admin.site.register(Ideator)
admin.site.register(Jury)
admin.site.register(Admin)