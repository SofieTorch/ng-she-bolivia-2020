import { Component, VERSION } from "@angular/core";
import { Gasto } from "./gasto";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  saldoInicialIngresado = false;

  nombreGasto = "";
  cantidadGasto = 0;
  gastos = [];
  presupuesto = 0;
  saldo = 0;

  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    console.log(this.gastos);
    this.saldo -= gasto.cantidad;
    this.nombreGasto = "";
    this.cantidadGasto = 0;
  }

  ingresarSaldoInicial(): void {
    this.saldo = this.presupuesto;
    this.saldoInicialIngresado = true;
  }
}
