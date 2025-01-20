import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class TaskFormComponent {
  newTask: Task = { title: '', status: 'Not Started', priority: 'Normal', dueDate: '' };


  taskService = inject(TaskService);

  addTask() {
    this.taskService.addTask(this.newTask).subscribe(() => {
      this.newTask = { title: '', status: 'Not Started', priority: 'Normal', dueDate: '' };
    });
  }
}
