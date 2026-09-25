export default function CourseGoal({title,description,children}){
  return <li>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
  </li>
}