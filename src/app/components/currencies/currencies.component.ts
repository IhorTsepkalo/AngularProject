import {Component, Input, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {Currency} from "../../interfaces/Currency";

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currencies: Currency[] = [];


  constructor(private currecyServise: CurrencyService) {
  }

  ngOnInit(): void {
    this.currecyServise.getCurrencyRate().subscribe(value => {
      this.currencies = value;
    })
  }

}
