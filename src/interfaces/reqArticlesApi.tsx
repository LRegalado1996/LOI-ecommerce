export interface ReqArticlesApi {
  data: CategoriasDestacada[];
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request: any;
}

export interface CategoriasDestacada {
  nombre: string;
  nombre_largo: string;
  urlseo: string;
  descripcion: string;
  image: string;
  image_alt: string;
  iconoUrl: string;
  iconoAlt: string;
  articuloDestacadoImagenUrl: string;
  articuloDestacadoImagenAlt: string;
  productos: Producto[];
}
export interface Producto {
  stock: number;
  id: number;
  titulo: string;
  subtitulo: string;
  urlseo: string;
  precio: string[];
  moneda: string;
  precio_mercado: string;
  foto_alt: string;
  foto: string;
  envio_gratis: boolean;
  existeEnCarrito: number;
  porcentaje_descuento: number;
  tipo_envio: number | string | string;
  galeria_videos: any[];
  opcionesDeCanjeOca?: any;
  visibilidad: string;
  estado: string;
  agregadoPor?: any;
  fabricante: Fabricante;
  variaciones: Variacione[][];
  cantidadCuotas: number;
  valorCuotas: number;
  datos_oferta: (Datosoferta | any[])[];
  promocionesActivas: PromocionesActiva[];
  calificaciones: Calificaciones;
  vitrinaRetailRocket: boolean;
  producto_no_disponible: boolean;

  prod_sku: string;
  prod_titulo: string;
  prod_subtitulo: string;
  prod_urlseo: string;
  prod_precio: string;
  prod_precio_mercado: string;
  prod_foto_ppal_titulo: string;
  prod_foto_ppal: string;
  prod_precio_sin_formato: number;
  prod_moneda: string;
  productoExisteEnCarrito: number;
}
interface Calificaciones {
  cantidad_calificaciones: number;
  promedio_calificaciones: number;
  cantidad?: string;
  promedio?: string;
}
interface PromocionesActiva {
  ente: string;
  precio_final: string;
  porcentaje_de_descuento: number;
  tope_promocion: number;
  cantidad_de_cuotas: number;
}

interface Datosoferta {
  porcentaje_descuento: number;
  precio_final: number;
  precio_final_formateado: string;
  precio_final_sin_iva: number;
  inicio: string;
  final: string;
  oferta_id: string;
  disponibles: number;
  ahorro: string;
  oferta: Oferta;
  producto: Producto;
}
interface Oferta {
  oferta_id: string;
  inicio: string;
  inicio_formateado: string;
  final: string;
  final_formateado: string;
  porcentaje: number;
  precio_fijo: string;
  cantidad: number;
  orden: number;
}
interface Variacione {
  urlseo: string;
  atributo_valor: string;
  etiqueta_html_front: string;
  atributo_nombre: string;
  variante_nombre: string;
}
interface Fabricante {
  id: string;
  nombre: string;
  nombre_marca: string;
  imagen: string;
  url: string;
  recomendadoDermatologos: boolean;
}
