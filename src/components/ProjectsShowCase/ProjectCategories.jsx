import CategoryButton from "./CategoryButton";
import { projectsData } from "../../data/projects";
import { useEffect, useState } from "preact/hooks";

export default function ProjectCategories({
  curCategory,
  setCurCategory,
  setForwards,
  timeoutSec,
  setCurPage,
  setCurIndex,
}) {
  const categories = ["All", ...new Set(projectsData.map((pj) => pj.name))];

  return (
    <div class="flex  w-[85vw] max-w-[1160px] gap-3 text-xl pb-5">
      {categories.map((name, i) => {
        return (
          <CategoryButton
            setCurIndex={setCurIndex}
            setCurPage={setCurPage}
            name={name}
            key={name}
            count={projectsData[name]?.imgs?.length}
            curCategory={curCategory}
            setCurCategory={setCurCategory}
            setForwards={setForwards}
            timeoutSec={timeoutSec}
          />
        );
      })}
    </div>
  );
}
