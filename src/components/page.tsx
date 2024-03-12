import {ReactNode} from "react";

export function Head() {
    return (
        <head>
            <meta charSet="utf-8"/>
            <title>Hackers Night - Hack This Site</title>

            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>

            <link href="/css/styles.css" rel="stylesheet" media="all"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Azeret+Mono&family=Roboto+Condensed&display=swap"
                  rel="stylesheet"/>

            <script src={"https://code.jquery.com/jquery-4.0.0-beta.min.js"}></script>
            <script src={"/js/nav-encrypted.js"}></script>
        </head>
    );
}


export function Footer({number}: { number: number }) {
    return (
        <>
            <hr/>
            <footer role="contentinfo">
                <button id={"hint"}>Hinweis</button>
                <br/>
                <small>
                    Hacker's Night am Otto-Nagel-Gymnasium {new Date().getFullYear()}
                </small>
            </footer>
        </>
    );
}

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