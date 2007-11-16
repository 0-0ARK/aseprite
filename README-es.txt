
 ASE - Allegro Sprite Editor
 Copyright (C) 2001-2005, 2007 por David A. Capello
 ------------------------------------------------------------------------
 Mire el fichero "AUTHORS.txt" para la lista completa de colaboradores


===================================
COPYRIGHT
===================================

  Este programa es software libre. Puede redistribuirlo y/o modificarlo bajo
  los t�rminos de la Licencia P�blica General GNU seg�n es publicada por la
  Free Software Foundation, bien de la versi�n 2 de dicha Licencia o bien
  (seg�n su elecci�n) de cualquier versi�n posterior.

  Este programa es distribuido con la esperanza de que sea �til, pero SIN
  GARANTIA ALGUNA, incluso sin la garant�a impl�cita de COMERCIALIZACI�N o
  IDONEIDAD PARA UN PROP�SITO PARTICULAR. V�ase la Licencia P�blica General
  de GNU para m�s detalles.

  Deber�a haber recibido una copia de la Licencia P�blica General junto con
  este programa. Si no ha sido as�, escriba a la Free Software Foundation,
  Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA


===================================
INTRODUCCI�N
===================================

  ASE es un programa especialmente dise�ado para crear sprites
  animados con mucha facilidad y que luego puedan ser utilizados en un
  video juego.  Este programa le permitir� crear desde im�genes
  est�ticas, a personajes con movimiento, texturas, patrones, fondos,
  logos, paletas de colores, y cualquier otra cosa que se le ocurra.


===================================
CARACTER�STICAS
===================================

  ASE le ofrece la posibilidad de:

  - Editar sprites con capas y cuadros de animaci�n.

  - Editar im�genes RGB (con Alpha), escala de grises (tambi�n con
    Alpha), e im�genes con paleta de 256 colores o "indexadas".

  - Controlar paletas de 256 colores completamente.

  - Aplicar filtros para diferentes efectos (matriz de convoluci�n,
    curva de color, etc.).

  - Cargar y guardar sprites en los formatos .BMP, .PCX, .TGA, .JPG,
    .GIF, .FLC, .FLI, .ASE (el formato especial de ASE).

  - Utilizar secuencia de bitmaps (ani00.pcx, ani01.pcx, etc.) para
    guardar las animaciones.

  - Herramientas de dibujo (puntos, pincel, brocha real, relleno, l�nea,
    rect�ngulo, elipse), modos de dibujo (opaco, vidrio), y tipos de
    brochas (c�rculo, cuadrado, l�nea).

  - Soporte de m�scaras (selecciones).

  - Soporte para deshacer/rehacer cada operaci�n.

  - Soporte para editores multiples.

  - Dibujar con una rejilla personalizable.

  - �nico modo de dibujo alicatado para dibujar patrones y texturas en
    segundos.

  - Guardar y cargar sesiones completas de trabajo (en ficheros `.ses').

  - Capacidad de hacer `scripts' (guiones) con el lenguaje Lua
    (http://www.lua.org).


===================================
CONFIGURACI�N
===================================

  En plataformas Windows y DOS:

    ase.cfg			- Configuraci�n
    data/matrices		- Matrices de convoluci�n
    data/menus			- Men�s
    data/scripts/*		- Scripts o "guiones"

  En plataformas Unix, el archivo de configurati�n es ~/.aserc, y los
  archivos de datos (en data/) son buscados en estos lugares (por
  orden de preferencia):

    $HOME/.ase/
    /usr/local/share/ase/
    data/

  Mire "src/core/dirs.c" para m�s informaci�n.


===================================
MODO VERBOSO
===================================

  Cuando ejecuta "ase" con el par�metro "-v", en las plataformas
  Windows y DOS los errores son escritos en STDERR y un archivo
  "logXXXX.txt" en el directorio "ase/" es creado con el mismo
  contenido.

  En otras plataformas (como Unix), ese archivo de registro no es
  creado, ya que la utilizaci�n de STDERR es mucho m�s com�n.

  Mire "src/core/core.c" para m�s informaci�n.


===================================
ACTUALIZACIONES
===================================

  Los �ltimos paquetes tanto binarios como el de c�digo fuente, los
  puede encontrar desde:

    http://sourceforge.net/project/showfiles.php?group_id=20848

  Tambi�n, si desea obtener la �ltima versi�n en desarrollo de ASE desde el
  repositorio CVS, la cual por sierto es la m�s propensa a tener errores pero
  es la que m�s actualizada est� con respecto a las herramientas, la puede
  explorar archivo por archivo en esta direcci�n:

    http://cvs.sourceforge.net/cgi-bin/viewcvs.cgi/ase

  O la puede bajar completamente a su disco con un programa que controle CVS,
  de la siguiente forma:

    1) Debemos ingresar al repositorio de forma an�nima (cuando le pregunte
       por la contrase�a, solamente presione <enter>):

         cvs -d :pserver:anonymous@cvs.ase.sourceforge.net:/cvsroot/ase login

    2) Realizamos el primer checkout, lo que significa que sacaremos una
       copia "fresca" de ASE:

         cvs -z3 -d :pserver:anonymous@cvs.ase.sourceforge.net:/cvsroot/ase checkout gnuase

    3) Una vez esto, cada vez que quiera actualizar la copia local con la
       del repositorio, deber� ejecutar en el directorio gnuase/:

         cvs update -Pd

  AVISO: Cuando obtenga la versi�n CVS, no borre los directorios CVS
  ni el contenido dentro de ellos, ya que es para uso interno del
  programa cvs.


===================================
CR�DITOS
===================================

  Mire el archivo "AUTHORS.txt".


===================================
INFORMACI�N DE CONTACTO
===================================

  Para pedir ayuda, reportar bugs, mandar parches, etc., utilice la
  lista de correo ase-help:

    ase-help@lists.sourceforge.net
    http://lists.sourceforge.net/lists/listinfo/ase-help/

  Para m�s informaci�n visite la p�gina oficial del proyecto:

    http://ase.sourceforge.net


 ----------------------------------------------------------------------------
 Copyright (C) 2001-2005 por David A. Capello
