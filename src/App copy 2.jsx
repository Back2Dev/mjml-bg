import React from 'react';
import mjml2html from 'mjml';

const App = () => {

  const htmlContent = "<p>Hello, world!</p>";
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
  console.log(html);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default App;
