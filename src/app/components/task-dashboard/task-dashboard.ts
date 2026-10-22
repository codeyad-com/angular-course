import { Component, signal } from '@angular/core';
import { Task, TaskItem } from '../task-item/task-item';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [TaskItem, FormsModule],
  selector: 'app-task-dashboard',
  styleUrl: './task-dashboard.css',
  templateUrl: './task-dashboard.html',
})
export class TaskDashboard {


  tasks = signal<Task[]>([
    { id: 1, title: 'یادگیری Signals در انگولار', isCompleted: true },
    { id: 2, title: 'کار با Standalone Components', isCompleted: false },
  ]);


  newTaskTitle = signal<string>('');


  addTask() {

    const title = this.newTaskTitle().trim();

    if (!title) return;

    const newTask: Task = {
      id: Date.now(),
      title: title,
      isCompleted: false
    }

    this.tasks.update(currentlist => [...currentlist, newTask]);
    this.newTaskTitle.set('');

  }


  handleDelete(id: number) {
    this.tasks.update(list =>
      list.filter(item => item.id !== id)
    )
  }

    handleToggle(id: number) {
    this.tasks.update(list =>
      list.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)
    );
  }

}
