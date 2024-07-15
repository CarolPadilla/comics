from django.shortcuts import render, HttpResponse, redirect, get_object_or_404
# Create your views here.
from CarritoApp.Carrito import Carrito
from CarritoApp.models import Producto



def tienda(request):
    #return HttpResponse("Hola mundo :D")
    productos = Producto.objects.all()
    return render(request, "tienda.html", {'productos':productos})

def agregar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.agregar(producto)
    return redirect("Tienda")

def eliminar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.eliminar(producto)
    return redirect("Tienda")

def restar_producto(request, producto_id):
    carrito = Carrito(request)
    producto = Producto.objects.get(id=producto_id)
    carrito.restar(producto)
    return redirect("Tienda")

def limpiar_carrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect("Tienda")

def vendedor(request):
    #return HttpResponse("Hola mundo :D")
    return render(request, "vendedor.html")


def gestionar_productos(request):
    if request.method == 'POST':
        if 'agregar' in request.POST:
            nombre = request.POST['nombre']
            categoria = request.POST['categoria']
            precio = request.POST['precio']
            imagen = request.POST.get('imagen', '')

            producto = Producto(nombre=nombre, categoria=categoria, precio=precio, imagen=imagen)
            producto.save()
            return redirect('gestionar_productos')

        elif 'eliminar' in request.POST:
            producto_id = request.POST['producto_id']
            producto = get_object_or_404(Producto, id=producto_id)
            producto.delete()
            return redirect('gestionar_productos')

        elif 'editar' in request.POST:
            producto_id = request.POST['producto_id']
            producto = get_object_or_404(Producto, id=producto_id)
            producto.nombre = request.POST['nombre']
            producto.categoria = request.POST['categoria']
            producto.precio = request.POST['precio']
            producto.imagen = request.POST.get('imagen', '')
            producto.save()
            return redirect('gestionar_productos')

    productos = Producto.objects.all()
    return render(request, 'vendedor.html', {'productos': productos})