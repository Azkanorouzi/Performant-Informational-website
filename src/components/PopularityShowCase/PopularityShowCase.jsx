import Popularity from './Popularity'

export default function PopularityShowCase() {
  return (
    <div class="flex gap-10 absolute  bottom-0 left-0 right-0 justify-center pb-20 flex-col">
      <h2
        class="text-4xl lg:text-8xl text-forth font-bold lg:w-[80vw] "
        style={{ letterSpacing: '10px', marginLeft: 'calc(8vw)' }}
      >
        ACHIEV
        <br />
        EMENTS
      </h2>
      <div className="flex lg:gap-36 w-[90vw]   lg:w-[80vw] lg:mx-[5vw] flex-wrap gap-5 ">
        <Popularity numberText={25} title={'Years'} speed={200} />
        <Popularity numberText={40} strText="K" title={'meters'} speed={100} />

        <Popularity numberText={32} title={'Active'} speed={140} />
        <Popularity
          numberText={2}
          strText="K"
          title={'Production'}
          speed={600}
        />
      </div>
    </div>
  )
}
