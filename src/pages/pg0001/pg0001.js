import { createButton } from "../../components/buttons/buttons.js";

export function init() {

    const container = document.getElementById("buttons");

    if (!container) return;

    container.appendChild(
        createButton("exit", "Sair", () => {
            loadPage("home");
        })
    );

    const resetBtn = document.getElementById("btnReset");

    if (resetBtn) {
        resetBtn.onclick = () => {
            console.log("Reset clicado");
        };
    }
}