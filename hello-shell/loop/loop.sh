#!/usr/bin/expect
set dir  .
for file in `ls ${dir}`
    do
        if test -d ${file}
        then
            cd "${file}/"
            echo "当前目录：/${file}"
            sh echo.sh\  
            echo "done"
            cd ..
        else
            echo "当前不是文件夹"
        fi
    done