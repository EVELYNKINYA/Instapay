from django.contrib import admin
from .models import TransactionSummary, ProfitTrend

class TransactionSummaryAdmin(admin.ModelAdmin):
    list_display = ('user', 'amount', 'transaction_type', 'date', 'description')
    search_fields = ('user__username', 'transaction_type', 'description')
    list_filter = ('transaction_type', 'date')

class ProfitTrendAdmin(admin.ModelAdmin):
    list_display = ('user', 'total_funds', 'last_updated')
    search_fields = ('user__username',)
    list_filter = ('last_updated',)

admin.site.register(TransactionSummary, TransactionSummaryAdmin)
admin.site.register(ProfitTrend, ProfitTrendAdmin)
