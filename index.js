import { html, css, LitElement } from 'lit-element';

export class ProgressBar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .progress-bar-container {
        display: block;
        background-color: #000;
        color: white;
        margin: 1rem 0;
        height: 2rem;
        position: relative;
        z-index: -1000;
      }
      .progress-bar-container>p {
        color: var(--progress-bar-text-color, red);
        margin: 0;
        position: absolute;
        z-index: 1001;
        top: .4rem;
        left: .8rem;
      }
      .progress-bar {
        background-color: var(--progress-bar-color, darkseagreen);;
        height: 1.4rem;
        width: 97%;
        position: absolute;
        z-index: 1000;
        top: .3rem;
        left: .3rem;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      text: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.text = "Loading...";
    this.counter = 5;

  }
  firstUpdated() {
    let pb = this.shadowRoot.querySelector(".progress-bar");
    pb.style.width = this.counter + '%';
  }

  updated(changedProperties) {
    if(changedProperties && changedProperties.get("counter") !== undefined) {
        let counterVal = changedProperties.get("counter");
        if(counterVal >= 5 && counterVal <= 97) {
            let pb = this.shadowRoot.querySelector(".progress-bar");
            pb.style.width = this.counter + '%';
        }
    }
  }

  render() {
    return html`
      <div class="progress-bar-container">
        <p>${this.text}</p>
        <div class="progress-bar"> </div>
      </div>
    `;
  }
}

window.customElements.define('progress-bar', ProgressBar);
