export var Attri;
(function (Attri) {
    Attri["image"] = "image";
    Attri["name"] = "name";
})(Attri || (Attri = {}));
class MyCharacters extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/Characterscard/Characterscard.css">
                <section>
                    <img src="${this.image}">
                    <h3>${this.name}</h3>
                </section>
                `;
        }
    }
}
customElements.define("my-character", MyCharacters);
export default MyCharacters;
