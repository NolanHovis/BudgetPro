import { Component, OnInit } from '@angular/core';
import { Money } from 'src/app/models/money.model';
import { IncomeService } from '../services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: [
    './income.component.scss',
    '../dashboard.component.scss'
  ]
})
export class IncomeComponent implements OnInit {

  constructor(private incomeService: IncomeService) { }

  paychecks: Money[]

  ngOnInit(): void {
  this.paychecks = this.incomeService.paychecks
  }

  onGetIncome(amount: number) {
    this.incomeService.getIncome(amount)
  }

}
