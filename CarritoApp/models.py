from django.db import models

# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(max_length=64)
    categoria = models.CharField(max_length=32)
    precio = models.IntegerField()
    imagen = models.URLField(max_length=200, blank=True, null=True)

    def __str__(self):
        return f'{self.nombre} -> {self.precio}'