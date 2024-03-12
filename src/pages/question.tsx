import {Footer, Page} from "../components/page.tsx";

export function Question({number}: { number: number }) {
    return (
        <Page>
            <header role="banner">
                <h1>= Hacker's Night - Hack This Site =</h1>
                <h3>Du bist eine Sicherheitsebene weiter.</h3>
                <p>Versuche tiefer in das System vorzudringen. Der Schwierigkeitsgrad nimmt mit jeder Sicherheitsebene
                    zu. Du wirst zunehmend mehr Informationen und Wissen benötigen. Neben dem Internet bietet auch der
                    Moodle-Kurs "Hacker's Night" notwendige Inhalte für den Versuch, die Sicherheitsvorkehrungen dieser
                    Website auszuhebeln. Viel Erfolg.</p>
            </header>

            <main role="main">
                <hr/>
                <section>
                    <header>
                        <h2>Zugang Sicherheitsebene {number}</h2>
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

                    <script src={`/${number}.js`}></script>
                </section>
            </main>

            <Footer number={number}/>
        </Page>
    );
}