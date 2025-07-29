import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: { id: number; title: string };
  @Output() onDelete = new EventEmitter<number>();

  deleteTask() {
    this.onDelete.emit(this.task.id);
  }
}
