import Popularity from './Popularity'

export default function PopularityShowCase() {
  return (
    <div class="flex gap-4 flex-col justify-center">
      <div class="flex gap-10 ">
        <Popularity numberText={25} title={'Years of experience'} speed={100} />
        <Popularity
          numberText={8}
          strText="K"
          title={'Skilled professional'}
          speed={400}
        />
      </div>
      <div class="flex gap-10">
        <Popularity numberText={32} title={'Visit Conferences'} speed={50} />
        <Popularity
          numberText={1}
          strText="K"
          title={'Projects Worldwide'}
          speed={1000}
        />
      </div>
    </div>
  )
}
