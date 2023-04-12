import React, { useEffect } from 'react'
import Split from "react-split";
import { Box, Grid, FormGroup, Button, TextField } from "@mui/material";
import CodeMirror from '@uiw/react-codemirror';

import mjml2html from 'mjml-browser'
// import HTML2React from 'html2react'
import { sample } from './sample'
import './editor.css'

const Editor = () => {
  const [mjml, setMjml] = React.useState(sample);
  const [html, setHtml] = React.useState('');
  const debouncedMjml = useDebounce(mjml, 1000);

  React.useEffect(() => {
    if (debouncedMjml) {
      setHtml(debouncedMjml);
    }
  }, [debouncedMjml])

  React.useEffect(() => {
    convertMjmlToHtml();
  }, [html]);
  

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

  const onChange = React.useCallback((value, viewUpdate) => {
    setMjml(value);
  }, []);

  const options = {
    mode: 'xml',
    lineNumbers: true,
    lint: true,
    gutters: ['CodeMirror-lint-markers']
  };

  return (
    <Grid container className="main-area">
      <Box width="100vw">
        <Split className='split'>
          <Grid item>
            <Box sx={{ height: "100%"}}>   
            <TextField multiline variant="outlined" value={mjml} onChange={handleMjmlChange} sx={{width:"49.9vw"}}/>
            <CodeMirror
              value={mjml}
              options={options}
              onChange={onChange}
            />
            <FormGroup>
              <Button
                onClick={convertMjmlToHtml}
                variant="outlined"
                style={{ margin: "0px", padding: "0px", height: "20px" }}
              >
                Covnert to HTML
              </Button>
            </FormGroup>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ bgcolor: "#cccccc", height: "100%", color: "#FFFFFF" }}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Box>
          </Grid>
        </Split>
      </Box>
    </Grid>
  );
};

export default Editor

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
