import CheckboxComponent from "./checkbox"
import ItemControlComponent from "./item-control"

export default function TodoItemComponent() {
  return (
    <article className="flex items-center gap-2 bg-[#25273D] border-[#393A4B] border-[1px] px-6 py-5 rounded-[5px]">
      <CheckboxComponent />
      <ItemControlComponent />
    </article>
  )
}
