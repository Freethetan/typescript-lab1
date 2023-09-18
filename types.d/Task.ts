import { v4 as uuidv4 } from 'uuid';

export default class Task {
    private _uuid: uuidv4
    private _title: string
    private _description?: string
    private _type: 'event' | 'task'
    private _due_date: Date
    private _status: 'due' | 'done'

    get uuid(): uuidv4 {
        return this._uuid;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get type(): "event" | "task" {
        return this._type;
    }

    set type(value: "event" | "task") {
        this._type = value;
    }

    get due_date(): Date {
        return this._due_date;
    }

    set due_date(value: Date) {
        this._due_date = value;
    }

    get status(): "due" | "done" {
        return this._status;
    }

    set status(value: "due" | "done") {
        this._status = value;
    }

    toString(){
        return {
            "uuid": this._uuid,
            "title": this._title,
            "description": this._description,
            "type": this._type,
            "due_date": this._due_date,
            "status": this._status
        }
    }
}