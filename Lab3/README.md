# Lab 3: Component Tree. Hooks

## 🎯 Завдання

Реалізувати **To-Do List** у React (Vite + TypeScript + TailwindCSS), використовуючи принципи:

* компонентного дерева (**Component Tree**);
* передачі даних через **props down / callbacks up**;
* **state colocation** (розміщення стану там, де він потрібен).

---

## ⚙️ Технології

* **React 18 (Vite)**
* **TypeScript**
* **Tailwind CSS**
* **Local State (useState)** — без API та зовнішніх сховищ

---

## 🧱 Структура компонентів

```
src/
 ├── App.tsx
 ├── components/
 │    ├── TodoList.tsx
 │    ├── AddTodoForm.tsx
 │    └── TodoItem.tsx
 ├── index.css
 └── main.tsx
```

---

## 🌲 Component Tree + Data Flow

```
App
│
└── TodoList                     (state: todos[])
      │
      ├── AddTodoForm            (props: onAddTodo)
      │     ↑
      │     └── [Callback up] onAddTodo(task)
      │
      └── TodoItem               (state: isCompleted, props: task, onDelete)
            │
            ├── [Checkbox] toggle isCompleted (local)
            │
            └── [Delete Button] ↑ onDelete(id)
```

📊 **Data Flow Summary**

* **Props ↓** : App → TodoList → TodoItem
* **Callbacks ↑** : AddTodoForm → TodoList, TodoItem → TodoList

---

## 🧩 Стан та пропси

| Компонент     | State                  | Props                                |
| ------------- | ---------------------- | ------------------------------------ |
| `App`         | —                      | —                                    |
| `TodoList`    | `todos: Todo[]`        | —                                    |
| `AddTodoForm` | `task: string`         | `onAddTodo(task: string)`            |
| `TodoItem`    | `isCompleted: boolean` | `task: Todo`, `onDelete(id: number)` |

---

## ✅ Acceptance Criteria

| №  | Критерій                                                  | Статус |
| -- | --------------------------------------------------------- | ------ |
| 1  | User can add a new task via input field and button        | ✅      |
| 2  | User can mark a task as complete (checkbox toggle)        | ✅      |
| 3  | Completed tasks are visually distinct (crossed or grayed) | ✅      |
| 4  | User can remove a task                                    | ✅      |
| 5  | TodoList manages list of todos                            | ✅      |
| 6  | TodoItem manages its own completed state                  | ✅      |
| 7  | App acts as composition root only                         | ✅      |
| 8  | Data flow via props (down) and callbacks (up)             | ✅      |
| 9  | No API requests or external storage                       | ✅      |
| 10 | Component Tree + Data Flow diagram in README              | ✅      |

---

## 🧠 Концепції, що продемонстровані

* **Component Composition** — поділ на малі незалежні компоненти.
* **State Colocation** — стан розміщується ближче до місця використання.
* **Lifting State Up** — передача callback'ів від дочірніх до батьківських компонентів.
* **Unidirectional Data Flow** — дані йдуть зверху вниз, події — знизу вгору.

---

## 💡 Приклад виконання (UI)

* Поле для вводу задачі + кнопка “Add”
* Список задач
* Checkbox для позначення виконання
* Кнопка “Delete” для видалення
* Завершені задачі відображаються перекресленими (Tailwind: `line-through text-gray-400`)

---

## 🧾 Висновок

Даний застосунок демонструє:

* коректну побудову компонентного дерева;
* ефективну організацію станів;
* роботу з подіями React Hooks (`useState`);
* принципи "props down, callbacks up" та “state colocations”.

> Усі вимоги лабораторної виконано. Проєкт готовий до деплою на Vercel.

---

## 🌐 Deployment

1. Ініціалізувати git-репозиторій

   ```bash
   git init
   git add .
   git commit -m "Lab 3: Component Tree. Hooks"
   git branch -M main
   git remote add origin https://github.com/username/lab3-todo.git
   git push -u origin main
   ```

2. Підключити GitHub-репозиторій до **Vercel**

3. Отримати посилання на розгорнутий застосунок
