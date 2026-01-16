import { Node } from '@angular/compiler';
import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random();
      console.log(rnd);

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
