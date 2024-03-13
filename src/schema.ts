import {createClient} from "@libsql/client";

const client = createClient({
    url: "libsql://hackers-night-oskardotglobal.turso.io",
    authToken: process.env["LIBSQL_TOKEN"],
});

await client.execute("CREATE TABLE IF NOT EXISTS hackers (name TEXT, date DATETIME);");
client.close();