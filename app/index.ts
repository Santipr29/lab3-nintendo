import "./components/index.js"
import Gamesdata from "./Gamesdata.js";
import Bestgamesdata from "./Bestgamesdata.js";
import Charactersdata from "./Charactersdata.js";
import Newsgamesdata from "./Gamesnewsdata.js";
import Featureddata from "./Featureddata.js";
import Sectionsdata from "./Sectionsdata.js";
import MyGames, { Attribute } from "./components/Gamescard/Gamescard.js";
import MyCharacters, { Attri } from "./components/Characterscard/Characterscard.js";
import MyNewscard, { Attr } from "./components/Newscard/Newscard.js";
import MyFeaturedcard, { Att } from "./components/Featuredcard/Featuredcard.js";
import MySections, { Attrib } from "./components/Sections/Sections.js";

class AppContainer extends HTMLElement {

    section: MySections[] = []
    featured: MyFeaturedcard[] = []
    news: MyNewscard[] = []
    character: MyCharacters[] = []
    best: MyGames[] = [];
    games: MyGames[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        Sectionsdata.forEach((section) => {
            const sectionCard = this.ownerDocument.createElement(
                "my-sections"
                ) as MySections;
                sectionCard.setAttribute(Attrib.name, section.name);
                sectionCard.setAttribute(Attrib.image, section.image);
                sectionCard.setAttribute(Attrib.description, section.description);
                sectionCard.setAttribute(Attrib.buttontext, section.buttontext);
                this.section.push(sectionCard);
            });

        Featureddata.forEach((feat) => {
            const featuredCard = this.ownerDocument.createElement(
                "my-featuredcard"
                ) as MyFeaturedcard;
                featuredCard.setAttribute(Att.image, feat.image);
                featuredCard.setAttribute(Att.name, feat.name);
                featuredCard.setAttribute(Att.plataform, feat.plataform);
                this.featured.push(featuredCard);
            });

        Newsgamesdata.forEach((newss) => {
            const newsCard = this.ownerDocument.createElement(
                "my-newscard"
                ) as MyNewscard;
                newsCard.setAttribute(Attr.image, newss.image);
                newsCard.setAttribute(Attr.date, newss.date);
                newsCard.setAttribute(Attr.name, newss.name);
                this.news.push(newsCard);
            });
    
        Charactersdata.forEach((characters) => {
            const characterCard = this.ownerDocument.createElement(
                "my-character"
                ) as MyCharacters;
                characterCard.setAttribute(Attri.image, characters.image);
                characterCard.setAttribute(Attri.name, characters.name);
                this.character.push(characterCard);
            });

        Bestgamesdata.forEach((bests) => {
            const bestgameCard = this.ownerDocument.createElement(
                "my-games"
                ) as MyGames;
                bestgameCard.setAttribute(Attribute.image, bests.image);
                bestgameCard.setAttribute(Attribute.name, bests.name);
                bestgameCard.setAttribute(Attribute.date, bests.date);
                bestgameCard.setAttribute(Attribute.price, String(bests.price));
                bestgameCard.setAttribute(Attribute.plataform, bests.plataform);
                this.best.push(bestgameCard);
            });  

        Gamesdata.forEach((game) => {
            const gameCard = this.ownerDocument.createElement(
                "my-games"
                ) as MyGames;
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
            if (this.shadowRoot) {

                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                `;

                this.shadowRoot.innerHTML += `
                <my-bar></my-bar>
                `;

                this.shadowRoot.innerHTML += `
                <section class="main">
                <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/ncom/en_US/merchandising/center-stage-banner/bayonetta-origins/3600x1300_BayoOrigins_centerstage_desktop">
                <section class="description">
                    <h2>Pre-order digitally today, play on 3/17</h2>
                    <button>
                    <h3>Pre-order now</h3>
                    </button>
                </section>
                </section>
                `;
                
                this.shadowRoot?.appendChild(this.section[0]);
                ;

                this.featured.forEach((feat) => {
                    this.shadowRoot?.appendChild(feat);
                });

                this.shadowRoot?.appendChild(this.section[1]);
                ;

                this.shadowRoot?.appendChild(this.section[2]);
                ;

                this.shadowRoot.innerHTML += `
                <h2 class="tittle">News</h2>
                `;

                this.news.forEach((newss) => {
                    this.shadowRoot?.appendChild(newss);
                });

                this.shadowRoot.innerHTML += `
                <button class="articles">
                <h2>See all news articles</h2>
                </button>
                `;

                this.shadowRoot.innerHTML += `
                <h2 class="tittle">Characters</h2>
                `;

                this.character.forEach((characters) => {
                    this.shadowRoot?.appendChild(characters);
                });

                this.shadowRoot.innerHTML += `
                <section class="tittle">
                <h2>Digital best sellers</h2>
                <a>See full list</a>
                </section>
                `;

                this.games.forEach((game) => {
                    this.shadowRoot?.appendChild(game);
                });

                this.shadowRoot.innerHTML += `
                <section class="tittle">
                <h2>Digital new releases</h2>
                <a>See full list</a>
                </section>
                `;

                this.best.forEach((bests) => {
                    this.shadowRoot?.appendChild(bests);
                });
            }
        }
    }
    
customElements.define("app-container", AppContainer);
