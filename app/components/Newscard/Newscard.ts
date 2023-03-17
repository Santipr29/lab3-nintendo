export enum Attr {
    "image" = "image",
    "date" = "date",
    "name" = "name",
}

class MyNewscard extends HTMLElement {
    image?: string;
    date?: string;
    name?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attr, null> = {
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
    
    attributeChangedCallback(
        propName: Attr,
        _: string | undefined,
        newValue: string | undefined
        ) {
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
                    <h4>${this.name}</h4>
                    <a>Read more</a>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-newscard", MyNewscard);
export default MyNewscard;