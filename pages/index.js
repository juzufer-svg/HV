import Head from 'next/head'
import Hero from '../components/Hero'
import Section from '../components/Section'
import SkillCloud from '../components/SkillCloud'
import Timeline from '../components/Timeline'
import { cvData } from '../data/cvData'
import styles from '../styles/home.module.css'

function Home() {
  const {
    seo,
    personal,
    profile,
    skills,
    experience,
    education,
    certifications,
    projects,
    availability,
    cta,
    links,
    hobbies,
  } = cvData

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
      </Head>

      <main className={styles.main}>
        <div className={styles.shell}>
          <Hero personal={personal} profile={profile} />

          <div className={styles.contentGrid}>
            <Section id="habilidades" title="Habilidades" subtitle="Competencias técnicas y funcionales">
              <SkillCloud skills={skills} />
            </Section>

            <Section id="experiencia" title="Experiencia laboral" subtitle="10 años de experiencia profesional">
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

            <Section
              id="proyectos"
              title="Proyectos destacados"
              subtitle="Soluciones construidas con enfoque en impacto y resultados"
            >
              <div className={styles.projectGrid}>
                {projects.map((project) => (
                  <article key={project.name} className={styles.projectCard}>
                    <h3>{project.name}</h3>
                    <p className={styles.projectDesc}>{project.description}</p>
                    <p className={styles.projectMeta}>
                      <strong>Stack:</strong> {project.stack}
                    </p>
                    <p className={styles.projectMeta}>
                      <strong>Impacto:</strong> {project.impact}
                    </p>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        Ver proyecto
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </Section>

            <Section id="disponibilidad" title="Disponibilidad" subtitle="Estado actual para nuevas oportunidades">
              <div className={styles.availabilityGrid}>
                <p className={styles.availabilityItem}>{availability.status}</p>
                <p className={styles.availabilityItem}>{availability.location}</p>
                <p className={styles.availabilityItem}>{availability.modality}</p>
                <p className={styles.availabilityItem}>{availability.focus}</p>
              </div>
            </Section>

            <Section id="enlaces" title="Enlaces profesionales" subtitle="Canales para validar experiencia y contacto">
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

            <Section id="logros" title="Logros destacados" subtitle="Resultados relevantes en entornos productivos">
              <ul className={styles.simpleList}>
                {hobbies.map((hobby) => (
                  <li key={hobby}>{hobby}</li>
                ))}
              </ul>
            </Section>

            <section className={styles.ctaSection}>
              <h2>{cta.title}</h2>
              <p>{cta.message}</p>
              <div className={styles.ctaActions}>
                <a className={styles.btnPrimary} href={`mailto:${personal.email}`}>
                  Contactar por Email
                </a>
                <a className={styles.btnGhost} href={`tel:+57${personal.phone}`}>
                  Llamar ahora
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
