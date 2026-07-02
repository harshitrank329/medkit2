from django.contrib.auth import logout as auth_logout
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
import json
import uuid
from django.urls import reverse
from django.db.models import Sum, F
from .models import Address, UserProfile, Product, Cart, CartItem, Testimonial, Contact
from .forms import ContactForm, AddressForm, UserProfileForm, TestimonialForm
def index(request):
    """Main homepage"""
    context = {
        'page_title': 'Medkit - Your Health Partner',
        'featured_products': get_featured_products(),
        'categories': get_categories(),
        'special_offers': get_special_offers(),
        'testimonials': get_testimonials(request), # This will be a JSON response, need to parse it in the template
    }
    return render(request, 'index.html', context)


# Category-specific views
def food_drinks(request):
    """Food and drinks page"""
    context = {
        'page_title': 'Food & Drinks',
        'category': 'Food & Drinks',
        'products': get_products_by_category('food_drinks'),
    }
    return render(request, 'food-drinks.html', context)

def medical_devices(request):
    """Medical devices page"""
    context = {
        'page_title': 'Medical Devices',
        'category': 'Medical Devices',
        'products': get_products_by_category('medical_devices'),
    }
    return render(request, 'medical-devices.html', context)

def home_care_hygiene(request):
    """Home care and hygiene products page"""
    context = {
        'page_title': 'Home Care & Hygiene',
        'category': 'Home Care & Hygiene',
        'products': get_products_by_category('home_care_hygiene'),
    }
    return render(request, 'home-care-hygiene.html', context)

def new_launches(request):
    """New launches page"""
    context = {
        'page_title': 'New Launches',
        'category': 'New Launches',
        'products': get_products_by_category('new_launches'),
    }
    return render(request, 'new-launches.html', context)

def personal_care(request):
    """Personal Care page"""
    context = {
        'page_title': 'Personal Care',
        'category': 'Personal Care',
        'products': get_products_by_category('personal_care'),
    }
    return render(request, 'PersonalCare.html', context)

def protein(request):
    """Protein page"""
    context = {
        'page_title': 'Protein',
        'category': 'Protein',
        'products': get_products_by_category('protein'),
    }
    return render(request, 'Protein.html', context)

def nutrition(request):
    """Nutrition page"""
    context = {
        'page_title': 'Nutrition',
        'category': 'Nutrition',
        'products': get_products_by_category('nutrition'),
    }
    return render(request, 'Nutrition.html', context)

def ayurvedic(request):
    """Ayurvedic page"""
    context = {
        'page_title': 'Ayurvedic',
        'category': 'Ayurvedic',
        'products': get_products_by_category('ayurvedic'),
    }
    return render(request, 'ayurvedic.html', context)

# Authentication views
def user_login(request):
    """User login and registration page"""
    login_error = None
    register_error = None
    register_success = False

    if request.method == 'POST':
        # Handle Login Form
        if 'login-form' in request.POST:
            identifier = request.POST.get('login-identifier')
            password = request.POST.get('login-password')

            # Try to authenticate with username or email
            user = None
            if '@' in identifier:
                # Try to find user by email
                try:
                    user_obj = User.objects.get(email=identifier)
                    user = authenticate(request, username=user_obj.username, password=password)
                except User.DoesNotExist:
                    pass
            else:
                # Try to authenticate with username
                user = authenticate(request, username=identifier, password=password)

            if user is not None:
                login(request, user)
                messages.success(request, 'Login successful!')
                return redirect('index')
            else:
                login_error = 'Invalid email/username or password.'

        # Handle Registration Form
        elif 'register-form' in request.POST:
            # Extract form data
            identifier = request.POST.get('register-identifier')
            password = request.POST.get('register-password')
            confirm_password = request.POST.get('register-confirm')
            phone = request.POST.get('phone', '')

            # Basic validation
            if password != confirm_password:
                register_error = 'Passwords do not match.'
            elif len(password) < 8:
                register_error = 'Password must be at least 8 characters long.'
            else:
                try:
                    # Determine if identifier is email or username
                    if '@' in identifier:
                        email = identifier
                        username = identifier.split('@')[0]  # Use part before @ as username

                        # Make username unique if it already exists
                        original_username = username
                        counter = 1
                        while User.objects.filter(username=username).exists():
                            username = f"{original_username}{counter}"
                            counter += 1

                        # Check if email already exists
                        if User.objects.filter(email=email).exists():
                            register_error = 'A user with this email already exists.'
                        else:
                            # Create user
                            user = User.objects.create_user(
                                username=username,
                                email=email,
                                password=password
                            )

                            # Ensure UserProfile exists and update with phone
                            try:
                                profile, created = UserProfile.objects.get_or_create(user=user)
                                if phone:
                                    profile.phone = phone
                                    profile.save()
                            except Exception as profile_error:
                                print(f"Error creating/updating UserProfile: {profile_error}")

                            register_success = True
                            messages.success(request, 'Account created successfully! You can now login.')
                    else:
                        register_error = 'Please enter a valid email address.'

                except Exception as e:
                    register_error = 'An error occurred while creating your account. Please try again.'

    context = {
        'page_title': 'Login & Register',
        'login_error': login_error,
        'register_error': register_error,
        'register_success': register_success,
    }
    return render(request, 'login.html', context)

@login_required
def user_logout(request):
    """User logout"""
    logout(request)
    messages.success(request, 'You have been logged out successfully.')
    return redirect('index')

# Payment and order views
@login_required
def payment(request):
    """Payment page"""
    # Handle form submission
    if request.method == 'POST':
        # Basic server-side handling (payment gateway integration goes here)
        payment_method = request.POST.get('payment_method')
        # You could validate card/upi fields here. For now assume successful payment.

        # Create a simple order id and redirect to order success page
        order_id = uuid.uuid4().hex[:12].upper()
        # Optionally: clear user's cart, save order to DB, send emails, etc.
        success_url = f"{reverse('order_success')}?order_id={order_id}"
        return redirect(success_url)

    # GET: render payment form
    context = {
        'page_title': 'Payment',
        'cart_items': get_cart_items(request),
        'total_amount': calculate_total(request),
    }
    return render(request, 'Payment.html', context)

@login_required
def order_success(request):
    """Order success page"""
    context = {
        'page_title': 'Order Successful',
        'order_id': request.GET.get('order_id', 'N/A'),
    }
    return render(request, 'order_success.html', context)

# Utility pages
def terms_conditions(request):
    """Terms and conditions page"""
    context = {
        'page_title': 'Terms and Conditions',
    }
    return render(request, 'terms-and-conditions.html', context)

@login_required
def address(request):
    """Address management page"""
    if request.method == 'POST':
        form = AddressForm(request.POST)
        if form.is_valid():
            address_obj = form.save(commit=False)
            if request.user.is_authenticated:
                address_obj.user = request.user
            address_obj.save()
            messages.success(request, 'Address saved successfully!')
            return redirect('payment')  # Redirect to payment page
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = AddressForm()

    # Fetch cart items and total using optimized utility functions
    cart_items = []
    cart_total = 0
    if request.user.is_authenticated:
        cart_items_queryset = get_cart_items(request)
        for item in cart_items_queryset:
            cart_items.append({
                "title": item.product.name,
                "price": float(item.product.price),
                "quantity": item.quantity,
                "image": item.product.image.url if item.product.image else "/static/images/default.jpg"
            })
        cart_total = calculate_total(request)

    context = {
        'page_title': 'Delivery Address',
        'form': form,
        'user_addresses': get_user_addresses(request),
        'products': cart_items,
        'shipping_cost': 50,  # Sample shipping cost
        'total_amount': cart_total + 50,  # Total + shipping
        'cart_items_json': json.dumps(cart_items),
        'cart_total': cart_total,
    }
    return render(request, 'address.html', context)

@login_required
def profile(request):
    """User profile page"""
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)

    if request.method == 'POST':
        form = UserProfileForm(request.POST, instance=user_profile, user=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile updated successfully!')
            return redirect('profile')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = UserProfileForm(instance=user_profile, user=request.user)

    context = {
        'page_title': 'My Profile',
        'form': form,
        'user_addresses': get_user_addresses(request),
    }
    return render(request, 'profile.html', context)

@login_required
def delete_account(request):
    """Delete user account"""
    if request.method == 'POST':
        user = request.user
        user.delete()
        messages.success(request, 'Your account has been successfully deleted.')
        return redirect('index')
    context = {
        'page_title': 'Delete Account'
    }
    return render(request, 'delete_account_confirm.html', context)

def contact(request):
    """Contact page with contact form handling"""
    contact_form = ContactForm()
    success = False
    error = None

    if request.method == 'POST':
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            try:
                # Save the contact form data to database
                contact = contact_form.save()

                # Optional: Send email notification to admin
                try:
                    send_contact_email_notification(contact)
                except Exception as e:
                    print(f"Email notification failed: { e }")

                success = True
                messages.success(request, 'Thank you! Your message has been sent successfully.')
                contact_form = ContactForm()  # Reset form after successful submission

            except Exception as e:
                error = "Sorry, there was an error processing your message. Please try again."
                messages.error(request, error)
        else:
            error = "Please correct the errors below."

    context = {
        'page_title': 'Contact Us - Medkit',
        'contact_form': contact_form,
        'success': success,
        'error': error,
    }
    return render(request, 'contact.html', context)

# API views for AJAX requests
@csrf_exempt
def add_to_cart(request):
    """Add product to cart via AJAX"""
    if request.method == 'POST':
        if not request.user.is_authenticated:
            return JsonResponse({
                'success': False,
                'message': 'Please login to add items to cart'
            })

        try:
            data = json.loads(request.body)
            product_id = data.get('product_id')
            quantity = int(data.get('quantity', 1))

            if quantity < 1:
                return JsonResponse({
                    'success': False,
                    'message': 'Quantity must be at least 1'
                })

            try:
                product = Product.objects.get(id=product_id)
            except Product.DoesNotExist:
                return JsonResponse({
                    'success': False,
                    'message': 'Product not found'
                })

            # Get or create cart for user
            cart, _ = Cart.objects.get_or_create(user=request.user)

            # Check if product already in cart
            cart_item, created = CartItem.objects.get_or_create(
                cart=cart,
                product=product,
                defaults={'quantity': quantity}
            )

            if not created:
                # Update quantity if item already exists
                cart_item.quantity += quantity
                cart_item.save()

            return JsonResponse({
                'success': True,
                'message': f'{product.name} added to cart successfully!',
                'cart_count': cart.item_count
            })

        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'message': 'Invalid data format'
            })
        except Exception as e:
            return JsonResponse({
                'success': False,
                'message': 'An error occurred while adding to cart'
            })

    return JsonResponse({
        'success': False,
        'message': 'Method not allowed'
    })

@csrf_exempt
def update_cart(request):
    """Update cart item quantity via AJAX"""
    if request.method == 'POST':
        if not request.user.is_authenticated:
            return JsonResponse({
                'success': False,
                'message': 'Please login to update cart'
            })

        try:
            data = json.loads(request.body)
            item_id = data.get('item_id')
            quantity = int(data.get('quantity', 1))

            if quantity < 0:
                return JsonResponse({
                    'success': False,
                    'message': 'Quantity cannot be negative'
                })

            try:
                cart_item = CartItem.objects.get(id=item_id, cart__user=request.user)
                if quantity == 0:
                    cart_item.delete()
                    message = f'{cart_item.product.name} removed from cart'
                else:
                    cart_item.quantity = quantity
                    cart_item.save()
                    message = f'{cart_item.product.name} quantity updated'

                cart = Cart.objects.get(user=request.user)
                return JsonResponse({
                    'success': True,
                    'message': message,
                    'cart_count': cart.item_count,
                    'total': float(cart.total),
                    'item_total': float(cart_item.subtotal) if quantity > 0 else 0
                })

            except CartItem.DoesNotExist:
                return JsonResponse({
                    'success': False,
                    'message': 'Cart item not found'
                })

        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'message': 'Invalid data format'
            })
        except Exception as e:
            return JsonResponse({
                'success': False,
                'message': 'An error occurred while updating cart'
            })

    return JsonResponse({
        'success': False,
        'message': 'Method not allowed'
    })

@csrf_exempt
def remove_from_cart(request):
    """Remove item from cart via AJAX"""
    if request.method == 'POST':
        if not request.user.is_authenticated:
            return JsonResponse({
                'success': False,
                'message': 'Please login to remove items from cart'
            })

        try:
            data = json.loads(request.body)
            item_id = data.get('item_id')

            try:
                cart_item = CartItem.objects.get(id=item_id, cart__user=request.user)
                product_name = cart_item.product.name
                cart_item.delete()

                cart = Cart.objects.get(user=request.user)
                return JsonResponse({
                    'success': True,
                    'message': f'{product_name} removed from cart',
                    'cart_count': cart.item_count,
                    'total': float(cart.total)
                })

            except CartItem.DoesNotExist:
                return JsonResponse({
                    'success': False,
                    'message': 'Cart item not found'
                })

        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'message': 'Invalid data format'
            })
        except Exception as e:
            return JsonResponse({
                'success': False,
                'message': 'An error occurred while removing item'
            })

    return JsonResponse({
        'success': False,
        'message': 'Method not allowed'
    })

# Utility functions
def get_featured_products():
    """Get featured products for homepage"""
    try:
        return Product.objects.all()[:8]  # Get first 8 products
    except:
        return []

def get_categories():
    """Get product categories"""
    return [
        {'name': 'Personal Care', 'url': 'personal_care', 'icon': 'fas fa-spa'},
        {'name': 'Protein', 'url': 'protein', 'icon': 'fas fa-dumbbell'},
        {'name': 'Nutrition', 'url': 'nutrition', 'icon': 'fas fa-apple-alt'},
        {'name': 'Ayurvedic', 'url': 'ayurvedic', 'icon': 'fas fa-leaf'},
        {'name': 'Food & Drinks', 'url': 'food_drinks', 'icon': 'fas fa-utensils'},
        {'name': 'Medical Devices', 'url': 'medical_devices', 'icon': 'fas fa-stethoscope'},
        {'name': 'Home Care & Hygiene', 'url': 'home_care_hygiene', 'icon': 'fas fa-home'},
        {'name': 'New Launches', 'url': 'new_launches', 'icon': 'fas fa-rocket'},
    ]

def get_special_offers():
    """Get special offers for homepage"""
    return [
        {'title': 'New User Offer', 'description': 'Get 20% off on first order', 'code': 'MEDI20'},
        {'title': 'Summer Sale', 'description': 'Flat 15% off on all products', 'code': 'SUMMER15'},
    ]

def get_products_by_category(category):
    """Get products by category"""
    try:
        return Product.objects.filter(category=category)[:12]
    except:
        return []

def get_cart_items(request):
    """Get user's cart items"""
    if request.user.is_authenticated:
        try:
            cart = Cart.objects.get(user=request.user)
            return CartItem.objects.filter(cart=cart).select_related('product')
        except Cart.DoesNotExist:
            return []
    return []

def calculate_total(request):
    """Calculate total cart amount"""
    if request.user.is_authenticated:
        try:
            cart = Cart.objects.get(user=request.user)
            # Use aggregate to calculate the total price in a single query
            total = cart.cartitem_set.aggregate(total_price=Sum(F('quantity') * F('product__price')))['total_price']
            return total or 0
        except Cart.DoesNotExist:
            return 0
    return 0

def get_user_addresses(request):
    """Get user's saved addresses"""
    if request.user.is_authenticated:
        return Address.objects.filter(user=request.user).order_by('-created_at')
    return []

def send_contact_email_notification(contact):
    """Send email notification to admin when contact form is submitted"""
    try:
        subject = f"New Contact Form Submission - {contact.subject}"
        message = f"""
        New contact form submission received:

        Name: {contact.name}
        Email: {contact.email}
        Subject: {contact.subject}
        Message: {contact.message}

        Submitted at: {contact.created_at}
        """

        # You can configure these email settings in settings.py
        admin_email = getattr(settings, 'ADMIN_EMAIL', 'admin@medkit.com')
        from_email = getattr(settings, 'DEFAULT_FROM_EMAIL', 'noreply@medkit.com')

        send_mail(
            subject,
            message,
            from_email,
            [admin_email],
            fail_silently=False,
        )
    except Exception as e:
        print(f"Failed to send email notification: {e}")
        raise e

# Testimonial views
@csrf_exempt
def submit_testimonial(request):
    """Handle testimonial submission via AJAX"""
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            form = TestimonialForm(data)

            if form.is_valid():
                testimonial = form.save()
                return JsonResponse({
                    'success': True,
                    'message': 'Thank you for your feedback! Your testimonial has been submitted.',
                    'testimonial': {
                        'name': testimonial.name,
                        'rating': testimonial.rating,
                        'comment': testimonial.comment,
                        'created_at': testimonial.created_at.strftime('%B %d, %Y')
                    }
                })
            else:
                errors = {}
                for field, error_list in form.errors.items():
                    errors[field] = error_list[0]
                return JsonResponse({
                    'success': False,
                    'errors': errors
                })

        except json.JSONDecodeError:
            return JsonResponse({
                'success': False,
                'message': 'Invalid JSON data'
            })
        except Exception as e:
            return JsonResponse({
                'success': False,
                'message': 'An error occurred while processing your request'
            })

    return JsonResponse({
        'success': False,
        'message': 'Method not allowed'
    })

def get_testimonials(request):
    """Get testimonials for display"""
    testimonials = Testimonial.objects.all().order_by('-created_at')[:10]  # Get latest 10 testimonials
    testimonial_data = []

    for testimonial in testimonials:
        testimonial_data.append({
            'name': testimonial.name,
            'rating': testimonial.rating,
            'comment': testimonial.comment,
            'created_at': testimonial.created_at.strftime('%B %d, %Y')
        })

    return testimonial_data