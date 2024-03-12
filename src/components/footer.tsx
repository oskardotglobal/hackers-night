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