@echo off

where git > nul 2>&1
if %errorlevel% equ 0 (
    echo Git�Ѱ�װ
) else (
    if exist ".\git\cmd\git.exe" (
        set "PATH=%PATH%;%CD%\git\cmd"
        echo ��ʹ��Ŀ¼�ڵ� Git
    ) else (
        echo �޷��ҵ� Git������ʧ��
    )
)

echo ���ڸ���...
git reset --hard
git pull
echo ���ڸ�����ģ��...
git submodule init
git submodule update

if %errorlevel% equ 0 (
    echo ���³ɹ�
) else (
	echo ����ʧ��
)
pause