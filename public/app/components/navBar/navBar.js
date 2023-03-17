class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/navBar/navBar.css">
            <section class="main">
            <section class="top">
                <section class="search">
                    <img src="data:image/png;base64,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" class="logo">
                    <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" class="loop">
                    <input type="text" placeholder="Search games, hardware, news, etc">
                    <p>All categories</p>
                </section>
                <section class="right">
                    <button class="topr">
                        <img src="https://cdn-icons-png.flaticon.com/512/3246/3246789.png" class="imgb">
                        <h3>Support</h3>
                    </button>
                    <button class="topr">
                        <img src="https://cdn-icons-png.flaticon.com/512/4225/4225964.png" class="imgb">
                        <h3>Wish List</h3>
                    </button>
                    <button class="topr">
                        <img src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png" class="imgb">
                        <h3>Cart</h3>
                    </button>
                    <button class="topr">
                        <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" class="imgb">
                        <h3>Log in / Sign up</h3>
                    </button>
                </section>
            </section>
            
            <section class="botton">
                <button class="bottonb">
                    <img src="https://cdn-icons-png.flaticon.com/128/726/726569.png" class="imgb">
                    <h3>My Nintendo Store</h3>
                </button>
                <button class="bottonb">
                    <img src="https://cdn-icons-png.flaticon.com/512/7235/7235310.png" class="imgb">
                    <h3>Games</h3>
                </button>
                <button class="bottonb">
                    <img src="https://cdn-icons-png.flaticon.com/128/871/871510.png" class="imgb">
                    <h3>Nintendo Switch</h3>
                </button>
                <button class="bottonb">
                    <img src="https://cdn-icons-png.flaticon.com/128/21/21781.png" class="imgb">
                    <h3>News Y Events</h3>
                </button>
                <button class="bottonb">
                    <img src="https://cdn-icons-png.flaticon.com/512/2893/2893811.png" class="imgb">
                    <h3>Play Nintendo</h3>
                </button>
            </section>
            </section>
            `;
        }
    }
}
customElements.define("my-bar", NavBar);
export default NavBar;
