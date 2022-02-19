const addTodo = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const newTodo = (todo) => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
    list.innerHTML += html;
};
addTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = addTodo.add.value.trim(); // trim removes all the spave before and after the value, if there is some

    if (todo.length >= 2) {
        newTodo(todo);
        addTodo.reset();
    }
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});

const filteredTodos = (term) => {
    const todoItems = Array.from(list.children);

    todoItems
        .filter((item) => !item.textContent.toLowerCase().includes(term))
        .forEach((item) => {
            return item.classList.add("filtered");
        });

    todoItems
        .filter((item) => item.textContent.toLowerCase().includes(term))
        .forEach((item) => {
            return item.classList.remove("filtered");
        });
};

search.addEventListener("keyup", () => {
    const term = search.value.trim().toLowerCase();

    filteredTodos(term);
});
