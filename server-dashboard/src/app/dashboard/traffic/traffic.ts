import { Component, computed, signal } from '@angular/core';
import { dummyTrafficData } from '../../dummyTraficData';

@Component({
  selector: 'app-traffic',
  imports: [],
  templateUrl: './traffic.html',
  styleUrl: './traffic.css',
})
export class Traffic {
  dummyTrafficData = signal(dummyTrafficData);

  maxTraffic = computed(() => Math.max(...this.dummyTrafficData().map((data) => data.value)));
}
