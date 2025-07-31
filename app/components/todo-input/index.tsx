import CheckboxComponent from "../todo-item/checkbox"
import TextInputComponent from "../text-input.tsx"

export default function TodoInputComponent() {
  return (
    <article className="flex items-center gap-2 bg-[#25273D] border-[#393A4B] border-[1px] px-6 py-5 rounded-[5px]">
      <div className="w-6 h6 rounded-full border-1 border-[#393A4B]">
        &nbsp;
      </div>

      <TextInputComponent />
    </article>
  )
}
