@echo off
where node > nul 2>&1
if %errorlevel% equ 0 (
    echo Node.js �Ѱ�װ��
) else (
    echo �޷��ҵ� Node.js������ʧ�ܡ�
    exit /b 1
)


npm install -g http-server


echo ��ɲ�����
echo �����������...
pause
