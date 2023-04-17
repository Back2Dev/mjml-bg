export const sample = `

<mjml>
  <mj-head>
    <mj-attributes>
      <mj-class name="footer" font-size="10px" color="#444" align="center" />
      <mj-all font-family="Arial" />
      <mj-text line-height="1.3" font-size="12px" color="#092b58" />
      <mj-table align="center" width="100%" />
      <mj-class name="item" align="right" />
    </mj-attributes>
  </mj-head>
  <mj-body background-color="#fff">
    <mj-section>
      <mj-column background-color="#fff" width="600px">
        <mj-accordion border="none" padding="0" padding-left="20px" padding-right="20px">
          <mj-accordion-element icon-wrapped-url="downarrow.png" icon-unwrapped-url="uparrow.png" icon-height="15px" icon-width="10px">
            <mj-accordion-title color="#999999" font-size="12px" padding="15px">
              MAP Workshop Materials
            </mj-accordion-title>
            <mj-accordion-text color="#999999" font-size="10px" background-color="#fafafa" padding="15px">
                <span style="line-height:15px">
                  <a href="http://[%vhost%]/survey/pwikit_login.pl?id=[%id%]&password=[%password%]" target="_blank" rel="noopener">Click here to start</a><br/>
                  Alternatively:
                  <a href="http://[%vhost%]/" target="_blank" rel="noopener">
                    http://[%vhost%]/
                  </a><br/>
                  LoginID:  [%id%]<br/>
                  Password:  [%password%]
              </span>
            </mj-accordion-text>
          </mj-accordion-element>
        </mj-accordion>
        
        <mj-text color="#999999" font-size="10px">
          Do NOT share or forward this email to anyone.
        </mj-text>
        <mj-button href="http://192.168.1.13:3060/forms/q5" background-color="#cb1c33" color="white" inner-padding="5px" font-size="10px" padding="0">	
            Get started
        </mj-button>
        <mj-divider border-width="1px" border-color="#999999"/>
        <mj-text>
        	<h4>Dear [%firstname%]:</h4>
          <p>Congratulations on your upcoming participation in the MAP Program. You are beginning a process that over 160,000 leaders, managers, and key individuals at every level have used to accelerate performance and productivity within their organizations. Your scheduled workshop date is [%workshopdate%].</p>
          <h4>Pre-Workshop Questionnaires</h4>
          <p>Please click on the link above to access the MAP Pre-Workshop Questionnaires. The information you provide in your responses is an integral part of your workshop experience. Your completed questionnaires must be received by [%duedate%], or your participation in the workshop may be affected. If you have any difficulty completing the forms, please let us know.  There is an option to download, print, and complete the questionnaires manually. If you chose this option, please fax the completed questionnaires to [%returnfax%].</p>
          <h4>Accommodations</h4>
          <p>A Hotel Reservation form is one of the questionnaires we ask you to complete. It is important to complete this regardless of your plans to stay overnight at the hotel. Please list any dietary preferences, your arrival time, and if you will be joined by a guest. A workshop schedule and directions to the [%location%] are included.</p>
          <h4>If you have any questions regarding the registration process, please call your workshop administrator at [%adminphone%], or reply to this email.  [%execname%], your Director of Client Solutions, is also available at any time, should you require assistance.</h4>
          <h4>Questions and Support </h4>
          <p>If you have any questions regarding the registration process, please call your workshop administrator at [%adminphone%], or reply to this email.  [%execname%], your Director of Client Solutions, is also available at any time, should you require assistance.</p>
          <p>Thank you again for your participation in the MAP Program.  We look forward to working with you.</p>
          <p>Best regards, </p>
        </mj-text>
        <mj-text align="right">
          Cathy Webb<br/>
          Workshop Administrator<br/>
          (800) 540-9003 x225<br/>
          <a href="ctwebb@mapconsulting.com" target="_blank" rel="noopener">ctwebb@mapconsulting.com</a>
        </mj-text>
        <mj-divider border-width="1px" border-color="#999999"/>
        <mj-text font-size="10px" color="#999999">If you are having trouble, please email
          <a href="ctwebb@mapconsulting.com" target="_blank" rel="noopener">ctwebb@mapconsulting.com</a> 
          for further assistance.
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-text mj-class="footer">
          <p>participant</p>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;