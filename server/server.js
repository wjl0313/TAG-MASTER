const express = require('express');
const { exec } = require('child_process');
const cors = require('cors'); // 导入 cors 模块
const path = require('path');
const app = express();
const port = 3000;

// 使用 cors 中间件，允许所有来源的跨域请求
app.use(cors());

app.get('/execute-bat', (req, res) => {
  const batFilePath = path.join(__dirname, '..', 'module', 'CogVLM', '\cogVLM_run.bat');
  console.log('cogVLM_run.bat路径', batFilePath);
  exec(`start ${batFilePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing .bat file');
      return;
    }
    console.log(stdout);
    res.send('Bat file executed successfully');
  });
});

app.get('/execute-bat-wd', (req, res) => {
  const pythonFilePath = path.join(__dirname, '..', 'module', 'wd-tagger', '\wd_run.bat');
  console.log('wd_run.bat路径', pythonFilePath);
  exec(`start ${pythonFilePath}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing .bat file');
      return;
    }
    console.log(stdout);
    res.send('Bat file executed successfully');
  });
});

app.listen(port, () => {
  console.log(`服务器运行在 https://localhost:${port}`);
});
