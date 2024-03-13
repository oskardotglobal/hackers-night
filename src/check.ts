import {createClient} from "@libsql/client";

const client = createClient({
    url: "libsql://hackers-night-oskardotglobal.turso.io",
    authToken: process.env["LIBSQL_TOKEN"],
});

const rs = await client.execute("SELECT * FROM hackers;");
console.log(rs.rows.map(r => {return {name: r.name, date: r.date}}));
client.close();