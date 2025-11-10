/* eslint-disable prettier/prettier */
import { TaskStatus } from "./task.model";

export class CreateTaskDto {
    title: string;
    description: string;
    status: TaskStatus
}