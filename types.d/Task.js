export default class Task {
    _uuid;
    _title;
    _description;
    _type;
    _due_date;
    _status;
    get uuid() {
        return this._uuid;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get due_date() {
        return this._due_date;
    }
    set due_date(value) {
        this._due_date = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    toString() {
        return {
            "uuid": this._uuid,
            "title": this._title,
            "description": this._description,
            "type": this._type,
            "due_date": this._due_date,
            "status": this._status
        };
    }
}
