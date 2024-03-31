import os
import subprocess

# 切换到 server 目录
server_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'server')
os.chdir(server_dir)

# 执行批处理文件
subprocess.run(["run-server.bat"])

# 切换到 dist 目录
dist_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'dist')
os.chdir(dist_dir)

# 启动 http-server
http_server_process = subprocess.Popen(["http-server", "-p", "1930", "-o"], shell=True)


# 执行完毕后等待用户按任意键继续
input("Press Enter to exit")
