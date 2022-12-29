export const ButtonClass = ({operador,fn}) => {
  return (
    <button
          type="button"
          className="h-10 w-10 flex justify-center font-bold text-white text-2xl bg-teal-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-teal-500"
          onClick={fn}
        >{operador}</button>
  )
}
