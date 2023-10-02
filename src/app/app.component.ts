import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private list = new TodoList("Group 13: Ashley, Max, Alan and Viktor", [
    new TodoItem("Go for run"),
    new TodoItem("Get flowers"),
    new TodoItem("Collect tickets"),
    new TodoItem("Study for JavaScript", true),
    new TodoItem("Walk the dog")
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem);
      this.items;
    }
  }

  showComplete: boolean = true; //I set it as true to show all tasks on page load
}
