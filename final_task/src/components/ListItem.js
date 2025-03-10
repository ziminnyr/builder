import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      "id": Date.now(),
      "date": new Date,
      "amount": props.amount
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    
    const day = String(this.state.date.getDate()).padStart(2, '0'); // Получаем день и добавляем ведущий ноль
    const month = String(this.state.date.getMonth() + 1).padStart(2, '0'); // Получаем месяц (прибавляем 1) и добавляем ведущий ноль
    const year = this.state.date.getFullYear(); // Получаем год
    const donateDate = `${day}/${month}/${year}`;

    const hours = String(this.state.date.getHours()).padStart(2, '0');   // Получаем часы и добавляем ведущий ноль
    const minutes = String(this.state.date.getMinutes()).padStart(2, '0'); // Получаем минуты и добавляем ведущий ноль
    const seconds = String(this.state.date.getSeconds()).padStart(2, '0'); // Получаем секунды и добавляем ведущий ноль
    const donateTime = `${hours}:${minutes}:${seconds}` ;
    this.$rootElement.innerHTML = `${donateDate}, ${donateTime} - <b>$${this.props.amount}</b>`;

    // ...
  }
}
