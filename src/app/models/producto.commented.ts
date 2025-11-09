// Archivo: producto.commented.ts
// Interfaz que define la estructura de un Producto dentro de la sección "new-product".

export interface Producto {
    // id: identificador numérico único dentro de la colección local
    id:number;
    // img: ruta a la imagen (opcional)
    img?:string;
    // alt: texto alternativo para la imagen (opcional, mejora accesibilidad)
    alt?:string;
    // nombre: nombre del producto (obligatorio)
    nombre:string;
    // precio: precio numérico (obligatorio)
    precio:number;
    // descripcion: texto descriptivo del producto (obligatorio)
    descripcion:string;
}
