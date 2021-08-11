import { Component, OnInit } from '@angular/core';
import { IncomeService } from './services/income.service';
import { Money } from '../models/money.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private incomeService: IncomeService) { }
  paychecks: Money[] = this.incomeService.paychecks
  totalIncome: any

  ngOnInit(): void {
    // let total: number
    // this.paychecks.forEach(a => total += a.amount, 0)
    // this.totalIncome = total
  }

  method() {
  }



}
