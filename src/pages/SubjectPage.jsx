import { useState } from 'react'
// import data from './assets/data.js'
import { useParams } from 'react-router';
import data from '../assets/data.json';
import CurrentUnit from '../components/CurrentUnit';


function SubjectPage() {
  const [ showUnit, setShowUnit ] = useState({});
  const params = useParams();
  const subject = params.subject;
  const subjectToGet = subject.toLowerCase().replace(/\s/g, '');
  console.log(subjectToGet);
  const units = data[subjectToGet];
  console.log(units);

  const handleClick = (e, label) => {
    e.preventDefault();
    setShowUnit(label);
  }

  return (
    <>
      <h1>{subject}</h1>
      <h2>only AP PHYSICS 1 - kinematics </h2>
      <p>Provides information on the specific subject
      </p>
      <ol>
        {  units && units.length ? units.map(unit => (
          <a href="#" onClick={(e) => handleClick(e, unit)}><li key={unit.number}>
            {unit.unit} - weight - {unit.weight}
          </li></a>
        )) : <div>working</div>}
      </ol>

      <CurrentUnit unit={showUnit} subject={subject} />
    </>
  )
}

export default SubjectPage