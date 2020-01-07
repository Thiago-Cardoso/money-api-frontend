import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchs-register',
  templateUrl: './launchs-register.component.html',
  styleUrls: ['./launchs-register.component.css']
})
export class LaunchsRegisterComponent implements OnInit {

  types =[
    { label: 'Recipe', value:"RECIPE"},
    { label: 'Expense', value:"EXPENSE"},
  ]

  categories = [
    { label: 'Food', value: 1},
    { label: 'Transportation', value: 2},
  ]

  peoples = [
    { label: 'João da Silva', value: 4},
    { label: 'Sebastião Souza', value: 2},
    { label: 'Maria Abadia', value: 3},
  ]

  constructor() { }

  ngOnInit() {
  }

}
