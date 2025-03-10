import { Component } from '../core/Component';

export class Form extends Component {

  setup(props) {
    this.state = {
      "amount": '',
    };
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    // ...
    const $label = document.createElement('label');
    $label.className='donate-form__input-label';
    $label.textContent = "Введите сумму в $";

    const $input = document.createElement('input');
    $input.className='donate-form__donate-input';
    $input.name = 'amount';
    $input.type = 'number';
    $input.max = '100';
    $input.min = '1';
    $input.setAttribute('required','')
    $label.appendChild($input);

    const $button = document.createElement('button');
    $button.className = 'donate-form__submit-button';
    $button.type = 'submit';
    $button.textContent = "Задонатить";
    $button.setAttribute('disabled', '');

    this.$rootElement.append($label, $button);

    this.$input = $input;
    this.$button = $button;

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleInput(event) {
    // ...
    this.state.amount = event.target.value;
    console.log(this.isValid);
    
    this.isValid ? this.$button.disabled = false : this.$button.disabled = true;
  }

  handleSubmit(event) {
    // ...
    event.preventDefault();
    if (this.isValid) {
      console.log(this.state.amount);
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = '';
      this.$input.value = '';

    }
  }

  get isValid() {
    return (this.state.amount >= 1 && this.state.amount<=100) ? true : false
  }
}
