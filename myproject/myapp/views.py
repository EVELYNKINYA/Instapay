# # -*- coding: utf-8 -*-
# from __future__ import unicode_literals
# from django_daraja.mpesa import utils
# from django.contrib.auth.models import User
# from django.http import HttpResponse, JsonResponse
# from django.views.generic import View
# from django_daraja.mpesa.core import MpesaClient
# from decouple import config
# from datetime import datetime
# from rest_framework import generics
# from .serializers import UserSerializer 

# cl = MpesaClient()
# stk_push_callback_url = 'https://api.darajambili.com/express-payment'
# b2c_callback_url = 'https://api.darajambili.com/b2c/result'

# def index(request):

# 	return HttpResponse('Welcome to the home of daraja APIs')

# def oauth_success(request):
# 	r = cl.access_token()
# 	return JsonResponse(r, safe=False)

# def stk_push_success(request):
# 	phone_number = config('LNM_PHONE_NUMBER')
# 	amount = 1
# 	account_reference = 'ABC001'
# 	transaction_desc = 'STK Push Description'
# 	callback_url = stk_push_callback_url
# 	r = cl.stk_push(phone_number, amount, account_reference, transaction_desc, callback_url)
# 	return JsonResponse(r.response_description, safe=False)
# 	return HttpResponse("STK Push transaction was successful")

# def business_payment_success(request):
# 	phone_number = config('B2C_PHONE_NUMBER')
# 	amount = 1
# 	transaction_desc = 'Business Payment Description'
# 	occassion = 'Test business payment occassion'
# 	callback_url = b2c_callback_url
# 	r = cl.business_payment(phone_number, amount, transaction_desc, callback_url, occassion)
# 	return JsonResponse(r.response_description, safe=False)

# def salary_payment_success(request):
# 	phone_number = config('B2C_PHONE_NUMBER')
# 	amount = 1
# 	transaction_desc = 'Salary Payment Description'
# 	occassion = 'Test salary payment occassion'
# 	callback_url = b2c_callback_url
# 	r = cl.salary_payment(phone_number, amount, transaction_desc, callback_url, occassion)
# 	return JsonResponse(r.response_description, safe=False)

# def promotion_payment_success(request):
# 	phone_number = config('B2C_PHONE_NUMBER')
# 	amount = 1
# 	transaction_desc = 'Promotion Payment Description'
# 	occassion = 'Test promotion payment occassion'
# 	callback_url = b2c_callback_url
# 	r = cl.promotion_payment(phone_number, amount, transaction_desc, callback_url, occassion)
# 	return JsonResponse(r.response_description, safe=False)

# class UserList(generics.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
# -*- coding: utf-8 -*-
# views.py

from __future__ import unicode_literals
from django_daraja.mpesa import utils
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from django_daraja.mpesa.core import MpesaClient
from decouple import config
from datetime import datetime
from rest_framework import generics
from .serializers import UserSerializer
import requests
from requests.auth import HTTPBasicAuth

cl = MpesaClient()
stk_push_callback_url = 'https://api.darajambili.com/express-payment'
b2c_callback_url = 'https://api.darajambili.com/b2c/result'

def get_mpesa_access_token():
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    if config('MPESA_ENVIRONMENT') == 'live':
        url = "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    response = requests.get(url, auth=HTTPBasicAuth(config('MPESA_CONSUMER_KEY'), config('MPESA_CONSUMER_SECRET')))
    access_token = response.json().get('access_token')
    return access_token

def check_transaction_status(transaction_id):
    access_token = get_mpesa_access_token()
    url = "https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query"
    if config('MPESA_ENVIRONMENT') == 'live':
        url = "https://api.safaricom.co.ke/mpesa/transactionstatus/v1/query"

    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json",
    }

    payload = {
        "Initiator": config('MPESA_INITIATOR_NAME'),
        "SecurityCredential": config('MPESA_SECURITY_CREDENTIAL'),
        "CommandID": "TransactionStatusQuery",
        "TransactionID": transaction_id,
        "PartyA": config('MPESA_SHORTCODE'),
        "IdentifierType": "4",
        "ResultURL": "https://yourdomain.com/path-to-result-url",
        "QueueTimeOutURL": "https://yourdomain.com/path-to-timeout-url",
        "Remarks": "Transaction status query",
        "Occasion": "Transaction status",
    }

    response = requests.post(url, json=payload, headers=headers)
    return response.json()

def index(request):
    return HttpResponse('Welcome to the home of daraja APIs')

def oauth_success(request):
    r = cl.access_token()
    return JsonResponse(r, safe=False)

def stk_push_success(request):
    phone_number = config('LNM_PHONE_NUMBER')
    amount = 1
    account_reference = 'ABC001'
    transaction_desc = 'STK Push Description'
    callback_url = stk_push_callback_url
    r = cl.stk_push(phone_number, amount, account_reference, transaction_desc, callback_url)
    return JsonResponse(r.response_description, safe=False)

def business_payment_success(request):
    phone_number = config('B2C_PHONE_NUMBER')
    amount = 1
    transaction_desc = 'Business Payment Description'
    occassion = 'Test business payment occassion'
    callback_url = b2c_callback_url
    r = cl.business_payment(phone_number, amount, transaction_desc, callback_url, occassion)
    return JsonResponse(r.response_description, safe=False)

def salary_payment_success(request):
    phone_number = config('B2C_PHONE_NUMBER')
    amount = 1
    transaction_desc = 'Salary Payment Description'
    occassion = 'Test salary payment occassion'
    callback_url = b2c_callback_url
    r = cl.salary_payment(phone_number, amount, transaction_desc, callback_url, occassion)
    return JsonResponse(r.response_description, safe=False)

def promotion_payment_success(request):
    phone_number = config('B2C_PHONE_NUMBER')
    amount = 1
    transaction_desc = 'Promotion Payment Description'
    occassion = 'Test promotion payment occassion'
    callback_url = b2c_callback_url
    r = cl.promotion_payment(phone_number, amount, transaction_desc, callback_url, occassion)
    return JsonResponse(r.response_description, safe=False)

def transaction_status(request):
    transaction_id = request.GET.get('transaction_id')
    if not transaction_id:
        return JsonResponse({'error': 'Transaction ID is required'}, status=400)

    result = check_transaction_status(transaction_id)
    return JsonResponse(result)

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
