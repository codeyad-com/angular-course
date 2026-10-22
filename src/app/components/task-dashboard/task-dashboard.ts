import { Component, signal } from '@angular/core';
import { Task, TaskItem } from '../task-item/task-item';

@Component({
  imports: [TaskItem],
  selector: 'app-task-dashboard',
  styleUrl: './task-dashboard.css',
  templateUrl: './task-dashboard.html',
})
export class TaskDashboard {


    tasks = signal<Task[]>([
    { id: 1, title: 'یادگیری Signals در انگولار', isCompleted: true },
    { id: 2, title: 'کار با Standalone Components', isCompleted: false },
  ]);



}
