import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = signal(DUMMY_USERS);
  selectedUserId = signal<string | null>(null);

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }

  selectedUser = computed(() => this.users().find((user) => user.id === this.selectedUserId()));

  // get selectedUser() {
  //   return this.users().find((user) => user.id === this.selectedUserId())!;
  // }
}
