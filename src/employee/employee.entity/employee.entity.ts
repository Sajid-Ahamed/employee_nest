import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum GenderType {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}
@Entity({ name: 'employee'})
export class EmployeeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25, nullable: false })
    first_name: string;

    @Column({ length: 25, nullable: true })
    middle_name: string;

    @Column({ length: 25, nullable: false })
    last_name: string;

    @Column({ nullable: false })
    designation: string;

    @Column({ type: 'text', nullable: false}) 
    gender: GenderType;

    @Column({ unique: true, nullable: false })
    public email: string;

    @Column({ unique: true, nullable: false })
    mobile_number: string;

    @Column({ type: 'date', nullable: false})
    public dob: Date;

    @Column({ type: 'date', nullable: false})
    public date_of_joining: Date;

    @Column()
    address: string

    @Column(({ default: true}))
    is_active: boolean
}