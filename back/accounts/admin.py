from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Level, User, Member, Manager

class LevelAdmin(admin.ModelAdmin):
    list_display = ('name',) 
    search_fields = ('name',)

class MemberInline(admin.StackedInline):
    model = Member
    can_delete = False
    verbose_name_plural = 'Member details'

class ManagerInline(admin.StackedInline):
    model = Manager
    can_delete = False
    verbose_name_plural = 'Manager details'

class CustomUserAdmin(UserAdmin):
    list_display = ('id', 'lastname', 'firstname', 'birth_date', 'gender', 'email', 'contact', 'avatar', 'role', 'level', 'school', 'certification', 'bio', 'created_at', 'updated_at')
    list_filter = ('role', 'gender', 'level', 'school', 'certification')
    search_fields = ('lastname', 'firstname', 'email', 'contact')
    fieldsets = (
        ('Personal information', {'fields': ('lastname', 'firstname', 'birth_date', 'gender', 'contact', 'avatar', 'bio')}),
        (None, {'fields': ('email', 'password')}),
        ('Education', {'fields': ('level', 'school', 'certification')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'role', 'groups', 'user_permissions')}),
    )
    inlines = [MemberInline, ManagerInline]

admin.site.register(User, CustomUserAdmin)
admin.site.register(Level, LevelAdmin)