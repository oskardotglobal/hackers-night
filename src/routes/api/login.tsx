import {Response} from "bun-types/fetch";
import {render} from "../../utils.ts";
import {End} from "../../pages/end.tsx";
import {SHA256} from "crypto-js";

interface Login {
    username: string;
    password: string;
}

export default async function login(req: Request): Promise<Response> {
    const login = (await req.json()) as Login;
    return authenticateLogin(login.username, login.password);
}

function authenticateLogin(username: string, password: string) {
    const hashedAdminUsername = SHA256("admin").toString();
    const hashedAdminPassword = SHA256("6969").toString();

    if (username === hashedAdminUsername && password === hashedAdminPassword) {
        return render(<End/>)
    } else {
        return new Response(undefined, { status: 401 });
    }
}