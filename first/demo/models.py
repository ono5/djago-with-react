from django.db import models


class Book(models.Model):
    STATUS = (
        (0, 'Hobbit'),
        (1, 'Lord of the ring'),
        (2, 'paid')
    )
    title = models.CharField(max_length=36,
                             null=True,
                             blank=True,
                             unique=True,
                             default='',
                             choices=STATUS)
    description = models.TextField(max_length=256, blank=True)
    price = models.DecimalField(default=0, decimal_places=2, max_digits=2)
    published = models.DateField(blank=True, null=True, default=None)
    is_published = models.BooleanField(default=False)
    cover = models.ImageField(upload_to='covers/', blank=True)

    def __str__(self):
        return self.title
