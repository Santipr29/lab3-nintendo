import "./components/index.js";
import Gamesdata from "./Gamesdata.js";
import Bestgamesdata from "./Bestgamesdata.js";
import Charactersdata from "./Charactersdata.js";
import Newsgamesdata from "./Gamesnewsdata.js";
import Featureddata from "./Featureddata.js";
import Sectionsdata from "./Sectionsdata.js";
import { Attribute } from "./components/Gamescard/Gamescard.js";
import { Attri } from "./components/Characterscard/Characterscard.js";
import { Attr } from "./components/Newscard/Newscard.js";
import { Att } from "./components/Featuredcard/Featuredcard.js";
import { Attrib } from "./components/Sections/Sections.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.section = [];
        this.featured = [];
        this.news = [];
        this.character = [];
        this.best = [];
        this.games = [];
        this.attachShadow({ mode: "open" });
        Sectionsdata.forEach((section) => {
            const sectionCard = this.ownerDocument.createElement("my-sections");
            sectionCard.setAttribute(Attrib.name, section.name);
            sectionCard.setAttribute(Attrib.image, section.image);
            sectionCard.setAttribute(Attrib.description, section.description);
            sectionCard.setAttribute(Attrib.buttontext, section.buttontext);
            this.section.push(sectionCard);
        });
        Featureddata.forEach((feat) => {
            const featuredCard = this.ownerDocument.createElement("my-featuredcard");
            featuredCard.setAttribute(Att.image, feat.image);
            featuredCard.setAttribute(Att.name, feat.name);
            featuredCard.setAttribute(Att.plataform, feat.plataform);
            this.featured.push(featuredCard);
        });
        Newsgamesdata.forEach((newss) => {
            const newsCard = this.ownerDocument.createElement("my-newscard");
            newsCard.setAttribute(Attr.image, newss.image);
            newsCard.setAttribute(Attr.date, newss.date);
            newsCard.setAttribute(Attr.name, newss.name);
            this.news.push(newsCard);
        });
        Charactersdata.forEach((characters) => {
            const characterCard = this.ownerDocument.createElement("my-character");
            characterCard.setAttribute(Attri.image, characters.image);
            characterCard.setAttribute(Attri.name, characters.name);
            this.character.push(characterCard);
        });
        Bestgamesdata.forEach((bests) => {
            const bestgameCard = this.ownerDocument.createElement("my-games");
            bestgameCard.setAttribute(Attribute.image, bests.image);
            bestgameCard.setAttribute(Attribute.name, bests.name);
            bestgameCard.setAttribute(Attribute.date, bests.date);
            bestgameCard.setAttribute(Attribute.price, String(bests.price));
            bestgameCard.setAttribute(Attribute.plataform, bests.plataform);
            this.best.push(bestgameCard);
        });
        Gamesdata.forEach((game) => {
            const gameCard = this.ownerDocument.createElement("my-games");
            gameCard.setAttribute(Attribute.image, game.image);
            gameCard.setAttribute(Attribute.name, game.name);
            gameCard.setAttribute(Attribute.date, game.date);
            gameCard.setAttribute(Attribute.price, String(game.price));
            gameCard.setAttribute(Attribute.plataform, game.plataform);
            this.games.push(gameCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b, _c;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
                <my-bar></my-bar>
                `;
            this.shadowRoot.innerHTML += `
                <section>
                <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/ncom/en_US/merchandising/center-stage-banner/bayonetta-origins/3600x1300_BayoOrigins_centerstage_desktop">
                <section>
                    <h2>Pre-order digitally today, play on 3/17</h2>
                    <button>
                    <h3>Pre-order now</h3>
                    </button>
                </section>
                </section>
                `;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.section[0]);
            ;
            this.featured.forEach((feat) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(feat);
            });
            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(this.section[1]);
            ;
            (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(this.section[2]);
            ;
            this.shadowRoot.innerHTML += `
                <h2>News</h2>
                `;
            this.news.forEach((newss) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(newss);
            });
            this.shadowRoot.innerHTML += `
                <button>
                <h2>See all news articles</h2>
                </button>
                `;
            this.shadowRoot.innerHTML += `
                <h2>Characters</h2>
                `;
            this.character.forEach((characters) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(characters);
            });
            this.shadowRoot.innerHTML += `
                <section>
                <h2>Digital best sellers</h2>
                <a>See full list</a>
                </section>
                `;
            this.games.forEach((game) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(game);
            });
            this.shadowRoot.innerHTML += `
                <section>
                <h2>Digital new releases</h2>
                <a>See full list</a>
                </section>
                `;
            this.best.forEach((bests) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(bests);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
