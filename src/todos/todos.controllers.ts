import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Put(":id")
  update(@Body() updateTodoDto: CreateTodoDto,@Param('id') id: string):Todo {
        const todoId = parseInt(id);
        return this.todosService.update(updateTodoDto,todoId);
  }

  @Delete(":id")
  remove(@Param("id") id:string):string {
    const todoId = parseInt(id);
    this.todosService.delete(todoId);
     return 'Todo successfully deleted.';
  }

}
