import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity/employee.entity';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(EmployeeEntity) private employeeRepository: Repository<EmployeeEntity>) { }

    async getEmployees(): Promise<any[]> {
        try {
            return await this.employeeRepository.find({where: [{"is_active": true}]});
        } catch (error) {
            throw error
        }
    }

    async getEmployeesById(id: number): Promise<EmployeeEntity> {
        try {
            return await this.employeeRepository.findOne({where: [{ "id": id , "is_active": true}]})
        } catch (error) {
            throw error
        }
    }

    async createEmployee(bodyData: any) : Promise<any> {
        try {
            return await this.employeeRepository.save(bodyData)
        } catch (error) {
            throw error
        }
    }
    async updateUser(employee: any, id: number) {
        try {
            let result = await this.employeeRepository.update(id, employee)
            if (result) {
                return await this.employeeRepository.findOne({where: [{ "id": id , "is_active": true}]})
            }
        } catch (error) {
            throw error
        }
    }

    async deleteEmployee(id: number) {
        try {
            let getResult = await this.employeeRepository.findOne({where: [{ "id": id , "is_active": true}]})
            if (!getResult) {
                throw new NotFoundException('No Employee Found')
            }
            let data = { "is_active": false }
            let result = await this.employeeRepository.update(id, data)
            if (result) {
                return `Employee Deleted Successfully`
            }
        } catch (error) {
            throw error
        }
    }
}
