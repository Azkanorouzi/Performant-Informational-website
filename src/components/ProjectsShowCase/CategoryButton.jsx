import { useEffect, useState } from "preact/hooks";

export default function CategoryButton({
  name,
  count,
  curCategory,
  setCurCategory,
  setForwards,
  animationDuration,
  setCurPage,
  setCurIndex,
  timeoutSec,
}) {
  const [clicked, setClicked] = useState(false);
  // const clickHandler = function() {
  //   setForwards(forwards => !forwards)
  //   setTimeout(() => {

  //   }, animationDuration)
  // }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (clicked) setCurCategory(name);

      setCurPage(1);
      setCurIndex(0);
      setClicked(false);
    }, timeoutSec);

    return () => {
      clearTimeout(timeout);
    };
  }, [clicked]);

  return (
    <button
      class={`px-5 pt-3 relative ${curCategory === name && "text-primary"} hover:scale-110 transition-transform `}
      onClick={() => {
        setClicked(true);
        setForwards(() => false);
      }}
    >
      <span>{name}</span>
      <span
        class={`absolute top-0 right-0 ${curCategory === name && "text-primary"}`}
      >
        {count}
      </span>
    </button>
  );
}
