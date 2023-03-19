import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class updateEmployeeDto {
    @ApiProperty({ type: String})
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({ type: String, required: false})
    middle_name: string;

    @ApiProperty({ type: String})
    @IsString()
    @IsNotEmpty()
    last_name: string;

    @ApiProperty({ type: String})
    @IsString()
    @IsNotEmpty()
    designation: string;

    @ApiProperty({ type: String})
    @IsString()
    @IsNotEmpty()
    gender: string;

    @ApiProperty({ type: String})
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ type: String})
    @IsNotEmpty()
    mobile_number: string;
   

    @ApiProperty({ type: String, example: '1995-01-01'})
    @IsNotEmpty()
    dob: Date;

    @ApiProperty({ type: String, example: '2021-01-01'})
    @IsNotEmpty()
    date_of_joining: Date;

    @ApiProperty({ type: String})
    @IsString()
    @IsNotEmpty()
    address: string;
}