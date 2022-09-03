import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Articulos } from '../models/articulos';
import { AlertasService } from './alertas.service';
import { Lineas } from '../models/lineas';
interface PostArticulos {
  articulo:Lineas,
  Unidades:number,
  Cajas:number,
  Total: number,
  precioDescuento:number,
  accion:string
}
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
subTotal: number = 0;
total: number = 0;
articulosPostArray:PostArticulos[]=[];
articulos:Articulos[]=[];
articulosProveedor:Articulos[]=[];
  constructor(
    public http: HttpClient,
    public alertasService: AlertasService
  ) { }

getURL(api){

  let test : string = '';

  if(!environment.TestURL){

    test = environment.TestURL;
  }
const URL =  environment.preURL + test +environment.postURL + api;
return URL;
}

getArticulos(IDProv){

  let URL  = this.getURL(environment.articulosURL);

  URL = URL + environment.idProvedorParam + IDProv;
  console.log('articulos', URL);
 return this.http.get<Articulos[]>(URL);


}

syncGetArticulos(IDProv){
  this.articulos = [];
this.alertasService.presentaLoading('Cargando datos...')
this.getArticulos(IDProv).subscribe(
  resp =>{
this.articulos = resp.slice(0);
this.alertasService.loadingDissmiss();
console.log('this.articulos', this.articulos)
  }, error =>{
    this.alertasService.loadingDissmiss();

  }
)
  
}
syncGetArticulosToPromise(IDProv){

return this.getArticulos(IDProv).toPromise();
  
}













agregarArticulo(linea:Lineas){

  let a = this.articulos.findIndex(articulo => articulo.ARTICULO == linea.ARTICULO);
  this.articulos[a].SELECTED = true;
  
  let articuloPostArray: PostArticulos = {
    articulo : {
      ORDEN_COMPRA: linea.ORDEN_COMPRA,
      ORDEN_COMPRA_LINEA:  linea.ORDEN_COMPRA_LINEA,
      ARTICULO:  linea.ARTICULO,
      BODEGA:  linea.BODEGA,
      DESCRIPCION:  linea.DESCRIPCION,
      CANTIDAD_ORDENADA:  linea.CANTIDAD_ORDENADA,
      CANTIDAD_EMBARCADA:  linea.CANTIDAD_EMBARCADA,
      CANTIDAD_RECIBIDA:  linea.CANTIDAD_RECIBIDA,
      CANTIDAD_RECHAZADA: linea.CANTIDAD_RECHAZADA,
      PRECIO_UNITARIO:  linea.PRECIO_UNITARIO,
      IMPUESTO1:  linea.IMPUESTO2,
      IMPUESTO2:  linea.IMPUESTO2,
      PORC_DESCUENTO:  linea.PORC_DESCUENTO,
      MONTO_DESCUENTO:  linea.MONTO_DESCUENTO,
      FACTOR_CONVERSION:  linea.FACTOR_CONVERSION,
      CENTRO_COSTO:  linea.CENTRO_COSTO,
      CUENTA_CONTABLE:  linea.CUENTA_CONTABLE,
      TIPO_IMPUESTO1:  linea.TIPO_IMPUESTO1,
      TIPO_TARIFA1:  linea.TIPO_TARIFA1,
      LOTE:  linea.LOTE,
  },
    Unidades:linea.CANTIDAD_ORDENADA,
    Cajas:1,
    Total: linea.PRECIO_UNITARIO * linea.CANTIDAD_ORDENADA,
    precioDescuento: linea.MONTO_DESCUENTO,
    accion:'M'

}

this.articulosPostArray.push(articuloPostArray);
this.subTotal += articuloPostArray.Total
this.total += articuloPostArray.Total
console.log(this.articulosPostArray,'this.articulosPostArray')
  }




}
