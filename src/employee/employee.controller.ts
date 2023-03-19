import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { createEmployeeDto } from './dto/createEmployee.dto';
import { updateEmployeeDto } from './dto/updateEmployee.dto';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
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
    @ApiResponse({ status: 200, description: 'Employee Fetched'})
    async getEmployeesById(@Param('id') id:number) {
        try {
          let result = await this.service.getEmployeesById(id);
          return result
        } catch (error) {
            return error
        }
    }

    @Post('/add')
    @ApiResponse({ status: 200, description: 'Employee Created'})
    create(@Body() employee: createEmployeeDto) {
        try {
            return this.service.createEmployee(employee);
        } catch (error) {
            return error
        }
    }

    @Put('/update/:id')
    @ApiResponse({ status: 200, description: 'Employee Updated'})
    async updateEmployee(@Body() employee: updateEmployeeDto,@Param('id') id: number) {
    try {
        let result = this.service.updateUser(employee, id);
        return result
    } catch (error) {
        return error
    }
    }

    @Delete('/delete/:id')
    @ApiResponse({ status: 200, description: 'Employee Deleted'})
    async deleteEmployee(@Param('id') id:number) {
        try {
            return await this.service.deleteEmployee(id);
        } catch (error) {
            return error
        }
    }
}
