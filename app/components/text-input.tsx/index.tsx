"use client"
import { useEffect, useRef } from "react"

export default function TextInputComponent() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleFocus() {
    const input = inputRef.current
    if (input) {
      const length = input.value.length
      input.setSelectionRange(length, length)
    }
  }

  return (
    <input
      className="text-lg leading-[1.5rem] text-[#C8CBE7] px-1 caret-[#3A7CFD] outline-0 mt-1"
      ref={inputRef}
      type="text"
      name="todo-input"
      id="todo-input"
      defaultValue="Currently typing "
      placeholder="Create a new todo...."
      onFocus={handleFocus}
    />
  )
}
