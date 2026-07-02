from django.urls import path
from . import views

urlpatterns = [
    # Main pages
    path('', views.index, name='index'),
    
    # Category pages
    path('personal-care/', views.personal_care, name='personal_care'),
    path('protein/', views.protein, name='protein'),
    path('nutrition/', views.nutrition, name='nutrition'),
    path('ayurvedic/', views.ayurvedic, name='ayurvedic'),
    path('food-drinks/', views.food_drinks, name='food_drinks'),
    path('medical-devices/', views.medical_devices, name='medical_devices'),
    path('home-care-hygiene/', views.home_care_hygiene, name='home_care_hygiene'),
    path('new-launches/', views.new_launches, name='new_launches'),
    
    # Authentication
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    
    # Order and payment
    path('payment/', views.payment, name='payment'),
    path('order-success/', views.order_success, name='order_success'),

    # User profile
    path('profile/', views.profile, name='profile'),

    # Utility pages
    path('terms-conditions/', views.terms_conditions, name='terms_and_conditions'),
    path('address/', views.address, name='address'),
    
    # Cart API endpoints
    path('add-to-cart/', views.add_to_cart, name='add_to_cart'),
    path('update-cart/', views.update_cart, name='update_cart'),
    path('remove-from-cart/', views.remove_from_cart, name='remove_from_cart'),
    path('get-cart-items/', views.get_cart_items, name='get_cart_items'),

    # Contact page
    path('contact/', views.contact, name='contact'),

    # Account deletion
    path('delete-account/', views.delete_account, name='delete_account'),

    # Testimonials
    path('submit-testimonial/', views.submit_testimonial, name='submit_testimonial'),
    path('get-testimonials/', views.get_testimonials, name='get_testimonials'),
]