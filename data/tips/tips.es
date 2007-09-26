# allegro-sprite-editor tips
# Copyright (C) 2001, 2002, 2003, 2004, 2005, 2007  David A. Capello

 **********************************************************************
\palette aselogo.pcx
\image aselogo.pcx
Allegro Sprite Editor

Bienvenido a ASE

Puede encontrar m�s informaci�n sobre los atajos del teclado en el
archivo "docs/QuickHelp.html".

Reporte bugs y errores a:

ase-help@lists.sourceforge.net
 **********************************************************************
\split
\image nodither.pcx
Este es el viejo m�todo para graficar im�genes RGB.  Sin fusionado.
\next
\image dither.pcx
Ahora, puede configurar para usar este nuevo m�todo de fusionado de
colores.
\done

Vea el men� "Tool/Opciones" o presione <Ctrl+Shift+O>.
 **********************************************************************
Utilice las teclas <1>, <2>, <3>, <4>, <5> y <6> para cambiar el zoom
del editor activo.

\image zoom.pcx
 **********************************************************************
Puede obtener un color desde el sprite usando las teclas <9> y <0>
para cambiar los colores izquierdo o derecho respectivamente.
 **********************************************************************
\image sprprop.pcx

Puede modificar la cantidad de cuadros de animaci�n del sprite usando
el men� "Sprite/Propiedades" o presionando <Ctrl+P>.
 **********************************************************************
Puede agregar cuadros de animaci�n presionando <Ctrl+Shift+N> o
utilizando el men� "Frame/Nuevo".
 **********************************************************************
�Quiere editar los cuadros y las capas?  Use el "Editor de Pel�cula":

\image filmedit.pcx

Vaya al men� "Ver/Editor de Pel�cula" o presione TAB cuando est�
editando un sprite.
 **********************************************************************
Puede usar el papel cebolla (onionskin) para editar animaciones
(presione <C> para ver la ventana de "Tools Setup"):

\image onion.pcx

Recuerde que solo la capa activa es utilizada como papel cebolla,
adem�s, es �til solo cuando la capa usa el color m�scara de fondo.
 **********************************************************************
Cuando aplica alg�n efecto (como la Matriz de Convoluci�n, o la
Curva de Color), puede elegir los canales objetivos:
\split
\image tar_rgb.pcx
* R: Canal Rojo
* G: Canal Verde
* B: Canal Azul
* A: Canal Alpha
\next
\image tar_gray.pcx
* K: Canal Negro
* A: Canal Alpha
\next
\image tar_indx.pcx
* R: Canal Rojo
* G: Canal Verde
* B: Canal Azul
* Index: Utilizar directamente el �ndice
\done

Tambi�n puede especificar a que im�genes le desea aplicar el efecto:

\split
\image tar_1.pcx
Cuadro actual de la capa actual
\next
\image tar_2.pcx
Todos los cuadros de la capa actual
\next
\image tar_3.pcx
Cuadros actuales de todas las capas
\next
\image tar_4.pcx
Todos los cuadros de todas las capas
\done
 **********************************************************************
\image colcurv.pcx

En la ventana de "Curva de Color", puede usar las teclas <Ins>
(insertar) y <Del> (suprimir) para insertar o borrar v�rtices
respectivamentes.  Tambi�n, si presiona en uno de estos puntos con el
bot�n derecho del mouse, la venta "Propiedades del Punto" aparecera
(para cambiar las coordenadas manualmente).
 **********************************************************************
\image minipal.pcx

Seleccionando un color en la barra-de-colores usando la tecla <Ctrl>
le mostrar� esta mini-paleta.
 **********************************************************************
\image lua.pcx

�Desea escribir scripts (guiones) en Lua para generar im�genes o crear
tareas repetitivas?  Puede buscar la documentaci�n en
"docs/scripts/README.txt".  Tambi�n puede ver el directorio
"data/scripts/gens/" para algunos ejemplos.
 **********************************************************************
\palette sprite.pcx
\image sprite.pcx
Y recuerde buscar actualizaciones en:

http://ase.sourceforge.net/

Copyright (C) 2001, 2002, 2003, 2004, 2005, 2007 por David A. Capello
