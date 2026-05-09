export default function SkillCloud({ skills }) {
  return (
    <ul className="skillGrid">
      {skills.map((skill) => (
        <li key={skill} className="skillCard">
          <strong>{skill}</strong>
        </li>
      ))}
    </ul>
  )
}
