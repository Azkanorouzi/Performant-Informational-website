import { useEffect, useState } from "preact/hooks";
import ProjectsDesktop from "./ProjectsDesktop";
import ProjectCategories from "./ProjectCategories";
import PaginationDesktop from "./PaginationDesktop";
import { projectsData } from "../../data/projects";

export default function ProjectsContent() {
  const [curCategory, setCurCategory] = useState("All");
  const [curIndex, setCurIndex] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [curPage, setCurPage] = useState(1);
  const max = 9;
  const timeoutSec = 1500;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setForwards((cur) => (!cur ? true : cur));
    }, timeoutSec);

    return () => {
      clearTimeout(timeout);
    };
  }, [forwards]);

  return (
    <section class="bg-secondary text-sixth flex flex-col items-center">
      <div class="flex flex-col gap-2  pt-32   w-[85vw] max-w-[1160px] py-9">
        <h2 class=" text-primary text-xl font-oswald">our portfolio</h2>
        <hr class="w-44 text-primary"></hr>
        <h3 class="font-oswaldBold uppercase text-4xl ">
          You can explore our latest
          <br />
          case studies
        </h3>
      </div>
      <ProjectCategories
        setCurIndex={setCurIndex}
        setCurPage={setCurPage}
        curCategory={curCategory}
        setCurCategory={setCurCategory}
        setForwards={setForwards}
        timeoutSec={timeoutSec}
      />

      <ProjectsDesktop
        curPage={curPage}
        curCategory={curCategory}
        curIndex={curIndex}
        max={max}
        forwards={forwards}
      />

      <PaginationDesktop
        curIndex={curIndex}
        setCurIndex={setCurIndex}
        setCurPage={setCurPage}
        curPage={curPage}
        projectsLength={
          projectsData.filter((pj) => {
            return curCategory === "All" || curCategory === pj.name;
          }).length
        }
      />
    </section>
  );
}
