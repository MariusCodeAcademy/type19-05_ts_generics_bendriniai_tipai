// parsiusti ir issaugoti globaliam masyve 20 todos
// is https://jsonplaceholder.typicode.com/todos

// aprasyti tipa arba interface

// atspausdinti todos po to kai gavom duomenis
const tUrl = 'https://jsonplaceholder.typicode.com/todos';
interface TodoObjIf {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

let todos: TodoObjIf[] = [];

console.log('todos ===', todos);

(async (): Promise<void> => {
  const allTodos = await getTodos(tUrl);
  // todos = allTodos.filter((tObj) => tObj.id < 20);
  todos = allTodos.slice(0, 20);
  console.log('todos in async ===', todos);
  renderOneTodo(todos, 5);
})();

function getTodos(url: string): Promise<TodoObjIf[]> {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}

// gaus argumentu visus todos, ir id to todo kuri nupiesti htmle
function renderOneTodo(arr: TodoObjIf[], tId: TodoObjIf['id']) {
  const found = arr.find((tObj) => tObj.id === tId);
  if (found === undefined) return console.warn('objektas nerastas');

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
