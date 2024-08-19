from django.urls import path
from . import views

urlpatterns = [
    path('companies', views.get_companies, name='get_companies'),
    path('comapnies-byname',views.get_companies_byname),
    path('comapnies-bycat',views.get_companies_bycat),
    path('allcategories',views.get_allCategories),

    path('all-investor',views.get_allinvestor),
    path('all-cofounder',views.get_all_Cofounders),
    path('companies-stage',views.get_company_stage),
    path('all-competitors',views.get_all_competitor),
]