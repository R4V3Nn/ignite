import {
    EventEmitter
} from 'events'
import dispatcher from '../dispatcher'

// flux Stores / Хранилища — контейнеры для состояния приложения и логики в обработчиках, зарегистрированных в Диспетчере

class AppStore extends EventEmitter {
    constructor() {
        super()

        this.result = 0;
        this.num1 = '';
        this.num2 = '';

    }
    add() {
        this.result = +this.num1 + +this.num2
        return this.result
    }
    sub() {
        this.result = +this.num1 - +this.num2
        return this.result
    }
    mul() {
        this.result = +this.num1 * +this.num2
        return this.result
    }
    div() {
        this.result = +this.num1 / +this.num2
        return this.result
    }

    changeNum1(val) {
        this.num1 = val;
        return this.num1;
    }

    changeNum2(val) {
        this.num2 = val;
        return this.num2;
    }
    getResult() {
        return this.result
    }




    // обработчик actions
    handleActions(action) {
        var emitter;
        switch (action.type) {
            case "ADD":
                {
                    this.emit('add');
                    break;
                }

            case "SUB":
                {
                    this.emit('sub');
                    break;
                }

            case "MUL":
                {
                    this.emit('mul');
                    break;
                }
            case "DIV":
                {
                    this.emit('div');
                    break;
                }
            case "NUM1":
                {

                    this.emit('num1');
                    break;
                }
            case "NUM2":
                {
                    this.emit('num2');
                    break;
                }
        }
    }
}

const appStore = new AppStore;
// привязка handleActions к классу appStore позволяет ссылаться на него с помощью this
dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;