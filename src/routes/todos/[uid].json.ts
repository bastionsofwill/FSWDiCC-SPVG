import type { RequestHandler } from "@sveltejs/kit";

export const del: RequestHandler = () => {
    return {
        status: 200
    }
}