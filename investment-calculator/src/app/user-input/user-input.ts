import { Component, inject, input, signal } from '@angular/core';
import { InvestmentService } from '../investment-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(0);
  duration = signal<number>(0);

  private investmentService = inject(InvestmentService);

  onCalculate() {
    this.investmentService.calculateInvestment(
      this.initialInvestment(),
      this.annualInvestment(),
      this.expectedReturn(),
      this.duration()
    );

    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.expectedReturn.set(0);
    this.duration.set(0);
  }
}
