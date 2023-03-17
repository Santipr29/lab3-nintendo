export var Attr;
(function (Attr) {
    Attr["image"] = "image";
    Attr["date"] = "date";
    Attr["name"] = "name";
})(Attr || (Attr = {}));
class MyNewscard extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            date: null,
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
                <link rel="stylesheet" href="./app/components/Newscard/Newscard.css">
                <section>
                    <img src="${this.image}">
                    <p>${this.date}</p>
                    <h2>${this.name}</h2>
                    <a>Read more</a>
                </section>
                `;
        }
    }
}
customElements.define("my-newscard", MyNewscard);
export default MyNewscard;
