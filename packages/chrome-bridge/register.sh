#!/bin/bash

cd $(dirname $0)

mkdir -p ~/Library/Application\ Support/Google/Chrome/NativeMessagingHosts
cp com.my_company.my_application.json ~/Library/Application\ Support/Google/Chrome/NativeMessagingHosts