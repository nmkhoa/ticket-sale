import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [value, setValue] = useState('');
    const [activityNames, setName] = useState([
        
    ]);
    const handleSetName = e => {
       
        let names = activityNames.concat(value)
        setName(names);
    };
    return (<div>
        <input placeholder="Aktivitätsname" value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={handleSetName}>
           thêm
        </button>
        {JSON.stringify(activityNames)}
    </div>);
}
