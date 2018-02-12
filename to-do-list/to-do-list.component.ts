import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Injectable()

@Component({
  selector: 'mat-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ToDoListComponent implements OnInit {

  @Input('taskList') private tasks: Task[];
  @Output('updateTask') private updateTask: EventEmitter<Task[]> = new EventEmitter<Task[]>();

  private newTask = new FormControl('', [Validators.required]);
  private blankPlacholder = "";
  private snackBarDuration: number = 2000;
  private getErrorMessage() {
    return this.newTask.hasError('required') ? 'You must enter a task' : '';
  }
  constructor(private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    if (this.tasks == undefined || this.tasks == null) {
      this.tasks = [];
    }
  }

  private addTask(taskName) {
    if (taskName != "") {
      let taskId = this.tasks.length + 1;
      this.tasks.push({ id: taskId, name: taskName, completed: false });
      this.snackBar.open(taskName + ' is added to list!', '', {
        duration: this.snackBarDuration
      });
      this.updateTask.emit(this.tasks);
      return false;
    }
  }

  private removeTask(taskName) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (taskName == this.tasks[i].name) {
        this.tasks.splice(i, 1);
      }
    }
    this.snackBar.open(taskName + ' is removed from list!', '', {
      duration: this.snackBarDuration
    });
    this.updateTask.emit(this.tasks);
    return false;
  }

  private changeStatus(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task.id == this.tasks[i].id) {
        this.tasks[i].completed = task.completed;
      }
    }
    this.snackBar.open('Status of ' + task.name + ' is changed!', '', {
      duration: this.snackBarDuration
    });
    this.updateTask.emit(this.tasks);
    return false;
  }

  private getIncompleteTask() {
    let taskCompleted: number = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed) {
        taskCompleted++
      }
    }
    return taskCompleted;
  }

  public getToDoList() {
    let completedTasks = this.tasks.filter(task => task.completed === true);
    let inCompletedTasks = this.tasks.filter(task => task.completed === true);
    return { tasks: this.tasks, completedTasks: completedTasks, inCompletedTasks: inCompletedTasks };
  }
}
export interface Task {
  id: number;
  name: string;
  completed: boolean;
}
