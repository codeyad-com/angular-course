import { Component, input } from '@angular/core';


export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}


@Component({
  imports: [],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})
export class TaskItem {
  task = input.required<Task>();
}
