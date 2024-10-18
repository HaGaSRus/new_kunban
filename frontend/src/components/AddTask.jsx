import React, { useState } from "react";

function AddTask(props) {
    const [showNewTaskButton, setShowNewTaskButton] = useState(true);
    const [value, setValue] = useState("");

    function handleInputChange(e) {
        setShowNewTaskButton(true);
        setValue('');
        alert(value);
    }

    return (
        <div>
            {
                showNewTaskButton ?
                <button onClick={() => setShowNewTaskButton(false)}>New</button>:
                <input type="text" value={value} onChange={e => setValue(e.target.value)} onBlur={handleInputChange} />
            }
        </div>
    )
}

export default AddTask;