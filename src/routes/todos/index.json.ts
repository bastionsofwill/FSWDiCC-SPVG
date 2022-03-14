import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api";

export const get: RequestHandler = (request) => {
    return api(request);
}

export const post: RequestHandler = (request) => {
    console.log(request.params);
    return api(request, {
        created_at: new Date(),
        text: request.params.body,
        done: false
    })
}
