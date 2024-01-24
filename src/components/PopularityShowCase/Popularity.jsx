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
  }, [initNum, setInterval])
  return (
    <div class="flex  flex-col">
      <strong class="text-8xl text-forth">
        {initNum}
        {strText}
      </strong>
      <p class="text-secondary text-3xl">{title}</p>
    </div>
  )
}
