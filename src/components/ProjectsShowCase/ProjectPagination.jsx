const ProjectPagination = ({
  setCurIndex,
  projectsLength,
  curPage,
  setCurPage,
  type
}) => {
  const maxPage = type === "desktop" ? Math.ceil(projectsLength / 9) : Math.ceil(projectsLength / 3);

  return (
    <div class={`h-80 flex justify-center items-center gap-5 ${type === "mobile" ? "lg:hidden flex" : "hidden lg:flex"}`}>
      <button
        class={`bg-secondary border-[2px] w-20  grid place-content-center text-center h-20 border-primary transition-colors text-primary ${curPage !== 1 ? "hover:bg-primary hover:text-black" : "opacity-50"} `}
        disabled={curPage === 1}
        onClick={() => {
          if (curPage === 1) return;

          setCurPage((cur) => cur - 1);
          setCurIndex((cur) => cur - (type === 'desktop' ? 9 : 3));
        }}
      >
        <i class="bi bi-arrow-left text-4xl  flex items-center"></i>
      </button>

      <p class="text-black text-3xl">
        {" "}
        <span>{curPage}</span> / <span>{maxPage}</span>
      </p>

      <button
        class={`bg-secondary border-[2px] w-20  grid place-content-center text-center h-20 border-primary transition-colors text-primary ${curPage !== maxPage ? "hover:bg-primary hover:text-black" : "opacity-50"} `}
        disabled={curPage === maxPage}
        onClick={() => {
          if (curPage === maxPage) return;

          setCurPage((cur) => cur + 1);
          setCurIndex((cur) => cur + (type === "desktop" ? 9 : 3));
        }}
      >
        <i class="bi bi-arrow-right text-4xl  flex items-center"></i>
      </button>
    </div>
  );
};

export default ProjectPagination;
