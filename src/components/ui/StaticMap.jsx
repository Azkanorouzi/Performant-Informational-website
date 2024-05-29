import staticMap from '../../assets/staticMap.jpeg'

export default function StaticMap() {
  return (
    <a href="https://www.google.com/maps/place/35%C2%B044'05.6%22N+51%C2%B021'08.8%22E/@35.7348881,51.3498626,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.7348881!4d51.3524375?entry=ttu">
      <img src={staticMap.src} alt="staticMap" class="w-72" loading="lazy"/>
    </a>
  )
}
