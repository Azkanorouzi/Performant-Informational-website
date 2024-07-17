import { createContext } from 'preact'
import { useContext, useState } from 'preact/hooks'
import img1 from '../../assets/p3.jpg'
import img2 from '../../assets/p2.jpg'
import img3 from '../../assets/lar7.jpg'
import img4 from '../../assets/p3.jpg'
import img5 from '../../assets/lar10.jpg'
import img6 from '../../assets/lar3.jpg'
const GalleryContext = createContext({})

export function GalleryFull() {
  return (
    <Gallery title="Tabriz" subTitle="Gold Mine" hasPagination={true}>
      <Gallery.Container customStyles={{ fontFamily: 'oswald' }}>
        <Gallery.Header customStyles={{ flexDirection: 'row', gap: '80px' }}>
          <Gallery.Title />
          <Gallery.Pagination max={2} min={-1} />
        </Gallery.Header>
        <Gallery.Slider>
          <Gallery.Image
            name={'img1'}
            src={img1.src}
            imgIndex={0}
            title="Innovation | Welding"
            subTitle="Wire handle"
            customStyles={{ zIndex: 1 }}
          />
          <Gallery.Image
            name={'img2'}
            src={img2.src}
            imgIndex={1}
            customStyles={{ zIndex: 1 }}
            title="Innovation | Welding"
            subTitle="Wire handle"
          />
          <Gallery.Image
            name={'img3'}
            src={img3.src}
            imgIndex={2}
            customStyles={{ zIndex: 1 }}
            title="Innovation | Welding"
            subTitle="Wire handle"
          />
        </Gallery.Slider>
      </Gallery.Container>
    </Gallery>
  )
}
export function GalleryImages() {
  return (
    <Gallery
      hasPagination={true}
      slider={false}
      title="STAY INFORMED ON OUR"
      subTitle="LATEST NEWS"
    >
      <Gallery.Container customStyles={{ fontFamily: 'oswald' }}>
        <Gallery.Header>
          <Gallery.Title sectionTitle="Latest news" />
          <button class="p-5 text-lg text-forth bg-secondary flex justify-between gap-20 z-50 hover:bg-forth hover:text-secondary transition-colors">
            <span> EXPLORE MORE</span> <span> &rarr;</span>
          </button>
        </Gallery.Header>
        <section class="flex justify-center lg:gap-5 w-[70vw] z-50">
          <Gallery.ImageStatic
            name={'img1'}
            title={'TECHNOLOGY'}
            subTitle={'CHOOSING THE OPTIMAL STEEL HANDLE'}
            src={img4.src}
            imgIndex={0}
            customStyles={{ zIndex: 1 }}
            date="June 9, 2022"
            customTailwind="hidden lg:flex"
          />
          <Gallery.ImageStatic
            name={'img2'}
            title={'METALOGY'}
            src={img5.src}
            subTitle={'WHY DUSTLESS BLASTING IS In HIGH DEMAND'}
            imgIndex={1}
            customStyles={{ zIndex: 1 }}
            date="June 9, 2022"
            customTailwind="hidden lg:flex"
          />
          <Gallery.ImageStatic
            name={'img3'}
            title={'ALUMINUM VS STEEL'}
            src={img6.src}
            subTitle={'ALUMINUM VS STEEL. BENEFIT OF BOTH'}
            imgIndex={2}
            customStyles={{ zIndex: 1 }}
            date="June 9, 2022"
          />
        </section>
      </Gallery.Container>
    </Gallery>
  )
}

export default function Gallery({
  title = '',
  hasPagination = false,
  subTitle = '',
  children,
  slider = true,
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
        slider,
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
      class={`flex justify-center lg:justify-between lg:items-end max-w-[1000px] flex-col lg:flex-row items-center gap-8 lg:gap-0  w-full lg:w-[70vw] `}
      style={customStyles}
    >
      {children}
    </article>
  )
}
function Title({
  children = <></>,
  customStyles = {},
  sectionTitle = 'PROJECT GALLERY',
}) {
  const { title = '', subTitle = '' } = useContext(GalleryContext)

  return (
    <div
      class="text-secondary flex flex-col gap-2 text-left"
      style={customStyles}
    >
      {title.length ? (
        <>
          {subTitle.length ? (
            <div>
              <h2 class=" text-secondary text-lg lg:text-xl font-TekoLight">
                {sectionTitle}
              </h2>
              <hr class=" w-30 lg:w-44 text-secondary"></hr>
            </div>
          ) : (
            <> </>
          )}
          <div class="font-bold">
            <h3 class="text-4xl lg:text-4xl uppercase">{title}</h3>{' '}
            <h4 class="text-4xl lg:text-4xl uppercase ">{subTitle}</h4>
          </div>
        </>
      ) : (
        children
      )}
    </div>
  )
}
function Pagination({ children = <></>, customStyles = {}, max, min }) {
  const { goNext, goBack, hasPagination, slider } = useContext(GalleryContext)
  if (!slider) return <></>
  return hasPagination ? (
    <div class="flex gap-2" style={customStyles}>
      <button
        class="border border-secondary w-12 h-12 text-lg flex justify-center items-center hover:bg-secondary hover:text-primary z-50"
        onClick={() => goBack(min)}
      >
        <span class=" h-6 flex justify-center items-center">
          <i class="bi bi-arrow-left"></i>
        </span>
      </button>
      <button
        class="border border-secondary w-12 h-12 text-lg flex justify-center items-center hover:bg-secondary hover:text-primary z-50"
        onClick={() => goNext(max)}
      >
        <span class=" h-6 flex items-center justify-center">
          {' '}
          <i class="bi bi-arrow-right"></i>{' '}
        </span>
      </button>
    </div>
  ) : (
    <div class="flex gap-2">{children}</div>
  )
}

function Slider({ children }) {
  return (
    <div class="flex gap-12 lg:gap-20 w-[300vw] justify-center max-w-[3500px]">
      {children}
    </div>
  )
}
// Dynamic image
function Image({
  name,
  src,
  imgIndex = 0,
  customStyles = {},
  title = '',
  subTitle = '',
}) {
  const { index = 0, slider } = useContext(GalleryContext)

  return (
    <figure
      class="relative transition-transform"
      style={{
        transform: slider
          ? `translate(${-108 * index}%) ${
              index == imgIndex - 1 ? 'scale(1.05)' : ''
            }`
          : '',
        ...customStyles,
      }}
    >
      <img loading={'lazy'} src={src} alt={name} class="h-[500px] w-[800px]" />
      {title && subTitle ? (
        <figcaption class="uppercase absolute bottom-0 left-0 right-0 px-6 backdrop-blur-md py-2 lg:py-7">
          <p class="text-sm">{title}</p>
          <strong class=" text-2xl lg:text-3xl">{subTitle}</strong>
          <div class="absolute bg-primary right-0 bottom-[110px] w-3 h-3"></div>
        </figcaption>
      ) : (
        <></>
      )}
    </figure>
  )
}
// Image static
function ImageStatic({
  name,
  src,
  customStyles = {},
  title = '',
  date = '',
  subTitle = '',
  customTailwind = '',
}) {
  const { index = 0, slider } = useContext(GalleryContext)

  return (
    <figure
      class={`relative transition-transform flex flex-col ${customTailwind}`}
      style={{
        transform: slider
          ? `translate(${-100 * index}%) ${
              index == imgIndex - 1 ? 'scale(1.05)' : ''
            }`
          : '',
        ...customStyles,
      }}
    >
      <div class="relative text-primary">
        <img src={src} alt={name} loading="lazy" />

        <p
          class=" absolute bottom-0 left-0 bg-secondary p-1 px-5 text-sm"
          style={{ letterSpacing: '2px' }}
        >
          {title}
        </p>
      </div>
      {title && subTitle ? (
        <figcaption class="uppercase  px-6 backdrop-blur-md py-7 p-5 bg-secondary text-forth gap-5 flex flex-col">
          <p
            className="text-sm text-black opacity-55"
            style={{ wordSpacing: '3px', letterSpacing: '1px' }}
          >
            {date}
          </p>
          <strong class="text-2xl">{subTitle}</strong>
          <div class="absolute bg-primary right-0 bottom-[110px] w-3 h-3"></div>
          <button className="text-sm text-primary text-left w-[120px] border-b-2 border-current hover:text-forth transition-colors">
            Read more &rarr;
          </button>
        </figcaption>
      ) : (
        <></>
      )}
    </figure>
  )
}

Gallery.Container = Container
Gallery.Slider = Slider
Gallery.Pagination = Pagination
Gallery.Title = Title
Gallery.Header = Header
Gallery.Image = Image
Gallery.ImageStatic = ImageStatic
