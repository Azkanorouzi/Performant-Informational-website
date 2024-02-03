import { useEffect, useState } from 'preact/hooks'

export default function Popularity({
  numberText,
  strText = '',
  title,
  speed = 500,
}) {
  const [initNum, setInitNum] = useState(0)
  useEffect(() => {
    const intervalCallback = () => {
      if (numberText == initNum) return
      setInitNum((cur) => cur + 1)
    }
    const interval = setInterval(intervalCallback, speed)
    return () => clearInterval(interval)
  }, [initNum, setInterval, numberText, setInitNum])
  return (
    <div class="flex gap-2 justify-center items-center ">
      <strong class=" text-8xl text-primary w-28 text-right">
        {initNum}
        {strText}
      </strong>
      <p class="text-forth text-xl w-10 ">{title}</p>
    </div>
  )
}
