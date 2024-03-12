import serveStatic from "serve-static-bun";
import {Question} from "./pages/question.tsx";
import {pathOf, render} from "./utils.ts";
import {Page} from "./components/page.tsx";
import {Index} from "./pages";

Bun.serve({
    async fetch(req): Promise<Response> {
        const path = pathOf(req);
        console.log(path);

        if (path.startsWith("/api")) {
            console.log("aaa")
            return processApi(req);
        }

        if (path === "/") {
            console.log("a")
            return render(<Index />);
        }

        return serveStatic("static")(req);
    }
});

function processApi(req: Request) {
    const paths = new URL(req.url).pathname.split("/");
    const path = paths.pop()

    switch (path) {
        case btoa("Holger Henzler-Hübner" + "902995031"):
            return render(<Question number={2}/>)

        case btoa("Nils Opfermann" + "902275855"):
            return render(<Question number={3}/>)

        case btoa("Norbert Illiges" + "902276929"):
            return render(<Question number={4}/>)

        case btoa("Christina Henke" + "902276053"):
            return render(<Question number={5}/>)

        case btoa("Cathrin Braun" + "902491600"):
            return render(<Question number={6}/>)

        case btoa("Stefan Platzek" + "902495275"):
            return render(<Question number={7}/>)

        case btoa("Detlef Erhardt" + "902299201"):
            return render(<Question number={8}/>)

        default:
            return render(
                <Page>
                    <h1>404 - Not found</h1>
                    <p>
                        Wie bist du denn hier gelandet?
                        <a href={"/"}>Zurück zur Startseite</a>
                    </p>
                </Page>
            );
    }
}