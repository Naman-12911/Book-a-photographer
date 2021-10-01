from django.contrib import admin
from .models import photographer,like
# Register your models here.

class photographerAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
admin.site.register(photographer,photographerAdmin)

admin.site.register(like)