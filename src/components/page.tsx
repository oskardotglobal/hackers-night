import {ReactNode} from "react";
import {Head} from "./head.tsx";

export function Page({children}: { children: ReactNode }) {
    return (
        <html lang={"de"}>
        <Head/>
        <body>
        <div className="wrap">
            {children}
        </div>
        </body>
        </html>
    );
}