import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertService } from './alert.service';
import { CompaniesService } from './companies.service';
import { Invoices } from '../models/invoices';
import { CompanyInvoicesView } from '../models/company_invoices_view';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  invoices:CompanyInvoicesView[]=[];
  invoice: Invoices = {
    id: null,
    iD_COMPANY: null,
    iD_CUSTOMER: null,
    iD_USER: null,
    title: null,
    description: 'No Description',
    currency: '¢',
    status: 'P',
    date: new Date(),
    requireD_DATE: new Date(),
    quotatioN_DATE: new Date(),
    approvaL_DATE: new Date(),
    closE_DATE: new Date(),
    totaL_INVOICE_LINES: 0,
    sub_total: 0,
    total: 0,
    discount: 0,
    discounT_AMOUNT: 0,
    shppinG_AMOUNT: 0,
    instructions: 'No Instructions'

  }
  constructor(
   private http: HttpClient,
   private alertService:AlertService,
   public companiesService:CompaniesService 
  ) { }

  getAPI(api){
    let test = '';
    if(environment.prdMode) test = environment.TestURL;
    const   URL =  environment.preURL + test + environment.postURL + api;
    return URL;
  }

  private getInvoices(id:number){
    let URL = this.getAPI(environment.getInvoicesAPI);
        URL = URL + id;
    console.log('URL', URL)
    return this.http.get<CompanyInvoicesView[]>(URL);
  }
  private getInvoiceByID(id:number){
    let URL = this.getAPI(environment.getInvoiceAPI);
        URL = URL + id;
    console.log('URL', URL)
    return this.http.get<Invoices[]>(URL);
  }
  private postInvoice(invoice:Invoices){
    const URL = this.getAPI(environment.postInvoiceAPI);
    const options = {
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control':'*'
      }
    }
    return this.http.post(URL, invoice, options);
  
  }
  
  
  private putInvoice(invoice:Invoices){
    let URL = this.getAPI(environment.putInvoiceAPI);
        URL = URL + invoice.id
    const options = {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    console.log(URL)
    console.log(invoice)
    return this.http.put(URL,invoice,options);
  }
  
  private deleteInvoice(id:number){
    let URL = this.getAPI(environment.deleteInvoiceAPI);
        URL = URL + id;
        const options = {
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
    return this.http.delete(URL,options);
  }
  
  
  syncGetInvoicesToPromise(id:number){
   return  this.getInvoices(id).toPromise();
  }
  syncGetInvoicesByIDToPromise(id:number){
    return  this.getInvoiceByID(id).toPromise();
   }
  syncPostInvoiceToPromise(invoice:Invoices){
    return this.postInvoice(invoice).toPromise();
  }
  syncPutInvoiceToPromise(invoice:Invoices){
    return this.putInvoice(invoice).toPromise();
  }
  
  syncDeleteInvoiceToPromise(id:number){
    return this.deleteInvoice(id).toPromise();
  }
}
