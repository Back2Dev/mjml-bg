import React from 'react';
import mjml2html from 'mjml';

const App = () => {
  const mjml = `
  <mjml>
    <mj-body>
      <mj-container>
        <mj-section>
          <mj-column>
            <mj-text>
              Hello World!
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-container>
    </mj-body>
  </mjml>
  `;

  const { html } = mjml2html(mjml);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default App;
