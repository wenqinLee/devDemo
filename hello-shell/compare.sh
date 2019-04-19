a=10
b=20
<<EOF
    if语句左右需要有空格
EOF
if [ $a -eq $b ]
then
    echo "$a -eq $b: a 等于 b"
else
    echo "$a -eq $b: a不等于b"
fi
if [ $a -ne $b ]
then
    echo "$a -ne $b: a不等于 b"
else
    echo "$a -ne $b: a等于b"
fi
if [ $a -gt $b ]
then 
    echo "$a -gt $b:a大于b"
else
    echo "$a -gt $b:a不大于b"
fi
if [ $a -lt $b ]
then
    echo "$a -lt $b:a小于b"
else
    echo "$a -lt $b:a不小于b"
fi
if [ $a -ge $b ]
then
   echo "$a -ge $b: a 大于或等于 b"
else
   echo "$a -ge $b: a 小于 b"
fi
if [ $a -le $b ]
then
   echo "$a -le $b: a 小于或等于 b"
else
   echo "$a -le $b: a 大于 b"
fi
