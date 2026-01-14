import { Injectable, signal } from '@angular/core';
import { AnnualDataInterface, InvestmentInterface } from './investment-interface';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private annualData = signal<AnnualDataInterface[]>([]);

  calculateInvestmentResults(investmentData: InvestmentInterface) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentData;

    this.annualData.set([]);

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

      const currentData = this.annualData();

      const newEntry = {
        year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment,
        totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      };

      this.annualData.set([...(currentData || []), newEntry]);
      // this.annualData.push({
      //   year: year,
      //   interest: interestEarnedInYear,
      //   valueEndOfYear: investmentValue,
      //   annualInvestment: annualInvestment,
      //   totalInterest: totalInterest,
      //   totalAmountInvested: initialInvestment + annualInvestment * year,
      // });
    }
  }

  getInvestmentResults() {
    return this.annualData();
  }
}
