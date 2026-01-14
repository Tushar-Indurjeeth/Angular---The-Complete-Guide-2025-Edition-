import { Component, computed, input, output, signal } from '@angular/core';
import { type UserInterface } from './user-interface';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserInterface>();
  selected = input.required<boolean>();

  imagePath = computed(() => 'users/' + this.user().avatar);

  select = output<string>();

  // selectedUser = signal(DUMMY_USERS[0]);
  // imagePath = computed(() => 'users/' + this.selectedUser().avatar);
  // // Pre signal way:
  // // get imagePath() {
  // //   return 'users/' + this.selectedUser().avatar;
  // // }
  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
