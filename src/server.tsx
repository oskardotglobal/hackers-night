import serveStatic from "serve-static-bun";
import {pathOf} from "./utils.ts";
import {createClient} from "@libsql/client";
import index from "./routes";
import question2 from "./routes/api/question2.tsx";
import question3 from "./routes/api/question3.tsx";
import question4 from "./routes/api/question4.tsx";
import question5 from "./routes/api/question5.tsx";
import question6 from "./routes/api/question6.tsx";
import question7 from "./routes/api/question7.tsx";
import question8 from "./routes/api/question8.tsx";
import end from "./routes/api/end.tsx";
import submit from "./routes/api/submit.tsx";
import login from "./routes/api/login.tsx";
import question9 from "./routes/api/question9.tsx";

const client = createClient({
    url: "libsql://hackers-night-oskardotglobal.turso.io",
    authToken: process.env["LIBSQL_TOKEN"],
});

Bun.serve({
    async fetch(req): Promise<Response> {
        const path = pathOf(req);

        switch (path) {
            case "/":
                return await index(req);

            case "/api/" + btoa("Holger Henzler-Hübner" + "902995031"):
                return await question2(req);

            case "/api/" + btoa("Nils Opfermann" + "902275855"):
                return await question3(req);

            case "/api/" + btoa("NorbertIlliges" + "902276929"):
                return await question4(req);

            case "/api/" + btoa("Christina Henke" + "902276053"):
                return await question5(req);

            case "/api/" + btoa("Cathrin Braun" + "902491600"):
                return await question6(req);

            case "/api/" + btoa("Stefan Platzek" + "902495275"):
                return await question7(req);

            case "/api/" + btoa("Detlef Erhardt" + "902299201"):
                return await question8(req);

            case "/api/" + btoa("tran khoi dang" + "b22329a"):
                return await question9(req);

            case "/api/login":
                return await login(req);

            case "/api/submit/" + btoa("tran khoi dang" + "b22329a"):
                return await submit(req, client);
        }

        return serveStatic("static")(req);
    }
});