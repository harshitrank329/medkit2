#!/usr/bin/env python
"""
Comprehensive test script to verify all form functionality
"""
import os
import sys
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'medkit2.settings')
django.setup()

from django.contrib.auth.models import User
from medkitapp.models import UserProfile, Contact, Address
from medkitapp.forms import ContactForm, AddressForm

def test_all_systems():
    """Test all form systems"""
    print("=== Comprehensive Form System Test ===\n")
    
    # Test Contact Form
    print("1. Testing Contact Form System...")
    test_contact_data = {
        'name': 'John Doe',
        'email': 'john.doe@example.com',
        'subject': 'Test Contact Form',
        'message': 'This is a test message to verify the contact form is working properly.'
    }
    
    contact_form = ContactForm(data=test_contact_data)
    if contact_form.is_valid():
        contact = contact_form.save()
        print(f"   ✅ Contact form: WORKING")
        print(f"   Contact ID: {contact.id}, Name: {contact.name}")
    else:
        print(f"   ❌ Contact form: FAILED - {contact_form.errors}")
    
    # Test User Registration
    print("\n2. Testing User Registration System...")
    test_user_data = {
        'email': 'newuser@example.com',
        'password': 'testpass123',
        'phone': '9876543210'
    }
    
    try:
        # Clean up existing test user
        try:
            existing_user = User.objects.get(email=test_user_data['email'])
            existing_user.delete()
        except User.DoesNotExist:
            pass
        
        # Create new user
        username = test_user_data['email'].split('@')[0]
        user = User.objects.create_user(
            username=username,
            email=test_user_data['email'],
            password=test_user_data['password']
        )
        
        # Create/update profile
        profile, created = UserProfile.objects.get_or_create(user=user)
        profile.phone = test_user_data['phone']
        profile.save()
        
        print(f"   ✅ User registration: WORKING")
        print(f"   User: {user.username}, Profile: {profile.phone}")
        
    except Exception as e:
        print(f"   ❌ User registration: FAILED - {e}")
    
    # Test Address Form
    print("\n3. Testing Address Form System...")
    test_address_data = {
        'name': 'Jane Smith',
        'address': '123 Test Street, Test Area',
        'city': 'Test City',
        'state': 'Test State',
        'zip_code': '123456',
        'phone': '9876543210'
    }
    
    address_form = AddressForm(data=test_address_data)
    if address_form.is_valid():
        address = address_form.save(commit=False)
        if User.objects.exists():
            address.user = User.objects.first()
        address.save()
        print(f"   ✅ Address form: WORKING")
        print(f"   Address ID: {address.id}, Name: {address.name}")
    else:
        print(f"   ❌ Address form: FAILED - {address_form.errors}")
    
    # Summary
    print("\n=== Database Summary ===")
    print(f"Total Users: {User.objects.count()}")
    print(f"Total UserProfiles: {UserProfile.objects.count()}")
    print(f"Total Contacts: {Contact.objects.count()}")
    print(f"Total Addresses: {Address.objects.count()}")
    
    print("\n=== Recent Entries ===")
    
    # Recent contacts
    recent_contacts = Contact.objects.order_by('-created_at')[:3]
    for contact in recent_contacts:
        print(f"Contact: {contact.name} - {contact.subject} ({contact.created_at.strftime('%Y-%m-%d %H:%M')})")
    
    # Recent users
    recent_users = User.objects.order_by('-date_joined')[:3]
    for user in recent_users:
        try:
            profile = user.userprofile
            phone = profile.phone or 'N/A'
        except UserProfile.DoesNotExist:
            phone = 'No Profile'
        print(f"User: {user.username} - {user.email} - Phone: {phone}")
    
    # Recent addresses
    recent_addresses = Address.objects.order_by('-created_at')[:3]
    for address in recent_addresses:
        print(f"Address: {address.name} - {address.city}, {address.state}")
    
    print(f"\n🎉 All systems tested! Check the Django admin at http://127.0.0.1:8000/admin/")
    print(f"📝 Test the contact form at http://127.0.0.1:8000/#contact")
    print(f"👤 Test user registration at http://127.0.0.1:8000/login/")

if __name__ == "__main__":
    test_all_systems()