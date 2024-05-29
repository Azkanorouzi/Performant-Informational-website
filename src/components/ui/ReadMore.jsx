import { useState } from 'preact/hooks'

export default function ReadMore({text, limit, classList}) {
    const [isOpen, setIsOpen] = useState(false);
    const curText = isOpen ? text : text.split(' ').slice(0, limit).join(" ");
  return (
    <p classList={`font-oswaldLight text-lg ${classList}`}>
        {curText}
        <strong role="button" class="text-primary cursor-pointer" aria-expanded={isOpen} onClick={() => {
            
            setIsOpen((isOpen) => !isOpen);
        }}>{isOpen ? " Close" : " Read more ..."}</strong>
    </p>
  )
}
