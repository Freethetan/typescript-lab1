import { v4 as uuidv4 } from 'uuid';
import Task from "Task"

export default class TaskList{
    private _user: uuidv4;
    private _tasks: null | Array<Task> = null;

    get tasks(): Array<Task> | null {
        return this._tasks;
    }

    set tasks(value: Array<Task> | null) {
        this._tasks = value;
    }
}


