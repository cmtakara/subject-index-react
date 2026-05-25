import subjects from '../assets/units.json';
import { useState } from 'react'

function CurrentUnit({ unit, subject }) {
    let isUnit = false;
    console.log(subjects);
    // unit is the unit that is passed in, and could be empty
    unit.number ? isUnit = true : isUnit = false;
    console.log(isUnit);
    console.log(unit.number);
    const subjectList = subjects[subject.toLowerCase().replace(/\s/g, '')];
    console.log(subject);
    let foundUnit = [], topicsList = [];
    if (isUnit) {
        foundUnit = subjectList.find(subject => subject.number == unit.number);
        topicsList = foundUnit.topics;
    }
    console.log(topicsList);
    // const [ topics, setTopics ] = useState(topicsList);

    // need to find the unit in topicsList where the number matches the number of the unit passed in
    // then that array is what gets listed



    return (
        <div>
            <h2>{unit.unit ? <> UNIT: {unit.unit} </>: 'pick a unit above to see more details'}</h2>
            <ol>
                {isUnit && topicsList ? topicsList.map(topic => (
                    <>
                        <a><li key={topic.number}>
                            {topic.label}
                        </li></a>
                        <ul>
                        {topic.objectives && topic.objectives.length != 0 ?
                            topic.objectives.map (objective => (
                                <li>OBJECTIVE: {objective.objective} </li>
                            )) :
                            <></>
                        }
                        </ul>
                    </>
                )) : <div>no unit to show</div>}
            </ol>
        </div>
    )
}

export default CurrentUnit;