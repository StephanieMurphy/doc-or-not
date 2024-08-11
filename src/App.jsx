import { useState } from "react";
import "./App.css";

const docs = [
  { title: "Pathologist", isDoc: true },
  { title: "Radiologist", isDoc: true },
  { title: "Psychiatrist", isDoc: true },
  { title: "Anaesthesiologist and anaesthetist", isDoc: true },
  { title: "Chiropractor ", isDoc: false },
  { title: "Dental surgeon", isDoc: false },
  { title: "Podiatric surgeon", isDoc: false },
  { title: "Medical writer", isDoc: false },
  { title: "Coroner", isDoc: false },
  { title: "Audiologist", isDoc: false },
  { title: "Dentist", isDoc: false },
  { title: "Radiographer", isDoc: false },
  { title: "Psychologist", isDoc: false },
];

export default function App() {
  const [page, setPage] = useState(1);
  const [docNumber, setDocNumber] = useState(0);
  const doc = docs[docNumber];
  console.log(doc);
  return (
    <div>
      {page === 1 && <Page1 onStartClick={() => setPage(page + 1)} />}
      {page === 2 && (
        <Page2
          title={doc.title}
          progressBar={1}
          total={10}
          description={"Smells"}
          onDocClick={()=> setDocNumber(docNumber+1)}
        />
      )}
    </div>
  );
}

function Page1({ onStartClick }) {
  return (
    <div>
      <div>Doc or Not</div>
      <div>Explanation</div>
      <div>Click to see the doctor</div>
      <button onClick={onStartClick}>Start</button>
    </div>
  );
}
function Page2({ onDocClick, title, progressBar, total, description }) {
  return (
    <div>
      <div>Doc or Not</div>
      <div>
        {progressBar}/{total}
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <button onClick={onDocClick}>Doc</button>
      <button onClick={onDocClick} >Not</button>
    </div>
  );
}
