import { useState } from "preact/hooks";

export default function TextSlider({title, subTitle, textSlides}) {
    const [index, setIndex] = useState(0)
    const curText = textSlides[index];
    const isLastIndex = index + 1 === textSlides.length;
    const isFirstIndex = index === 0;

  return (
    <div class="flex gap-4 flex-col">
    <div class="pl-12">
      <strong class="text-sm font-oswaldLight">{subTitle}</strong>
      <hr class="w-44 text-secondary"></hr>
    </div>
    
    <h3 class="text-4xl font-oswaldBold pl-12 mb-2 ">{title}</h3>
    <div class="flex items-center">
        <button class={isFirstIndex ? "text-primary" : "hover:scale-110 transition-transform"} onClick={() => {
            setIndex(index => index - 1)
        }} disabled={isFirstIndex}>
            <i class="bi bi-caret-left-fill text-3xl drop-shadow-sm"></i>
        </button>
    
        <p class="lg:w-[500px] text-lg px-3 lg:h-[21rem] unBlur font-oswaldLight" key={Math.random()}>{curText}</p>
        <button class={isLastIndex ? "text-primary" : "hover:scale-110 transition-transform"}  onClick={() => {
            setIndex(index => index + 1)
        }} disabled={isLastIndex}>
            <i class="bi bi-caret-right-fill text-3xl drop-shadow-sm "></i>
        </button>
    </div>
    <div class='flex gap-5 justify-center'>
    {textSlides?.map((slide, i) => {
        if (textSlides.length === 1) return;
        return  i === index ? <i class="bi bi-circle-fill"></i> : <i class="bi bi-circle"></i> 
    })}
    </div>
  </div>
  )
}
