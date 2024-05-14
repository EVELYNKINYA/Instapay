from django.db import models
from django.contrib.auth.models import User

class TransactionSummary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_type = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)
    description = models.TextField()

    def __str__(self):
        return f"{self.user.username} - {self.transaction_type} - {self.amount}"

class ProfitTrend(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_funds = models.DecimalField(max_digits=10, decimal_places=2)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.total_funds}"
