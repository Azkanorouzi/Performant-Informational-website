import Project from "./Project";
import { projectsData } from "../../data/projects";
import { useState } from "preact/hooks";
import FocusedPagination from "./FocusedPag";

export default function ProjectsImages({
  curCategory,
  curIndex,
  max,
  forwards,
  curPage,
  type,
}) {
  const [hoveredPj, setHoveredPj] = useState(-1);
  const [curImgIndex, setCurImgIndex] = useState(-1);
  const curCategoryPjs = projectsData.filter(
    (pj) => curCategory === "All" || curCategory === pj.name,
  );

  const curPj = curCategoryPjs.filter((_, index) => curImgIndex === index)[0];
  const curPjs = curCategoryPjs.slice(curIndex, curIndex + max)

  return (
    <article class={`lg:grid-cols-3 gap-5  lg:mx-10 text-secondary z-50 p-2 px-5 h-[${300 * curPjs.length}px] lg:h-[900px]  w-[85vw] max-w-[1200px]  justify-center  ${type === "mobile" ? `grid grid-cols-1 grid-flow-row   grid-rows-${curPjs.length - 1} lg:hidden`: "lg:grid hidden"}`}>
      {curPjs.map((pj, index) => {
        return (
          <>
          <Project
          type="mobile"
            curPage={curPage}
            hoveredPj={hoveredPj}
            setHoveredPj={setHoveredPj}
            src={pj.img.src}
            index={index}
            key={pj.img.src}
            forwards={forwards}
            setCurImgIndex={setCurImgIndex}
            mine={`img${index}`}
          />
             <Project
             type="desktop"
            curPage={curPage}
            hoveredPj={hoveredPj}
            setHoveredPj={setHoveredPj}
            src={pj.img.src}
            index={index}
            key={pj.img.src}
            forwards={forwards}
            setCurImgIndex={setCurImgIndex}
            mine={`img${index}`}
          />
          </>
        );
      })}
      {curImgIndex !== -1 && (
        <FocusedPagination
          curImgIndex={curImgIndex}
          curCategoryPjs={curCategoryPjs}
          curPj={curPj}
          setCurImgIndex={setCurImgIndex}
        />
      )}

      {/* <Project src={img1.src} />
    <Project src={img2.src} />
    <Project src={img3.src} />
    <Project src={img4.src} />
    <Project src={img5.src} customStyles="hidden sm:block" />
    <Project src={img6.src} customStyles="hidden sm:block" />
    <Project src={img7.src} customStyles="hidden sm:block" />
    <Project src={img8.src} customStyles="hidden sm:block" />
    <Project src={img9.src} customStyles="hidden lg:block" /> */}
    </article>
  );
}
