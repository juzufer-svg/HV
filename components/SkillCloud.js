export default function SkillCloud({ skills }) {
  return (
    <ul className="skillGrid">
      {skills.map((skill) => (
        <li key={skill.label} className="skillCard">
          <strong>{skill.label}</strong>
          <span>{skill.level}</span>
        </li>
      ))}
    </ul>
  )
}
