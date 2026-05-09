export default function Hero({ personal, profile }) {
  return (
    <section className="heroCard">
      <p className="heroCity">{personal.city}</p>
      <h1>{personal.fullName}</h1>
      <p className="heroTitle">{personal.title}</p>
      <p className="heroProfile">{profile}</p>
      <ul className="heroContact">
        <li>
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
        </li>
        <li>
          <a href={`tel:+57${personal.phone}`}>+57 {personal.phone}</a>
        </li>
      </ul>
      <div className="heroActions">
        <button
          type="button"
          className="heroButton"
          onClick={() => {
            window.print()
          }}
        >
          Descargar CV en PDF
        </button>
      </div>
    </section>
  )
}
