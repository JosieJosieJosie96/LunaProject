"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

from registration.views import RegistrationView, RegistrationValidationView
from restaurant.views import RestaurantCreateView, RestaurantGetView, RestaurantCategoryView, RestaurantUserView, \
    RestaurantSpecificView

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    path('backend/api/registration/', RegistrationView.as_view(), name='registration'),
    path('backend/api/registration/validation/', RegistrationValidationView.as_view(), name='registration_validation'),
    path('backend/api/restaurants/new/', RestaurantCreateView.as_view(), name='restaurant_create'),
    path('backend/api/restaurants/', RestaurantGetView.as_view(), name='restaurant_get'),
    path('backend/api/restaurants/category/<str:category>/', RestaurantCategoryView.as_view(), name='restaurant_category'),
    path('backend/api/restaurants/user/<int:user_id>/', RestaurantUserView.as_view(), name='restaurant_user'),
    path('backend/api/restaurants/<int:id>/', RestaurantSpecificView.as_view(), name='restaurant_specific'),
    # user views
    path('backend/api/users/', include('user.urls')),


]
