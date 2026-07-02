from django import template

register = template.Library()

@register.filter
def get_range(value):
    """Return a range object for the given integer value"""
    try:
        return range(int(value))
    except (ValueError, TypeError):
        return range(0)

@register.filter
def get_decimal_part(value):
    """Return the decimal part of a float"""
    try:
        return float(value) % 1
    except (ValueError, TypeError):
        return 0

@register.filter
def get_remaining_stars(value):
    """Return the number of empty stars needed to make 5 total stars"""
    try:
        rating = float(value)
        full_stars = int(rating)
        half_star = 1 if rating % 1 >= 0.5 else 0
        return range(5 - full_stars - half_star)
    except (ValueError, TypeError):
        return range(5)