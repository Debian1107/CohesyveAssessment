from django.shortcuts import HttpResponse, redirect
from django.http import JsonResponse
import json
from django.core import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .data import *


def company_to_dict(company):
    return {
        'name': company['name']
        # Add other relevant fields here
    }


# Create your views here.
def get_companies(request):
    if request.method == 'GET':
        companies = getAllCompanies()
        companies_serialized = [company_to_dict(company) for company in companies]
        # print(companies)
        # companies = serializers.serialize('json', companie)
        # companies = [obj.to_dict() for obj in companie] 
        # print(type(companies))
        # print("these are all companies ",companies)
        return JsonResponse(companies_serialized , safe=False)
        # return Response(companies_serialized)
        # return JsonResponse({"asdf":"asdfasdf"})
    
    return HttpResponse(status=405)

@api_view(['POST'])
def get_companies_byname(request):
    print(request.data)
    query=request.data['query']
    print(query)
    data=getCompany_byname(query)
    
    return Response({"Error":False,"data":data})


@api_view(['POST'])
def get_companies_bycat(request):
    print(request.data)
    query=request.data['query']
    print(query)
    data=getCompany_bycat(query)
    # data="random data "
    
    return Response({"Error":False,"data":data})


@api_view(['GET'])
def get_allCategories(request):
    data=getAllcategories()
    # data="random data "
    
    return Response({"Error":False,"data":data})

@api_view(['POST'])
def get_allinvestor(request):
    print(request.data)
    query=request.data['query']
    print(query)
    data=getAll_investor(query)
    # data="random data "
    
    return Response({"Error":False,"data":data})


@api_view(['POST'])
def get_company_stage(request):
    print(request.data)
    query=request.data['query']
    print(query)
    data=getCompanystage(query)
    # data="random data "
    
    return Response({"Error":False,"data":data})

@api_view(['POST'])
def get_all_Cofounders(request):
    print(request.data)
    query=request.data['query']
    print(query)
    data=getAll_founders(query)
    # data="random data "
    
    return Response({"Error":False,"data":data})

@api_view(['POST'])
def get_all_competitor(request):
    print(request.data)
    query=request.data['query']
    print(query)
    data=getAll_competitors(query)
    # data="random data "
    
    return Response({"Error":False,"data":data})

