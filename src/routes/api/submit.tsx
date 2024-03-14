import {Client} from "@libsql/client";

interface SubmitRequest {
    name: string,
}

export default async function submit(req: Request, client: Client): Promise<Response> {
    const name = (await req.json() as SubmitRequest).name;

    if (name) {
        await client.execute({
            sql: "INSERT INTO hackers (name, date) VALUES (?, datetime('now'))",
            args: [name]
        });

        return new Response(undefined, { status: 200 });
    }

    return new Response(undefined, { status: 500 });
}