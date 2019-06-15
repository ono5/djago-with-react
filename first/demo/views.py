from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .models import Book
from django.shortcuts import render


# class Another(View):
#
#     books = Book.objects.all()
#     # books = Book.objects.filter(is_published=False)
#     output = ''
#
#     for book in books:
#         output += f"<p>We have {book.title} books with ID {book.id}</p>"
#
#     def get(self, request):
#         return HttpResponse(self.output)

def first(request):
    return render(request, 'first_temp.html')
