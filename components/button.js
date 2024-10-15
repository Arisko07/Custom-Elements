class CustomButton extends HTMLElement {
    constructor() {
      super();
      
      const shadow = this.attachShadow({ mode: 'open' });      
      const buttonColor = this.getAttribute("data-color");
      const buttonText = this.getAttribute("data-text");
      const buttonBG = this.getAttribute("data-bg")?.toLocaleLowerCase() === 'filled' ? 'filled' : '';
      const bgColor = buttonBG === 'filled' ? this.getAttribute("data-color") : 'white';
      const textColor = buttonBG == 'filled' ? 'white' : buttonColor;
      let buttonSize = this.getAttribute("data-size");

      const container = document.createElement('button');
      container.className = 'custom-button';
      container.textContent = buttonText;
      switch(buttonSize) {
        case 'lg':
            buttonSize = '250px';
          break;
        case 'md':
            buttonSize = '200px';
          break;
        default:
            buttonSize = '150px';
      }
      container.setAttribute("style", `background-color: ${bgColor}; border-color: ${buttonColor}; width: ${buttonSize}; color: ${textColor}`);
      
      shadow.appendChild(container);
  
      const style = document.createElement('link');
      style.setAttribute('rel', 'stylesheet');
      style.setAttribute('href', 'css/components/button.css');
      shadow.appendChild(style);
    }
  }
  
  customElements.define('custom-button', CustomButton);