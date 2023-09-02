
longest_log=$(sudo find / -type f -name "*.log" | sort -n | tail -n 1)
sudo head -n 100 "$longest_log" > truncated.log
sudo chown root:root truncated.log
sudo chmod 600 truncated.log
cat truncated.log
