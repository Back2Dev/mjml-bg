import React, { useState } from 'react';
import mjml2html from 'mjml';

function App() {
  const [mjml, setMjml] = useState('');
  const [html, setHtml] = useState('');

  const handleMjmlChange = (event) => {
    setMjml(event.target.value);
  };

  const convertMjmlToHtml = () => {
    try {
      const { html } = mjml2html(mjml);
      setHtml(html);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>MJML Editor</h1>
      <div>
        <label htmlFor="mjml-editor">MJML:</label>
        <textarea id="mjml-editor" value={mjml} onChange={handleMjmlChange} />
      </div>
      <div>
        <button onClick={convertMjmlToHtml}>Convert to HTML</button>
      </div>
      <div>
        <label htmlFor="html-output">HTML Output:</label>
        {html}
      </div>
    </div>
  );
}

export default App;
