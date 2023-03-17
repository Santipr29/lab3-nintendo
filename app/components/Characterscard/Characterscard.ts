export enum Attri {
    "image" = "image",
    "name" = "name",
}

class MyCharacters extends HTMLElement {
    image?: string;
    name?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attri, null> = {
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
    
    attributeChangedCallback(
        propName: Attri,
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