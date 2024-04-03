@echo off

where git > nul 2>&1
if %errorlevel% equ 0 (
    echo Git已安装
) else (
    if exist ".\git\cmd\git.exe" (
        set "PATH=%PATH%;%CD%\git\cmd"
        echo 已使用目录内的 Git
    ) else (
        echo 无法找到 Git，操作失败
    )
)

echo 正在更新...
git reset --hard
git pull
echo 正在更新子模块...
git submodule init
git submodule update

if %errorlevel% equ 0 (
    echo 更新成功
) else (
	echo 更新失败
)
pause