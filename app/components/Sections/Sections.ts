export enum Attrib {
    "name" = "name",
    "image" = "image",
    "description" = "description",
    "buttontext" = "buttontext",
}

class MySections extends HTMLElement {
    name?: string;
    image?: string;
    description?: string;
    buttontext?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attrib, null> = {
            name: null,
            image: null,
            description: null,
            buttontext: null,
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
        propName: Attrib,
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
                <link rel="stylesheet" href="./app/components/Sections/Sections.css">
                <section>
                    <h2>${this.name}</h2>
                    <img src="${this.image}">
                    <section>
                        <h3>${this.description}</h3>
                        <button>
                        <h4>${this.buttontext}</h4>
                        </button>
                    </section>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-sections", MySections);
export default MySections;