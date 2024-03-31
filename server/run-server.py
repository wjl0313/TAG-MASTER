import subprocess

# 启动 server.js
print("Starting server...")
subprocess.Popen(["node", "server.js"])

# 启动 submit.js
print("Starting submit...")
subprocess.Popen(["node", "submit.js"])
