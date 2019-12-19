import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchs-search',
  templateUrl: './launchs-search.component.html',
  styleUrls: ['./launchs-search.component.css']
})
export class LaunchsSearchComponent{

  launchs = [
    { type: 'DESCPA', description: 'Compra de pão', overDuedate: '30/06/2019', datePayment: null , price: 4.55, people: 'thiago'},
    { type: 'DESCPA2', description: 'Compra de pão2', overDuedate: '20/08/2019', datePayment: null , price: 6.55, people: 'diego'}
  ]

}
