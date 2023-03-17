export var Att;
(function (Att) {
    Att["image"] = "image";
    Att["name"] = "name";
    Att["plataform"] = "plataform";
})(Att || (Att = {}));
class MyFeaturedcard extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            name: null,
            plataform: null,
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
                <link rel="stylesheet" href="./app/components/Featuredcard/Featuredcard.css">
                <section>
                    <img src="${this.image}">
                    <h2>${this.name}</h2>
                    <p>${this.plataform}</p>
                </section>
                `;
        }
    }
}
customElements.define("my-featuredcard", MyFeaturedcard);
export default MyFeaturedcard;
