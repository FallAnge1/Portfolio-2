import '../css/Projects.css'
function Projects({ img, name, desc, langes }) {
  return (
    <div className="_project">
      <img
        src={'/public/img/projects/' + img}
        alt="Photo"
      />
      <h1>{name}</h1>
      <p>{desc}</p>
      <div className="structures">
        {langes.map((lang, index) => (
          <div
            key={index}
            className="structure"
          >
            {lang.name}
          </div>
        ))}
      </div>
      <button className="btn">Посмотреть</button>
    </div>
  )
}

export default Projects
