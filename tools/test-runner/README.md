

## Setup Guide

Install deps and execute:

```bash
sudo apt-get install xvfb libgtk-3-0 libxss1 libgconf2-dev libnss3-dev libasound2-dev

Xvfb -ac -screen scrn 1280x2000x24 :9.0 &

export DISPLAY=:9.0

```
