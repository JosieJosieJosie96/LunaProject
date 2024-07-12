from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin


@admin.register(User)
class UserAdmin(UserAdmin):
    readonly_fields = ('date_joined',)
    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username')}
         ),
    )
    # fields when reading / updating an instance
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password', 'first_name', 'last_name', 'things_i_love', 'profile_picture', 'description')}),
    )
    # fields which are shown when looking at an list of instances
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    ordering = ('email',)
