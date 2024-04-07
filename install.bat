@echo off
where node > nul 2>&1
if %errorlevel% equ 0 (
    echo Node.js 已安装。
) else (
    echo 无法找到 Node.js，操作失败。
    exit /b 1
)


npm install -g http-server


echo 完成操作。
echo 按任意键继续...
pause
