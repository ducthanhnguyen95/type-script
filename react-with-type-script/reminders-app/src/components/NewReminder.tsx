import React, { useState } from 'react';

function NewReminder(): React.JSX.Element {

    const [title, setTitle] = useState('');

    return (
        <form>
            <label htmlFor=""></label>
            <input value={title} onChange={e => setTitle(e.target.value)} id="title" type="text" className="form-control" />
            <button type="submit" className="btn btn-primary my-3 rounded-pill">Add Reminder</button>
        </form>
    );
}

export default NewReminder;