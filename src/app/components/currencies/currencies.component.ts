import {Component, Input, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {Currency} from "../../interfaces/Currency";
import {EBasecurrency} from "../basecurrencyEnum";

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  @Input()
  calculatorEnum: EBasecurrency;
  currencies: Currency[] = [];
  amountOfMoney = document.getElementById('amountOfMoney');


  constructor(private currecyServise: CurrencyService) {
  }

  ngOnInit(): void {
    this.currecyServise.getCurrencyRate().subscribe(value => {
      this.currencies = value;
    })
  }
  calc(): void {
    console.log(this.amountOfMoney)
  }

}

