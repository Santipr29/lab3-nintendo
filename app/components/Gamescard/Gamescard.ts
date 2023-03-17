export enum Attribute {
    "image" = "image",
    "name" = "name",
    "date" = "date",
    "price" = "price",
    "plataform" = "plataform",
}

class MyGames extends HTMLElement {
    image?: string;
    name?: string;
    date?: string;
    price?: number;
    plataform?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            image: null,
            name: null,
            date: null,
            price: null,
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
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                case Attribute.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/Gamescard/Gamescard.css">
                <section class="main">
                        <img src="${this.image}" class="imgb">
                        <h2>${this.name}</h2>
                        <p>${this.date}</p>
                        <h3>$ ${this.price}</h3>
                        <section class="sub">
                            <h4>${this.plataform}</h4>
                            <button>
                                <img src="https://cdn-icons-png.flaticon.com/512/2832/2832478.png">
                            </button>
                        </section>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-games", MyGames);
export default MyGames;