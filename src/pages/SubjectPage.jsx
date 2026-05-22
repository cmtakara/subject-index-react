import React from 'react'
// import data from './assets/data.js'
import { useParams } from 'react-router';
import data from '../assets/data.json';


function SubjectPage() {
    const params = useParams();
    const subject = params.subject;
    const subjectToGet = subject.toLowerCase().replace(/\s/g, '');
    console.log(subjectToGet);
    const units = data[subjectToGet];
    console.log(units);

    return (
    <>
    <h1>{subject}</h1>
    <p>Provides information on the specific subject
    </p>
    </>
  )
}

export default SubjectPage