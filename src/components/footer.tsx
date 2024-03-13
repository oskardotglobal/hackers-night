export function Footer({number}: { number: number }) {
    const hints = {
        1: "Manchmal befinden sich wichtige Informationen im Quellcode einer Website.",
        2: "Computer speichern Zeichen in Form von Binärcodes, die nur aus Einsen und Nullen bestehen. Um diese Sequenzen wieder in Buchstaben umwandeln zu können, die der Mensch lesen kann, benötigt man Tabellen, in denen jedem Schriftzeichen eine Ziffer zugeordnet wird. Zudem muss man in der Lage sein, Binärzahlen ind Dezimalzahlen umzuwandeln.",
        3: "Einen ziemlich guten Schutz vor unbefugten Zugriffen bieten verschiedene Methoden der Verschlüsselung (Kryptografie). Sollte man auf verschlüsselte Informationen stossen, muss man zunächst versuchen herauszufinden, mit welchem Verfahren verschlüsselt wurde (z.B. Transposition oder Substitution) und welcher Schlüssel gegebenenfalls benutzt wurde.",
        6: "Auch in Javascript gibt es Variablen mit deren Werten man rechnen kann, wenn es sich um Zahlen handelt. Um Rechnungen wiederholt durchführen zu können, benutzt man zum Beispiel for-Schleifen. Um deren Funktion nachvollziehen zu können, bietet sich eine Internetrecherche an.",
        7: "In Variablen kann man nicht nur Zahlen, sondern auch Buchstaben, Worte und Sätze speichern und manipulieren. Mittels der Methoden von String können viele verschiedene Veränderungen vorgenommen werden. (https://www.w3schools.com/js/js_string_methods.asp)"
    };

    // @ts-ignore
    const hint = hints[number];

    return (
        <>
            <hr/>
            <footer role="contentinfo">
                {hint && <>
                    <button id={"hintbtn"}>Hinweis</button>
                    <div style={{display: "none"}} id={"hint"}>{hint}</div>
                </>}

                <br/>
                <small>
                    Hacker's Night am Otto-Nagel-Gymnasium {new Date().getFullYear()}
                </small>
            </footer>
        </>
    );
}