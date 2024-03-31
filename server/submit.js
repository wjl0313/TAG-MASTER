const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors()); // 添加 CORS 中间件

const cogvlm_dataFilePath = path.join(__dirname, '../src/data/cog_data.json');
console.log('json/cog_data.json地址', cogvlm_dataFilePath);

app.post('/submit-cogvlm', (req, res) => {
  const cogvlm_formData = req.body;
  try {
    // 直接覆盖原有的文件，写入新的数据
    fs.writeFileSync(cogvlm_dataFilePath, JSON.stringify(cogvlm_formData, null, 2));
    console.log('cog_data写入成功');
    res.json({ success: true });
  } catch (error) {
    console.error('cog_data发生错误:', error);
    res.status(500).json({ error: 'cog_data发生错误' });
  }
});

app.get('/cog_data', (req, res) => {
  try {
    // 从文件系统中读取数据
    const data = fs.readFileSync(cogvlm_dataFilePath, 'utf8');
    // 将读取到的数据发送回客户端
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('读取cog_data时发生错误:', error);
    res.status(500).json({ error: '读取cog_data时发生错误' });
  }
});

const wd_dataFilePath = path.join(__dirname, '../src/data/wd_data.json');
console.log('json/wd_data.json地址', wd_dataFilePath);
app.post('/submit-wd', (req, res) => {
  const wd_formData = req.body;
  try {
    // 直接覆盖原有的文件，写入新的数据
    fs.writeFileSync(wd_dataFilePath, JSON.stringify(wd_formData, null, 2));
    console.log('wd_Data写入成功');
    res.json({ success: true });
  } catch (error) {
    console.error('wd_Data发生错误:', error);
    res.status(500).json({ error: 'wd_Data发生错误' });
  }
});

app.get('/wd_data', (req, res) => {
  try {
    const data = fs.readFileSync(wd_dataFilePath, 'utf8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('读取wd_Data时发生错误:', error);
    res.status(500).json({ error: '读取wd_Data时发生错误' });
  }
});

app.listen(port, () => {
  console.log(`服务器运行在 https://localhost:${port}`);
});



