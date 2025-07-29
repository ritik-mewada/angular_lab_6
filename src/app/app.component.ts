import { Component } from '@angular/core';
import { Task } from './models/task';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FooterComponent, RouterModule],
})
export class AppComponent {
  title = 'Task Manager';

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
