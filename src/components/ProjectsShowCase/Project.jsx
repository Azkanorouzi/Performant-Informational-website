export default function Project({ src, name, customStyles }) {
  return (
    <div
      style={{ background: `url(${src})`, backgroundSize: 'cover' }}
      class={`flex-1 ${customStyles} `}
    ></div>
  )
}
