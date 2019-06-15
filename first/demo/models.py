from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=36)
    description = models.TextField(max_length=256, blank=True)
    price = models.IntegerField(default=0)
    published = models.DateField(blank=True, null=True, default=None)
    is_published = models.BooleanField(default=False)
    cover = models.ImageField(upload_to='covers/', blank=True)

    def __str__(self):
        return self.title
