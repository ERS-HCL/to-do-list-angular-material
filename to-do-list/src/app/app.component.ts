import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Task } from './components/to-do-list/to-do-list.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  taskData: Task[] = [{ id: 1, name: "Sample Task", completed: true },
  { id: 2, name: "Learn Angular", completed: false },
  { id: 3, name: "Schedule Meeting", completed: false }];
  @ViewChild(ToDoListComponent)
  private ToDoListComponent: ToDoListComponent
  constructor() {

  }
  ngAfterViewInit() {
    console.log(this.ToDoListComponent.getToDoList());
  }

  showTaskToDo() {
    console.log(this.ToDoListComponent.getToDoList());
  }

  showTasks(tasks: Task[]) {
    console.log(tasks);
  }
}
