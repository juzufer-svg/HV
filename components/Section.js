export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="cvSection">
      <header className="cvSectionHeader">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </header>
      {children}
    </section>
  )
}
