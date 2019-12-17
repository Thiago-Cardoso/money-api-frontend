import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  launchs = [
    { type: 'DESCPA', description: 'Compra de pão', overDuedate: '30/06/2019', datePayment: null , price: 4.55, people: 'thiago'},
    { type: 'DESCPA2', description: 'Compra de pão2', overDuedate: '20/08/2019', datePayment: null , price: 6.55, people: 'diego'}
  ]
}
