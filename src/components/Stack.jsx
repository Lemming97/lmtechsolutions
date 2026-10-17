import { useI18n } from '../i18n.jsx'

export default function Stack() {
  const { stack } = useI18n().t
  return (
    <div className="stack">
      <h3>{stack.title}</h3>
      <dl>
        {stack.groups.map((group) => (
          <div className="stack-row" key={group.label}>
            <dt>{group.label}</dt>
            <dd>
              <ul>
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
