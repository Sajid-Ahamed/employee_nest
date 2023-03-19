import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(private service: EmployeeService) { }

    @Get('/')
    async getAll(@Param() params) {
        try {
          let result = await this.service.getEmployees();
          return result
        } catch (error) {
            return error
        }
    }

    @Get(':id')
    async getEmployeesById(@Param('id') id) {
        try {
          let result = await this.service.getEmployeesById(id);
          return result
        } catch (error) {
            return error
        }
    }

    @Post('/add')
    create(@Body() employee: any) {
        try {
            return this.service.createEmployee(employee);
        } catch (error) {
            return error
        }
    }

    @Put('/update/:id')
    update(@Body() employee: any,@Param('id') id: number) {
    try {
        let result = this.service.updateUser(employee, id);
        return result
    } catch (error) {
        return error
    }
    }

    @Delete('/delete/:id')
    async deleteEmployee(@Param('id') id) {
        try {
            return await this.service.deleteEmployee(id);
        } catch (error) {
            return error
        }
    }
}
