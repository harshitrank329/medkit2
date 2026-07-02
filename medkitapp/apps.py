from django.apps import AppConfig


class MedkitappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'medkitapp'
    
    def ready(self):
        import medkitapp.models  # This ensures signals are loaded
