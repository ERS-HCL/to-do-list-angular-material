# To Do List is a project developed in Angular Material.
<p align="center">
    <img  alt="To-Do-List" src="img/todolist.png" class="img-responsive">
</p>
[Click to see the demo](https://stackblitz.com/edit/angular-material-todolist-wuu6qb?embed=1&file=index.html&hideExplorer=1&hideNavigation=1&view=preview)

# Getting Started
We can either use the complete to do list project built on angular material or use only the to-do-list.component re-usable component.

## Using the complete angular material project
Download the to-do-list folder and install the required packages and run the application. All the required material components are imported to the project.

### Installing

```
> npm install
```

### Run server

```
> ng serve
```

## Adding to do list component in your project
 Download the to-do-list.component to your angular material project and include required components from angular material.

```html

<mat-to-do-list [taskList]="taskData" (updateTask)="showTasks($event)"></mat-to-do-list>

```
taskData is the input for the to do list of type Task

## Task Interface
```typescript

Task {
  id: number;
  name: string;
  completed: boolean;
}
  
```

## Listening to events
```typescript

  showTasks(tasks: Task[]) {
    console.log(tasks);
  }
  
```
## Method
Use getToDoList() of ToDoListComponent using @ViewChild decorator

```typescript

  @ViewChild(ToDoListComponent)
  private ToDoListComponent: ToDoListComponent
  
  ...
  showTaskToDo() {
    console.log(this.ToDoListComponent.getToDoList());
  }
    
```
This method would return an object which has tasks, completedTasks and inCompletedTasks
