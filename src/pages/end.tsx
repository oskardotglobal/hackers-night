import {Page} from "../components/page.tsx";
import {Footer} from "../components/footer.tsx";

export function End() {
    const script = `
        document.getElementById("idCode").addEventListener("click", function() {
            const vorname = document.getElementById("idVorname").value;
            $.ajax({url: "/api/" + localStorage.getItem("last") + ";submit;" + vorname});
            alert("Du hast es geschafft und wurdest registriert.");
            
            $("#idForm").remove();
            $("#script).remove();
        });
    `;

    return (
        <Page>
            <header role="banner">
                <h1>= Hacker's Night - Hack This Site =</h1>
                <h3>Du hast es geschafft bis zur sichersten Ebene dieses Systems vorzudringen.</h3>
                <p>Herzlichen Glückwunsch!</p>
            </header>
            <main role="main">
                <hr/>
                <section>
                    <header>
                        <h2>Hackerakreditierung</h2>
                    </header>
                    <p>Gib deinen Vornamen in das Eingabefeld ein und werde damit in die Bestenliste eingetragen. Melde
                        dich dann bei deiner betreuenden Lehrperson, um das ganze noch einmal zu überprüfen und zu bestätigen.</p>
                    <form id="idForm">
                        Vorname: <input id="idVorname" type="text" name="name"/><br/>
                        <input id="idCode" type="button" value="Code generieren"/>
                    </form>
                </section>
                <script id="script" dangerouslySetInnerHTML={{__html: script}}></script>
            </main>

            <Footer number={NaN}/>
        </Page>
    );
}