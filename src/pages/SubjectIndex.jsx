import React from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';

function SubjectIndex() {
    return (
        <>
            <h1>Subjects</h1>
            <h2>ONLY AP PHYSICS 1 HAS WORKING PATHS</h2>
            <p>The below list provides links to subjects and those resources.  It is a non-comprehensive list of subjects that I tutor.
                Other topics include all math from elementary through high school, reading support, test preparation, and high school sciences.
            </p>
            <ul>
                {data.subjects.map(subject => (
                    <li key={data.category}>
                        <h2>{subject.category}</h2>
                        <ul>
                            {subject.subject_list.map(list1 => (
                                <li>
                                    <h3>{list1.sub_category}</h3>
                                    <ol>
                                        {list1.list.map(list2 => (
                                            <Link to={`/${list2}`}><li>
                                                {list2}

                                            </li>
                                            </Link>
                                        ))}
                                    </ol>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SubjectIndex