import { Component } from '@angular/core';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent {
  tasks = [
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Learn Angular' },
    { id: 3, title: 'Walk the dog' },
  ];

  addTask(title: string) {
    if (!title) return;
    this.tasks.push({ id: Date.now(), title });
  }

  handleDelete(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
