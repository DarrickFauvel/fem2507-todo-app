import Image from "next/image"

export default function CheckboxComponent() {
  return (
    <label className="relative inline-block w-6 h-6 cursor-pointer">
      <input
        className="peer sr-only"
        type="checkbox"
        name="checkbox-input"
        id="checkbox-input"
      />
      <div className="group w-full h-full rounded-full flex justify-center items-center border-1 border-[#393A4B] peer-checked:border-[#979797] peer-checked:bg-linear-to-br from-[#55DDFF] to-[#C058F3]">
        <Image
          className="w-[11px] h-[9px] opacity-0 group-peer-checked:opacity-100 pointer-events-none"
          src="/images/icon-check.svg"
          width={11}
          height={9}
          alt="checked"
        />
      </div>
    </label>
  )
}
