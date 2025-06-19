import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  private todos = [];
  private id = 1;

  findAll(): Todo[] {
    return this.todos;
  }
  create(todoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.id++,
      title: todoDto.title,
      description: todoDto.description || '',
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(todoDto:CreateTodoDto, id:number): Todo {

    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('Todo not found');
    }
    const updatedTodo: Todo = {
      ...this.todos[todoIndex],
      ...todoDto,
    };
    this.todos[todoIndex] = updatedTodo;
    return updatedTodo;
  }

  delete(id:number) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('Todo not found');
    }
    this.todos.splice(todoIndex, 1);
    
  }
}
