"use strict";
const tUrl = 'https://11111jsonplaceholder.typicode.com/todos';
let todos = [];
console.log('todos ===', todos);
(async () => {
    try {
        const allTodos = await getTodos(tUrl);
        todos = allTodos.slice(0, 20);
        console.log('todos in async ===', todos);
        renderOneTodo(todos, 5);
        renderOneTodo(todos, 7);
        renderOneTodo(todos, 9);
    }
    catch (error) {
        console.log('error ===', error);
        console.log('ivyko klaida');
    }
})();
function getTodos(url) {
    return fetch(url).then((resp) => resp.json());
}
function renderOneTodo(arr, tId) {
    const found = arr.find((tObj) => tObj.id === tId);
    if (found === undefined)
        return console.warn('objektas nerastas');
    console.log('found ===', found);
    const divEl = document.createElement('div');
    divEl.className = 'todo';
    const pEl = document.createElement('p');
    pEl.textContent = found.id.toString();
    const h3El = document.createElement('h3');
    h3El.textContent = found.title;
    const pCompleteEl = document.createElement('p');
    pCompleteEl.textContent = found.completed ? 'Job done' : 'Incomplete';
    divEl.append(pEl, h3El, pCompleteEl);
    document.body.append(divEl);
}
//# sourceMappingURL=todos.js.map