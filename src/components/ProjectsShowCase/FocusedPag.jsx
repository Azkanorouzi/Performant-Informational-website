const FocusedPagination = ({
  curImgIndex,
  curCategoryPjs,
  curPj,
  setCurImgIndex,
}) => {
  return (
    <figure
      class="z-50 fixed bg-black bg-opacity-50 w-screen h-screen top-0 left-0 bottom-0 flex justify-center items-center backdrop-blur flex-col gap-3 font-oswald "
      onClick={() => setCurImgIndex(-1)}
    >
      <figcaption className={"flex gap-20"}>
        <p className="text-primary text-4xl flex items-center">
          {" "}
          <span>{curImgIndex + 1}</span> /<span>{curCategoryPjs.length}</span>
        </p>
        <p class={`text-3xl text-white flex flex-col`}>
          <span>{curPj?.name}</span>
          <span className={`text-2xl ml-14 text-primary`}>
            {curPj?.location}
          </span>
        </p>
      </figcaption>

      <div className={`flex gap-10 items-center justify-center relative lg:pb-0 pb-28`}>
        <button
          className={`text-secondary flex justify-center items-center w-16 h-16 lg:h-28 lg:w-28 text-4xl rounded-full border-[5px] border-secondary ${curImgIndex !== 0 ? "hover:bg-primary hover:text-black hover:border-primary" : "opacity-50"} absolute lg:static bottom-[5px] left-12`}
          disabled={curImgIndex === 0}
          onClick={(e) => {
            e.stopPropagation();
            setCurImgIndex((cur) => (cur !== 0 ? cur - 1 : cur));
          }}
        >
          <i className={`bi bi-arrow-left flex items-center`}></i>
        </button>
        <img
          src={curPj.img.src}
          alt={curPj.name}
          className={`h-[300px] w-[90vw] lg:w-[600px] lg:h-[600px] object-cover unBlur`}
          key={Math.random()}
        />
        <button
          className={`text-secondary flex justify-center items-center w-16 h-16 lg:h-28 lg:w-28 text-4xl rounded-full border-[5px] border-secondary ${curImgIndex !== curCategoryPjs.length - 1 ? "hover:bg-primary hover:text-black hover:border-primary" : "opacity-50"} absolute lg:static bottom-[5px] right-12`}
          disabled={curImgIndex === curCategoryPjs.length - 1}
          onClick={(e) => {
            e.stopPropagation();
            setCurImgIndex((cur) =>
              cur !== curCategoryPjs.length ? cur + 1 : cur,
            );
          }}
        >
          <i className={`bi bi-arrow-right flex items-center`}></i>
        </button>
      </div>
    </figure>
  );
};

export default FocusedPagination;
