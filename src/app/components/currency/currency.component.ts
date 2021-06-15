import {Component, Input, OnInit} from '@angular/core';
import {Currency} from "../../interfaces/Currency";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Input()
  currency: Currency;

  constructor() {
  }

  ngOnInit(): void {
  }

}
