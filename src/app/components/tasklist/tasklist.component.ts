import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],

  imports: [TaskComponent, CommonModule, FormsModule],
})
export class TasklistComponent {
  @Input() tasks: Task[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleTask = new EventEmitter<number>();
  @Output() addTask = new EventEmitter<Omit<Task, 'id' | 'createdDate'>>();

  newTask = {
    title: '',
    description: '',
    completed: false,
  };

  trackByTaskId(index: number, task: Task): number {
    return task.id;
  }

  onDeleteTask(taskId: number): void {
    this.deleteTask.emit(taskId);
  }

  onToggleTask(taskId: number): void {
    this.toggleTask.emit(taskId);
  }

  onSubmit(): void {
    if (this.newTask.title.trim() && this.newTask.description.trim()) {
      this.addTask.emit({ ...this.newTask });
      this.newTask = { title: '', description: '', completed: false };
    }
  }
}
