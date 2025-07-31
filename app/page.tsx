import TodoInputComponent from "./components/todo-input"
import TodoItemComponent from "./components/todo-item"

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <TodoInputComponent />

      <TodoItemComponent />
    </main>
  )
}
