@echo off
where node > nul 2>&1
if %errorlevel% equ 0 (
    echo Node.js �Ѱ�װ��
) else (
    echo �޷��ҵ� Node.js������ʧ�ܡ�
    exit /b 1
)

npm list -g http-server > nul 2>&1
if %errorlevel% equ 0 (
    echo http-server �Ѱ�װ��
) else (
    echo http-server δ��װ�����ڰ�װ...
    npm install -g http-server
    if %errorlevel% neq 0 (
        echo http-server ��װʧ�ܡ�
        exit /b 1
    )
    echo http-server ��װ�ɹ���
)

echo ��ɲ�����
echo �����������...
pause
