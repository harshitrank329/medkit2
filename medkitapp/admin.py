from django.contrib import admin
from .models import Contact, Address, UserProfile

# Register your models here.

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    """Admin interface for Contact model"""
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at']
    list_per_page = 20
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'subject')
        }),
        ('Message', {
            'fields': ('message',)
        }),
        ('Status', {
            'fields': ('is_read', 'created_at')
        }),
    )
    
    def mark_as_read(self, request, queryset):
        """Mark selected messages as read"""
        queryset.update(is_read=True)
        self.message_user(request, f"{queryset.count()} messages marked as read.")
    
    def mark_as_unread(self, request, queryset):
        """Mark selected messages as unread"""
        queryset.update(is_read=False)
        self.message_user(request, f"{queryset.count()} messages marked as unread.")
    
    actions = ['mark_as_read', 'mark_as_unread']
    mark_as_read.short_description = "Mark selected messages as read"
    mark_as_unread.short_description = "Mark selected messages as unread"

@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    """Admin interface for Address model"""
    list_display = ['name', 'user', 'city', 'state', 'phone', 'is_default', 'created_at']
    list_filter = ['is_default', 'state', 'created_at']
    search_fields = ['name', 'city', 'state', 'phone', 'user__username']
    readonly_fields = ['created_at']
    list_per_page = 20
    
    fieldsets = (
        ('Personal Information', {
            'fields': ('user', 'name', 'phone')
        }),
        ('Address Details', {
            'fields': ('address', 'city', 'state', 'zip_code')
        }),
        ('Settings', {
            'fields': ('is_default', 'created_at')
        }),
    )
    
    def make_default(self, request, queryset):
        """Mark selected addresses as default"""
        for address in queryset:
            # First, unset all other default addresses for this user
            if address.user:
                Address.objects.filter(user=address.user, is_default=True).update(is_default=False)
            address.is_default = True
            address.save()
        self.message_user(request, f"{queryset.count()} addresses marked as default.")
    
    actions = ['make_default']
    make_default.short_description = "Mark selected addresses as default"

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    """Admin interface for UserProfile model"""
    list_display = ['user', 'phone', 'created_at']
    list_filter = ['created_at']
    search_fields = ['user__username', 'user__email', 'phone']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('User Information', {
            'fields': ('user',)
        }),
        ('Profile Details', {
            'fields': ('phone', 'date_of_birth')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )

    
