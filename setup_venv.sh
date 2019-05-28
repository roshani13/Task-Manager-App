  
#!/bin/bash

# set -x
# set -e

sudo apt install python3-virtualenv
sudo apt install virtualenv
virtualenv venv -p /usr/bin/python3.6
chmod +x venv/bin/activate
source $PWD/venv/bin/activate
pip install -r requirements.txt
