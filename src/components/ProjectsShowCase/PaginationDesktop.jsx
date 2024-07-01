const PaginationDesktop = ({
  setCurIndex,
  projectsLength,
  curPage,
  setCurPage,
}) => {
  const maxPage = Math.ceil(projectsLength / 9);

  return (
    <div class="h-80 flex justify-center items-center gap-5">
      <button
        class={`bg-secondary border-[2px] w-20  grid place-content-center text-center h-20 border-primary transition-colors text-primary ${curPage !== 1 ? "hover:bg-primary hover:text-black" : "opacity-50"} `}
        disabled={curPage === 1}
        onClick={() => {
          if (curPage === 1) return;

          setCurPage((cur) => cur - 1);
          setCurIndex((cur) => cur - 9);
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
          setCurIndex((cur) => cur + 9);
        }}
      >
        <i class="bi bi-arrow-right text-4xl  flex items-center"></i>
      </button>
    </div>
  );
};

export default PaginationDesktop;
