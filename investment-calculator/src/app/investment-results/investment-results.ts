import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  private investmentService = inject(InvestmentService);

  annualData = this.investmentService.getAnnualData();
}
