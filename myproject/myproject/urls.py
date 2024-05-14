# """
# URL configuration for myproject project.

# The `urlpatterns` list routes URLs to views. For more information please see:
#     https://docs.djangoproject.com/en/5.0/topics/http/urls/
# Examples:
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  path('', views.home, name='home')
# Class-based views
#     1. Add an import:  from other_app.views import Home
#     2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
# Including another URLconf
#     1. Import the include() function: from django.urls import include, path
#     2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
# """
# from django.urls import re_path as url, include
# from django.contrib import admin
# from django_daraja import views
# from myapp.views import UserList
# # from django.urls import path

# urlpatterns = [
#     url(r'^admin/', admin.site.urls),
#     url(r'^daraja/', include('django_daraja.urls')),
#     url(r'^stk-push/success/', views.stk_push_success, name='stk-push-success'),
#     url(r'^api/users/', UserList.as_view(), name='user-list'),
#     url('api/transaction-status/', views.check_transaction_status, name='transaction-status'),

# ]
from django.contrib import admin
from django.urls import path, include
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', views.UserList.as_view(), name='user-list'),
    path('api/transaction-status/', views.transaction_status, name='transaction-status'),
]
