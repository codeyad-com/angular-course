import { Component } from '@angular/core';
import { Counter } from './components/counter/counter';
import { TaskDashboard } from './components/task-dashboard/task-dashboard';

@Component({
  imports: [Counter, TaskDashboard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}

