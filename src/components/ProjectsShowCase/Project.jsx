import { useEffect } from "preact/hooks";

export default function Project({
  src,
  customStyles,
  mine,
  index,
  curPage,
  forwards,
  hoveredPj,
  setHoveredPj,
  setCurImgIndex,
  type,
}) {
  const isHovered = hoveredPj === index;
  return (
    <button
      class={`flex-1  transition-all ${isHovered ? "scale-105" : !isHovered && hoveredPj !== -1 ? "scale-95 blur-sm" : ""} ${type === "desktop" ? "lg:flex hidden" : "flex lg:hidden h-[250px]"}`}
      onMouseOver={() => setHoveredPj(index)}
      onMouseLeave={() => setHoveredPj(-1)}
      onClick={() => setCurImgIndex(index + (curPage - 1) * (type === 'desktop' ? 9 : 3))}
    >
      <img
        loading="lazy"
        src={src}
        alt={mine}
        class={` object-cover h-full w-full lg:h-[300px] ${customStyles} transition-all ${forwards ? "opacity-0 blur-xl" : "opacity-1 blur-none"}`}
        style={{
          animation: forwards ? `unBlur .8s forwards` : "inBlur .8s forwards",
          animationDelay: forwards
            ? `${0.3 + Number(`0.${index}`)}s`
            : `${1.2 - Number(`0.${index}`)}s`,
        }}
      />
    </button>
  );
}
