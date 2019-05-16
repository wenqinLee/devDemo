#!/usr/bin/expect 

set user root

set ip 154.8.168.171

set password v64RitV6vJwyEiCQ

set timeout -1


spawn ssh $user@$ip

expect "password:"     

send   "$password\r"   

interact

expect eof