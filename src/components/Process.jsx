import { useI18n } from '../i18n.jsx'

export default function Process() {
  const { process } = useI18n().t
  return (
    <section className="block" id="process">
      <div className="wrap">
        <h2>{process.title}</h2>
        <p className="intro">{process.intro}</p>
        <ol className="steps">
          {process.steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
