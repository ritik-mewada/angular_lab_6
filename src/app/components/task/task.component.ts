import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],

  imports: [CommonModule],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleTask = new EventEmitter<number>();

  onDelete(): void {
    this.deleteTask.emit(this.task.id);
  }

  onToggle(): void {
    this.toggleTask.emit(this.task.id);
  }
}
