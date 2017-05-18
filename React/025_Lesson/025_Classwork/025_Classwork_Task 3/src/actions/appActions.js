import dispatcher from '../dispatcher'

// flux Actions / Действия — хелперы, упрощающие передачу данных Диспетчеру

function add1() {
    dispatcher.dispatch({ type: 'ADD'})
}

function sub1() {
    dispatcher.dispatch({ type: 'SUB'})
}

function mul1() {
    dispatcher.dispatch({ type: 'MUL'})
}
function div1() {
    dispatcher.dispatch({ type: 'DIV'})
}
function changeNum1(data) {
    dispatcher.dispatch({ type: 'NUM1'},data)
}
function changeNum2(data) {
    dispatcher.dispatch({ type: 'NUM2'},data)
}

export {add1,sub1,mul1 ,div1,changeNum1,changeNum2}