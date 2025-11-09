// Archivo: tarjeta.commented.ts
// Interfaz que define la estructura de una tarjeta (producto).

export interface Tarjeta {
    // id: identificador único de la tarjeta (string)
    id: string; //numeros como letras
    // img: ruta o URL de la imagen del producto
    img: string;
    // alt: texto alternativo para accesibilidad (describe la imagen)
    alt: string;
    // titulo: nombre del producto
    titulo: string; 
    // descripcion: texto descriptivo del producto
    descripcion: string;
    // precio: número que representa el precio del producto
    precio: number;

}
