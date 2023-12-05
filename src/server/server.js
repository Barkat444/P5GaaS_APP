const express = require('express');
const { exec } = require('child_process');
const app = express();
const cors = require('cors');
const os = require('os');
const fs = require('fs');
const path = require('path');

app.use(cors());

app.get('/json-api/build_history.json', (req, res) => {
  const filename = req.query.input_param;
  const serverDir = path.dirname(__filename);
  const filePath = path.join(serverDir, 'build_history.json');
  console.log('File path:', filePath);
  console.log(req);
  try {
    const fileData = JSON.parse(fs.readFileSync(filePath));
    console.log('Read data:', fileData);
    res.json(fileData);
  } catch (error) {
    console.error("Error reading file build_history.json:", error);
    res.status(500).json({ error: "Failed to read build_history.json" });
  }
});

app.get('/json-api/regression_report.json', (req, res) => {
  const filename = req.query.input_param;
  const serverDir = path.dirname(__filename);
  const filePath = path.join(serverDir, 'regression_report.json');
  try {
    const fileData = JSON.parse(fs.readFileSync(filePath));
    res.json(fileData);
  } catch (error) {
    console.error("Error reading file regression_report.json:", error);
    res.status(500).json({ error: "Failed to read regression_report.json" });
  }
});

app.get('/json-api/deployment_report.json', (req, res) => {
  const filename = req.query.input_param;
  const serverDir = path.dirname(__filename);
  const filePath = path.join(serverDir, 'deployment_report.json');
  try {
    const fileData = JSON.parse(fs.readFileSync(filePath));
    res.json(fileData);
  } catch (error) {
    console.error("Error reading file deployment_report.json:", error);
    res.status(500).json({ error: "Failed to read deployment_report.json" });
  }
});

app.get('/json-api/system_report.json', (req, res) => {
  const filename = req.query.input_param;
  const serverDir = path.dirname(__filename);
  const filePath = path.join(serverDir, 'system_report.json');
  try {
    const fileData = JSON.parse(fs.readFileSync(filePath));
    res.json(fileData);
  } catch (error) {
    console.error("Error reading file system_report.json:", error);
    res.status(500).json({ error: "Failed to read system_report.json" });
  }
});

app.get('/run-python-script', (req, res) => {
  const inputParam = req.query.input_param || '';
  let pythonCommand = 'python'; // Default to 'python'

  if (os.platform() === 'darwin') {
    pythonCommand = 'python3'; // On macOS, use 'python3'
  }

  // Get the absolute path to the directory containing your server file
  const serverDir = path.dirname(__filename);
  const scriptPath = path.join(serverDir, 'get_build_history.py');
  const command = `${pythonCommand} "${scriptPath}" ${inputParam}`;
  // console.log(command)

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running Python script: ${error}`);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(`Python script output: ${stdout}`);
    res.send(stdout);
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
