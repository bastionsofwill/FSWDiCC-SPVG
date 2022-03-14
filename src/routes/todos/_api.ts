import type { Request } from "@sveltejs/kit";

// TODO: Persist in database
let todos: Todo[] = [];

export const api = (request: Request, todo?: Todo) => {
    let body = {};
    let status = 500;

    switch (request.method.toUpperCase()) {
        case "GET":
            body = todos;
            status = 200;
            break;
        case "POST":
            todos.push(todo);
            return {
                status: 303,
                headers: {
                    location: "/"
                }
            }
            break;
        default:
            break;
    }
    return {
        status,
        body
    }
}