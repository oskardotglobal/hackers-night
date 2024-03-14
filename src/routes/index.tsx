import {render} from "../utils.ts";
import {Head} from "../components/head.tsx";
import {Index} from "../pages";

export default async function index(req: Request): Promise<Response> {
    return render(
        <html lang={"de"}>
        <Head/>
        <body>
        <Index/>
        </body>
        </html>
    );
}