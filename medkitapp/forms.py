from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Contact, Address, UserProfile, Testimonial

class ContactForm(forms.ModelForm):
    """Form for contact submissions"""

    class Meta:
        model = Contact
        fields = ['name', 'email', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'placeholder': 'Your Name',
                'class': 'form-control',
                'required': True
            }),
            'email': forms.EmailInput(attrs={
                'placeholder': 'Your Email',
                'class': 'form-control',
                'required': True
            }),
            'subject': forms.TextInput(attrs={
                'placeholder': 'Subject',
                'class': 'form-control'
            }),
            'message': forms.Textarea(attrs={
                'placeholder': 'Your Message',
                'class': 'form-control',
                'rows': 5,
                'required': True
            }),
        }

    def clean_name(self):
        name = self.cleaned_data.get('name')
        if len(name) < 2:
            raise forms.ValidationError("Name must be at least 2 characters long.")
        return name

    def clean_message(self):
        message = self.cleaned_data.get('message')
        if len(message) < 10:
            raise forms.ValidationError("Message must be at least 10 characters long.")
        return message

class AddressForm(forms.ModelForm):
    """Form for delivery address"""

    class Meta:
        model = Address
        fields = ['name', 'address', 'city', 'state', 'zip_code', 'phone']
        widgets = {
            'name': forms.TextInput(attrs={
                'placeholder': 'Full Name',
                'class': 'form-control',
                'required': True
            }),
            'address': forms.Textarea(attrs={
                'placeholder': 'Complete Address',
                'class': 'form-control',
                'rows': 3,
                'required': True
            }),
            'city': forms.TextInput(attrs={
                'placeholder': 'City',
                'class': 'form-control',
                'required': True
            }),
            'state': forms.TextInput(attrs={
                'placeholder': 'State',
                'class': 'form-control',
                'required': True
            }),
            'zip_code': forms.TextInput(attrs={
                'placeholder': 'Pincode',
                'class': 'form-control',
                'required': True,
                'pattern': '[0-9]{6}',
                'title': 'Please enter a valid 6-digit pincode'
            }),
            'phone': forms.TextInput(attrs={
                'placeholder': 'Mobile Number',
                'class': 'form-control',
                'required': True,
                'pattern': '[0-9]{10}',
                'title': 'Please enter a valid 10-digit mobile number'
            }),
        }

    def clean_name(self):
        name = self.cleaned_data.get('name')
        if len(name) < 2:
            raise forms.ValidationError("Name must be at least 2 characters long.")
        return name

    def clean_zip_code(self):
        zip_code = self.cleaned_data.get('zip_code')
        if not zip_code.isdigit() or len(zip_code) != 6:
            raise forms.ValidationError("Please enter a valid 6-digit pincode.")
        return zip_code

    def clean_phone(self):
        phone = self.cleaned_data.get('phone')
        if not phone.isdigit() or len(phone) != 10:
            raise forms.ValidationError("Please enter a valid 10-digit mobile number.")
        return phone

class CustomUserRegistrationForm(UserCreationForm):
    """Custom user registration form"""
    email = forms.EmailField(required=True)
    phone = forms.CharField(max_length=15, required=False)

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Customize form fields
        self.fields['username'].widget.attrs.update({
            'placeholder': 'Username',
            'class': 'form-control'
        })
        self.fields['email'].widget.attrs.update({
            'placeholder': 'Email Address',
            'class': 'form-control'
        })
        self.fields['password1'].widget.attrs.update({
            'placeholder': 'Password',
            'class': 'form-control'
        })
        self.fields['password2'].widget.attrs.update({
            'placeholder': 'Confirm Password',
            'class': 'form-control'
        })
        self.fields['phone'].widget.attrs.update({
            'placeholder': 'Phone (optional)',
            'class': 'form-control'
        })

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("A user with this email already exists.")
        return email

    def clean_phone(self):
        phone = self.cleaned_data.get('phone')
        if phone and (not phone.isdigit() or len(phone) != 10):
            raise forms.ValidationError("Please enter a valid 10-digit phone number.")
        return phone

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
            # Create user profile
            UserProfile.objects.create(
                user=user,
                phone=self.cleaned_data.get('phone', '')
            )
        return user

class UserProfileForm(forms.ModelForm):
    """Form for updating user profile"""
    first_name = forms.CharField(max_length=30, required=False)
    last_name = forms.CharField(max_length=30, required=False)
    email = forms.EmailField(required=True)

    class Meta:
        model = UserProfile
        fields = ['phone', 'date_of_birth']
        widgets = {
            'phone': forms.TextInput(attrs={
                'placeholder': 'Phone Number',
                'class': 'form-control',
                'pattern': '[0-9]{10}',
                'title': 'Please enter a valid 10-digit phone number'
            }),
            'date_of_birth': forms.DateInput(attrs={
                'type': 'date',
                'class': 'form-control'
            }),
        }

    def __init__(self, *args, **kwargs):
        self.user = kwargs.pop('user', None)
        super().__init__(*args, **kwargs)

        if self.user:
            self.fields['first_name'].initial = self.user.first_name
            self.fields['last_name'].initial = self.user.last_name
            self.fields['email'].initial = self.user.email

        # Customize form fields
        self.fields['first_name'].widget.attrs.update({
            'placeholder': 'First Name',
            'class': 'form-control'
        })
        self.fields['last_name'].widget.attrs.update({
            'placeholder': 'Last Name',
            'class': 'form-control'
        })
        self.fields['email'].widget.attrs.update({
            'placeholder': 'Email Address',
            'class': 'form-control'
        })

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exclude(id=self.user.id).exists():
            raise forms.ValidationError("This email is already in use.")
        return email

    def clean_phone(self):
        phone = self.cleaned_data.get('phone')
        if phone and (not phone.isdigit() or len(phone) != 10):
            raise forms.ValidationError("Please enter a valid 10-digit phone number.")
        return phone

    def save(self, commit=True):
        profile = super().save(commit=False)
        if self.user:
            self.user.first_name = self.cleaned_data.get('first_name', '')
            self.user.last_name = self.cleaned_data.get('last_name', '')
            self.user.email = self.cleaned_data.get('email')
            if commit:
                self.user.save()
                profile.save()
        return profile

class TestimonialForm(forms.ModelForm):
    """Form for customer testimonials and ratings"""

    class Meta:
        model = Testimonial
        fields = ['name', 'rating', 'comment']
        widgets = {
            'name': forms.TextInput(attrs={
                'placeholder': 'Your Name',
                'class': 'form-control',
                'required': True
            }),
            'rating': forms.HiddenInput(),  # Hidden field, will be set by JavaScript
            'comment': forms.Textarea(attrs={
                'placeholder': 'Share your experience with Medkit...',
                'class': 'form-control',
                'rows': 4,
                'required': True
            }),
        }

    def clean_name(self):
        name = self.cleaned_data.get('name')
        if len(name) < 2:
            raise forms.ValidationError("Name must be at least 2 characters long.")
        return name

    def clean_comment(self):
        comment = self.cleaned_data.get('comment')
        if len(comment) < 10:
            raise forms.ValidationError("Please provide a more detailed comment (at least 10 characters).")
        return comment

    def clean_rating(self):
        rating = self.cleaned_data.get('rating')
        if not rating or rating < 1 or rating > 5:
            raise forms.ValidationError("Please select a rating between 1 and 5 stars.")
        return rating