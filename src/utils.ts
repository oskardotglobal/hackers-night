import {ReactNode} from "react";
import {renderToStaticMarkup} from "react-dom/server";

export function pathOf(req: Request): string {
    const url = new URL(req.url);
    return url.pathname;
}

export function render(input: ReactNode) {
    return new Response(renderToStaticMarkup(input), {
        headers: {"Content-Type": "text/html"},
    });
}