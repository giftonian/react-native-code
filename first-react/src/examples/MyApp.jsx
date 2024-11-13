import React, { useState } from 'react'

function MyApp() {
    const [searchText, setText] = useState("");

    const handleInputChange = (event) => {
        setText(event.target.value);
    };
  return (
    <>
    <h1>Learning React.js</h1>
    <div style={{ marginTop: '10px', padding: '10px', border: '1px solid #ddd' }}>
        <strong>Search Text:</strong> {searchText}
    </div>

    <div>
        <form>
            Search: <input type="text" placeholder="Type here to search..." 
            onChange={handleInputChange} value={searchText} 
            style={{ padding: '8px', width: '100%', maxWidth: '300px', marginTop: '10px' }}/>
        </form>
    </div>
    </>
  )
}

export default MyApp