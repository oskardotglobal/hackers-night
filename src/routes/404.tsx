import {render} from "../utils.ts";
import {Page} from "../components/page.tsx";

export default async function notFound(_: Request): Promise<Response> {
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