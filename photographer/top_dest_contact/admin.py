from django.contrib import admin
from .models import contact,destination
# Register your models here.
class contactAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
admin.site.register(contact,contactAdmin)
#@admin.register(destination)

class destinationAdmin(admin.ModelAdmin):
        class Media:
            js = ('tinyInject.js',)
            readonly_fields = ('id',)
admin.site.register(destination, destinationAdmin)
