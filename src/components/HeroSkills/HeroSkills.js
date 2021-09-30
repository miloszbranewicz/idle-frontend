import styles from "./heroSkills.module.css";

export default function HeroSkills({skills}) {
  
  return (
    <article className={`max-w-xl border p-5`}>
      {skills.map((skill) => (
        <div key={skill.id} className={`grid grid-cols-12 mb-10`}>
          <img
            src={skill.image.url}
            width={96}
            height={96}
            alt={skill.name}
            className={`col-span-12 sm:col-span-4 rounded-full place-self-center mb-5`}
          />

          <div className={`col-span-12 sm:col-span-8`}>
            <h6 className={`font-bold mb-2`}>{skill.name}</h6>
            <p>{skill.description}</p>
          </div>
        </div>
      ))}
    </article>
  );
}
