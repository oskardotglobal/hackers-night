import serveStatic from "serve-static-bun";
import {Question} from "./pages/question.tsx";
import {pathOf, render} from "./utils.ts";
import {Page} from "./components/page.tsx";
import {Index} from "./pages";
import {Head} from "./components/head.tsx";
import {End} from "./pages/end.tsx";
import {createClient} from "@libsql/client";

const client = createClient({
    url: "libsql://hackers-night-oskardotglobal.turso.io",
    authToken: process.env["LIBSQL_TOKEN"],
});

Bun.serve({
    async fetch(req): Promise<Response> {
        const path = pathOf(req);

        if (path.startsWith("/api")) {
            return await processApi(req);
        }

        if (path === "/") {
            return render(
                <html lang={"de"}>
                <Head/>
                <body>
                <Index/>
                </body>
                </html>
            );
        }

        return serveStatic("static")(req);
    }
});

async function processApi(req: Request) {
    const paths = new URL(req.url).pathname.split("/");
    const path = paths.pop()

    switch (path) {
        case btoa("Holger Henzler-Hübner" + "902995031"):
            return render(<Question number={2}/>)

        case btoa("Nils Opfermann" + "902275855"):
            return render(<Question number={3}/>)

        case btoa("NorbertIlliges" + "902276929"):
            return render(<Question number={4}/>)

        case btoa("Christina Henke" + "902276053"):
            return render(<Question number={5}/>)

        case btoa("Cathrin Braun" + "902491600"):
            return render(<Question number={6}/>)

        case btoa("Stefan Platzek" + "902495275"):
            return render(<Question number={7}/>)

        case btoa("Detlef Erhardt" + "902299201"):
            return render(<Question number={8}/>)

        // Ende
        case btoa("tran khoi dang" + "b22329a"):
            return render(<End/>)

        default:
            if (path && path.startsWith(`${btoa("tran khoi dang" + "b22329a")};submit;`)) {
                const name = path.split(";").pop();
                if (name) {
                    await client.execute({
                        sql: "INSERT INTO hackers (name, date) VALUES (?, NOW())",
                        args: [name]
                    });
                }
            }

            return render(
                <Page>
                    <h1>404 - Not found</h1>
                    <p>
                        Wie bist du denn hier gelandet? <br/>
                        <a href={"/"}>Zurück zur Startseite</a>
                    </p>
                </Page>
            );
    }
}