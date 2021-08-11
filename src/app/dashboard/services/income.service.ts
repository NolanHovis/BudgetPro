import { Injectable, OnInit } from "@angular/core";
import { Money } from "../../models/money.model";

@Injectable({
  providedIn: 'root'
})

export class IncomeService implements OnInit{
  paychecks: Money[] = [
    {
      type: 'income',
      name: 'Paycheck 1',
      amount: 1200
    },
    {
      type: 'income',
      name: 'Paycheck 2',
      amount: 1200
    }
  ]

  ngOnInit() {
  }

  getIncome(amount: number) {
    debugger
    this.paychecks.map(
      (am => am.amount = amount)
    )
    console.table(this.paychecks)
  }


}
