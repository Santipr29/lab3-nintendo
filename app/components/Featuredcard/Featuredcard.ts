export enum Att {
    "image" = "image",
    "name" = "name",
    "plataform" = "plataform",
}

class MyFeaturedcard extends HTMLElement {
    image?: string;
    name?: string;
    plataform?: string;
    
    static get observedAttributes() {
        const attrs: Record<Att, null> = {
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
    
    attributeChangedCallback(
        propName: Att,
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
                <link rel="stylesheet" href="./app/components/Featuredcard/Featuredcard.css">
                <section>
                    <img src="${this.image}">
                    <h3>${this.name}</h3>
                    <p>${this.plataform}</p>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-featuredcard", MyFeaturedcard);
export default MyFeaturedcard;