export default function Timeline({ items }) {
  return (
    <ol className="timelineList">
      {items.map((item) => (
        <li key={`${item.role}-${item.company}-${item.period}`} className="timelineItem">
          <p className="timelinePeriod">{item.period}</p>
          <h3>{item.role}</h3>
          <p className="timelineMeta">
            {item.company} · {item.location}
          </p>
          <ul className="timelinePoints">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
