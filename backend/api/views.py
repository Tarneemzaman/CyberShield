from django.http import JsonResponse
from .models import Item


def items_list(request):
    items = Item.objects.order_by('-created_at').values('id', 'name', 'description')
    return JsonResponse(list(items), safe=False)
