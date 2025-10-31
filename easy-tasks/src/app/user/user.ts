import { Component, computed, EventEmitter, input, output } from '@angular/core';
import { Card } from '../shared/card/card';

type UserType = {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // Old method before signals, mostly ancient schiit
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>();

  user = input.required<UserType>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => 'users/' + this.user().avatar);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
