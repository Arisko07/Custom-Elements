class Card extends HTMLElement {
    constructor() {
      super();
      
      const shadow = this.attachShadow({ mode: 'open' });
      
      const container = document.createElement('article');
      container.className = 'card-container';
  
      const imageContainer = document.createElement('figure');
      imageContainer.className = 'figure-container';
      const cardImg = document.createElement('img');
      cardImg.setAttribute('src', this.getAttribute("data-image"))
      imageContainer.appendChild(cardImg);

      const cardContent = document.createElement('div');
      cardContent.className = 'card-content';

      const cardTitle = document.createElement('h3');
      cardTitle.className = 'card-title';
      cardTitle.textContent = this.getAttribute("data-title");

      const cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.textContent = this.getAttribute("data-text");

      cardContent.appendChild(cardTitle);
      cardContent.appendChild(cardText);
      container.appendChild(imageContainer);
      container.appendChild(cardContent)
      
      shadow.appendChild(container);
  
      const style = document.createElement('link');
      style.setAttribute('rel', 'stylesheet');
      style.setAttribute('href', 'css/components/card.css');
      shadow.appendChild(style);
    }
  }
  
  customElements.define('custom-card', Card);