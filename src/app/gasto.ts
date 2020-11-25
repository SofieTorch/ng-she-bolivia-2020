export class Gasto {
  nombre: string;
  cantidad: number;

  constructor(nombreGasto: string, cantidadGasto: number) {
    this.nombre = nombreGasto;
    this.cantidad = cantidadGasto;
  }
}
