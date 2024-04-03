@echo off
where node > nul 2>&1
if %errorlevel% equ 0 (
    echo Node.js 已安装。
) else (
    echo 无法找到 Node.js，操作失败。
    exit /b 1
)

npm list -g http-server > nul 2>&1
if %errorlevel% equ 0 (
    echo http-server 已安装。
) else (
    echo http-server 未安装，正在安装...
    npm install -g http-server
    if %errorlevel% neq 0 (
        echo http-server 安装失败。
        exit /b 1
    )
    echo http-server 安装成功。
)

echo 完成操作。
echo 按任意键继续...
pause
