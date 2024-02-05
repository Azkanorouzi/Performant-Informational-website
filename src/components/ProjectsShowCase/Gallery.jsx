import { createContext } from 'preact'
import { useContext, useState } from 'preact/hooks'
import img1 from '../../assets/portfolio-s-10-1170x690.jpg'
import img2 from '../../assets/portfolio-s-11-1170x690.jpg'
import img3 from '../../assets/portfolio-s-12-1170x690.jpg'

const GalleryContext = createContext({})

export function GalleryFull() {
  return (
    <Gallery title="Tabriz" subTitle="Gold Mine" hasPagination={true}>
      <Gallery.Container customStyles={{}}>
        <Gallery.Header>
          <Gallery.Title />
          <Gallery.Pagination max={2} min={-1} />
        </Gallery.Header>
        <Gallery.Slider>
          <Gallery.Image
            name={'img1'}
            src={img1.src}
            imgIndex={0}
            customStyles={{ zIndex: 1 }}
          />
          <Gallery.Image
            name={'img2'}
            src={img2.src}
            imgIndex={1}
            customStyles={{ zIndex: 1 }}
          />
          <Gallery.Image
            name={'img3'}
            src={img3.src}
            imgIndex={2}
            customStyles={{ zIndex: 1 }}
          />
        </Gallery.Slider>
      </Gallery.Container>
    </Gallery>
  )
}
export function GalleryFullWithoutSlider() {}

export default function Gallery({
  title = '',
  hasPagination = false,
  subTitle = '',
  children,
}) {
  const [index, setIndex] = useState(0)
  function goNext(max) {
    setIndex((index) => {
      if (index >= max - 1) return index
      return index + 1
    })
  }
  function goBack(min) {
    setIndex((index) => {
      if (index <= min) return min
      return index - 1
    })
  }
  return (
    <GalleryContext.Provider
      value={{
        goBack,
        goNext,
        index,
        setIndex,
        title,
        hasPagination,
        subTitle,
      }}
    >
      {children}
    </GalleryContext.Provider>
  )
}
function Container({ children, customStyles = {} }) {
  return (
    <div
      className="flex flex-col gap-16 justify-center items-center "
      style={{ minWidth: '100vw', ...customStyles }}
    >
      {children}
    </div>
  )
}
function Header({ children, customStyles }) {
  return (
    <article
      class={`flex justify-between items-end w-[70vw] max-w-[1000px] `}
      style={customStyles}
    >
      {children}
    </article>
  )
}
function Title({ children = <></>, customStyles = {} }) {
  const { title = '', subTitle = '' } = useContext(GalleryContext)

  return (
    <div class="text-secondary flex flex-col gap-2 " style={customStyles}>
      {title.length ? (
        <>
          {subTitle.length ? (
            <div>
              <h2 class=" text-secondary text-2xl font-TekoLight">
                PROJECT GALLERY
              </h2>
              <hr class="w-44 text-secondary"></hr>
            </div>
          ) : (
            <> </>
          )}
          <div>
            <h3 class="text-6xl uppercase">{title}</h3>{' '}
            <h4 class="text-6xl uppercase -mt-4">{subTitle}</h4>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  )
}
function Pagination({ children = <></>, customStyles = {}, max, min }) {
  const { goNext, goBack, hasPagination } = useContext(GalleryContext)
  return hasPagination ? (
    <div class="flex gap-2" style={customStyles}>
      <button
        class="border border-secondary w-12 h-12 text-xl flex justify-center items-center "
        onClick={() => goBack(min)}
      >
        <span class=" h-6">&larr;</span>
      </button>
      <button
        class="border border-secondary w-12 h-12 text-xl flex justify-center items-center"
        onClick={() => goNext(max)}
      >
        <span class=" h-6">&rarr;</span>
      </button>
    </div>
  ) : (
    <div class="flex gap-2">{children}</div>
  )
}

function Slider({ children }) {
  return <div class="flex gap-20 w-[300vw] justify-center ">{children}</div>
}
function Image({ name, src, imgIndex = 0, customStyles = {} }) {
  const { index = 0 } = useContext(GalleryContext)

  return (
    <figure
      class="relative transition-transform"
      style={{
        transform: `translate(${-100 * index}%) ${
          index == imgIndex - 1 ? 'scale(1.05)' : ''
        }`,
        ...customStyles,
      }}
    >
      <img src={src} alt={name} class="w-[1000px]" />
      <figcaption class="uppercase absolute bottom-0 left-0 right-0 px-6 backdrop-blur-md py-7">
        <p class="text-lg">Innovation | Welding</p>
        <strong class="text-4xl">Wire handle</strong>
        <div class="absolute bg-primary right-0 bottom-[110px] w-3 h-3"></div>
      </figcaption>
    </figure>
  )
}

Gallery.Container = Container
Gallery.Slider = Slider
Gallery.Pagination = Pagination
Gallery.Title = Title
Gallery.Header = Header
Gallery.Image = Image
// <><p class="text-lg border-b-2 border-secondary">Project gallery</p>
//           <h2 class="text-5xl uppercase">
//             Tabriz
//             <br />
//             Gold Mine
//           </h2></>
