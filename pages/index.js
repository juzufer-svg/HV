import Hero from '../components/Hero'
import Section from '../components/Section'
import SkillCloud from '../components/SkillCloud'
import Timeline from '../components/Timeline'
import { cvData } from '../data/cvData'
import styles from '../styles/home.module.css'

function Home() {
  const { personal, profile, skills, summary, experience, education, certifications, links, hobbies } =
    cvData

  return (
    <main className={styles.main}>
      <div className={styles.shell}>
        <Hero personal={personal} profile={profile} />

        <div className={styles.contentGrid}>
          <Section
            id="resumen"
            title="Resumen profesional"
            subtitle="Trayectoria en soporte, infraestructura, performance y automatizacion"
          >
            <p>{summary}</p>
          </Section>

          <Section id="habilidades" title="Habilidades" subtitle="Competencias tecnicas y funcionales">
            <SkillCloud skills={skills} />
          </Section>

          <Section id="experiencia" title="Experiencia laboral" subtitle="10 anos de experiencia profesional">
            <Timeline items={experience} />
          </Section>

          <Section id="educacion" title="Educacion" subtitle="Formacion academica y tecnica">
            <ul className={styles.eduList}>
              {education.map((item) => (
                <li key={`${item.degree}-${item.period}`} className={styles.eduItem}>
                  <h3>{item.degree}</h3>
                  <p>
                    {item.institution} · {item.location}
                  </p>
                  <p className={styles.muted}>{item.period}</p>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="certificaciones" title="Certificaciones" subtitle="Formacion complementaria">
            <ul className={styles.simpleList}>
              {certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </Section>



          <Section id="enlaces" title="Enlaces y proyectos" subtitle="Recursos y trabajos destacados">
            <ul className={styles.projectList}>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </main>
  )
}

export default Home
