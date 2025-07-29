import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TasklistComponent } from '../../components/tasklist/tasklist.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  imports: [TasklistComponent],
})
export class HomeComponent {
  tasks: Task[] = [];

  addTask(newTask: Omit<Task, 'id' | 'createdDate'>): void {
    const task: Task = {
      ...newTask,
      id: Math.max(...this.tasks.map((t) => t.id), 0) + 1,
      createdDate: new Date(),
    };
    this.tasks.push(task);
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  toggleTask(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
