import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {

  count = signal<number>(0);
  step = signal<number>(1);
  userName = signal<string>("محمد");
  profileUrl = signal<string>("https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png")


  
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(current => current + this.step());
  }

  decrement() {
    this.count.update(current => current - this.step());
  }

  reset() {
  
    this.count.set(0);
  }
}
