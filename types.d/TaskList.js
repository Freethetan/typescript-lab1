export default class TaskList {
    _user;
    _tasks = null;
    get tasks() {
        return this._tasks;
    }
    set tasks(value) {
        this._tasks = value;
    }
}
