class Amplitude extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <input id="mySlider" type="range" min="1" max="5" value="1" step="0.5" onInput="mySelect.value=mySlider.value">
        <input id="mySelect" type="number" min="1" max="5" value="1" step="0.5" onInput="mySlider.value=mySelect.value">
        <br>
        
        <label for="sinus">
            Sinus
            <input type="checkbox" id="sin" name="sin" value="Sin">
        </label><br>
        <label for="cosinus">
            Cosinus
            <input type="checkbox" id="cos" name="cos" value="Cos">
        </label><br>
      `;
    }
}
window.customElements.define('my-amplitude', Amplitude);