import { useEffect, useState } from 'preact/hooks'
import _ from 'lodash'
import { collabs } from '../../data/Collaborators'
// if there's 9 logos and five logos at a time then there's 4 turn of the logo changing
const collabsArr = _.shuffle(collabs)
export default function InfiniteScrollIcons() {
  const [index, setIndex] = useState(0)
  const maxLogos = 4
  // useEffect for controlling the index
  useEffect(() => {
    const callBack = () => {
      if (index == collabsArr.length - maxLogos) setIndex(0)
      setIndex((i) => i + 1)
    }
    const intervalId = setInterval(callBack, 5000)
    return () => clearInterval(intervalId)
  }, [index, setIndex, maxLogos, collabsArr])

  return (
    <div class="w-full pt-16 flex flex-nowrap absolute bottom-0 right-0 left-0 pb-10  justify-center">
      <ul class="flex items-center justify-center gap-12 md:gap-28 lg:gap-36 px-5 md:px-0 w-[100%] md:w-[500px] lg:w-[1000px]  overflow-visible">
        {collabsArr.slice(index, index + 4).map((collab, i) => {
          if (i >= maxLogos) return
          return (
            <li
              key={Math.random()}
              style={{
                animation: '4.5s fadeIn forwards',
                filter: 'blur(10px)',
                opacity: '0',
                animationDelay: `${
                  i === 4
                    ? '0s'
                    : i === 3
                    ? '.2s'
                    : i === 2
                    ? '.4s'
                    : i === 1
                    ? '.6s'
                    : '.8s'
                }`,
              }}
              class={`${i === 3 ? 'hidden lg:block' : ''}`}
            >
              <img
                src={collab.imgSrc}
                alt={collab.name}
                width={120}
                height={120}
                loading={"lazy"}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
