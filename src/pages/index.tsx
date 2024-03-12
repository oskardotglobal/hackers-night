import {Page} from "../components/page.tsx";
import {Footer} from "../components/footer.tsx";

export function Index() {
    return (
        <Page>
            <header role="banner">
                <h1>= Hacker's Night - Hack This Site =</h1>
                <h3>Herausforderung:</h3>
                <p>Hacke dich in die acht verschiedenen Ebenen des passwortgeschützen Bereichs dieser Website.</p>
                <p>Dazu musst du jeweils den Benutzernamen und das Passwort herausbekommen bzw. knacken. Hacken bedeutet
                    nicht ausschließlich den Einsatz technischer Mittel zur Lösung eines Problems, häufig wird ein hohes
                    Maß an Kreativität und die ausgeprägte Fähigkeit zum Einsatz neu erlangten Wissens benötigt. </p>
                <p>Für den Start als Hacker*in findest du einige wichtige Hinweise und Ansatzpunkte auf folgender
                    Website:<a href="https://de.wikihow.com/Eine-Webseite-mit-einfachem-HTML-hacken"
                               target="blank">https://de.wikihow.com/Eine-Webseite-mit-einfachem-HTML-hacken</a>
                </p>
                <p>Im weiteren Verlauf wirst du zusätzliche Informationen zu informatischen Inhalten benötigen. Lade dir
                    dazu das hier verfügbare Hacker-Informationsmaterial herunter.<a
                        href="/InfoMaterial/Hackers-Night-Infomaterial.zip" download>Download
                        Hacker-Informationsmaterial</a>
                </p>
            </header>

            <main role="main">
                <hr/>
                <section>
                    <header>
                        <h2>Zugang Sicherheitsebene 1</h2>
                    </header>
                    <p>Login zum geschützten Bereich der Website<br/>
                        Bitte geben Sie Ihren Benutzernamen und Ihr Passwort ein.</p>
                    <form id="idForm">
                        Benutzername: <input id="idBenutzername" type="text" name="name"/><br/>
                        <span id="idBenutzernameMeldung"> </span>
                        Passwort: <input id="idPasswort" type="password" name="password"/><br/>
                        <span id="idPasswortMeldung"> </span>
                        <input id="idLogin" type="button" value="Login"/>
                    </form>

                    <script src={`/js/index.js`}></script>
                </section>
            </main>

            <Footer number={1}/>
        </Page>
    );
}