document.addEventListener('DOMContentLoaded', function() {
    // Tab Switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            tabContents.forEach((content) => content.classList.remove('active'));

            // Add active class to the clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Password Toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            
            // Toggle eye icon
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loadingOverlay);

    // Show/Hide loading functions
    function showLoading() {
        loadingOverlay.classList.add('active');
    }
    
    function hideLoading() {
        loadingOverlay.classList.remove('active');
    }

    // Form Validation and Submission
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    const validateIdentifier = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
        const phoneRegex = /^[0-9]{10}$/; // Phone number validation regex (10 digits)
        return emailRegex.test(value) || phoneRegex.test(value);
    };

    // Validate Login Form
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            const identifier = document.getElementById('login-identifier').value.trim();

            if (!validateIdentifier(identifier)) {
                e.preventDefault();
                alert('Please enter a valid email or phone number.');
                return;
            }
            // Allow form to submit to Django backend
        });
    }

    // Validate Register Form
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            const identifier = document.getElementById('register-identifier').value.trim();
            const password = document.querySelector('input[name="register-password"]').value;
            const confirmPassword = document.querySelector('input[name="register-confirm"]').value;
            const phone = document.querySelector('input[name="phone"]').value.trim();

            // Validate email format
            if (!validateEmail(identifier)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return;
            }

            if (password !== confirmPassword) {
                e.preventDefault();
                alert('Passwords do not match.');
                return;
            }

            if (password.length < 8) {
                e.preventDefault();
                alert('Password must be at least 8 characters long.');
                return;
            }

            // Validate phone if provided
            if (phone && !/^[0-9]{10}$/.test(phone)) {
                e.preventDefault();
                alert('Please enter a valid 10-digit phone number or leave it empty.');
                return;
            }

            // Allow form to submit to Django backend
        });
    }

    // These duplicate event listeners have been removed to allow Django form submission

    // Social Login Buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.classList.contains('google') ? 'Google' : 'Facebook';
            
            // Show loading animation
            showLoading();
            
            // Simulate API call with timeout
            setTimeout(() => {
                hideLoading();
                showNotification(`${platform} login processing...`, 'info');
                
                // Redirect to home page after successful login
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            }, 1500);
        });
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Phone validation function
    function validatePhone(phone) {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(String(phone));
    }

    // Notification System
    function showNotification(message, type = 'info') {
        // Remove any existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => {
            notification.remove();
        });
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);

        // Add animation class
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.5s ease-out forwards';
        }, 10);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease-in forwards';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes ripple {
            0% {
                width: 0;
                height: 0;
                opacity: 0.5;
            }
            100% {
                width: 500px;
                height: 500px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Check for remembered email
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail && loginForm) {
        const identifierInput = loginForm.querySelector('#login-identifier');
        const rememberCheckbox = loginForm.querySelector('input[type="checkbox"]');
        if (identifierInput) identifierInput.value = rememberedEmail;
        if (rememberCheckbox) rememberCheckbox.checked = true;
    }

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.login-btn, .social-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only add ripple to direct clicks, not form submissions
            if (e.target === this) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.width = '0';
                ripple.style.height = '0';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.4)';
                ripple.style.transform = 'translate(-50%, -50%)';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.style.animation = 'ripple 0.6s linear';
                
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    });

    // Add input validation as you type
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateInput(this);
        });
        
        input.addEventListener('blur', function() {
            validateInput(this, true);
        });
    });
    
    function validateInput(input, showError = false) {
        const type = input.getAttribute('type');
        let isValid = true;
        
        // Reset style
        input.style.borderColor = '#ddd';
        
        if (input.value.trim() === '') {
            if (showError && input.hasAttribute('required')) {
                input.style.borderColor = '#f44336';
                isValid = false;
            }
        } else {
            switch (type) {
                case 'email':
                    if (!validateEmail(input.value)) {
                        input.style.borderColor = '#f44336';
                        isValid = false;
                    } else {
                        input.style.borderColor = '#4CAF50';
                    }
                    break;
                case 'tel':
                    if (!validatePhone(input.value)) {
                        input.style.borderColor = '#f44336';
                        isValid = false;
                    } else {
                        input.style.borderColor = '#4CAF50';
                    }
                    break;
                case 'password':
                    const form = input.closest('form');
                    if (form.id === 'register-form') {
                        if (input.value.length < 8) {
                            input.style.borderColor = '#f44336';
                            isValid = false;
                        } else {
                            input.style.borderColor = '#4CAF50';
                        }
                        
                        // Check if passwords match in registration form
                        const passwords = form.querySelectorAll('input[type="password"]');
                        if (passwords.length > 1 && passwords[0].value !== passwords[1].value) {
                            passwords[1].style.borderColor = '#f44336';
                        }
                    }
                    break;
                default:
                    if (input.value.trim() !== '') {
                        input.style.borderColor = '#4CAF50';
                    }
            }
        }
        
        return isValid;
    }

    // Close Login/Register Container
    const closeBtn = document.getElementById('close-login');
    const loginContainer = document.querySelector('.login-container');

    // Close button functionality for mobile view
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.history.back(); // Redirect to the previous page
        });
    }
});