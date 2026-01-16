import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './auth/auth';
import { LearningResourcesComponent } from './learning-resources/learning-resources';
import { AuthService } from './auth/auth-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthComponent, LearningResourcesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
