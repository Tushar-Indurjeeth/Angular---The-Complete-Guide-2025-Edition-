import { Injectable, signal } from '@angular/core';
import { InvestmentType } from './investment-type';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private annualData = signal<InvestmentType[]>([]);

  calculateInvestment(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  ) {
    this.annualData.set([]);
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.update((data) => [
        ...data,
        {
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: initialInvestment + annualInvestment * year,
        },
      ]);
    }
  }

  getAnnualData() {
    return this.annualData;
  }
}
