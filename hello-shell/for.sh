for item in 1 2 3 4 5
do 
    echo "the value is : $item"
done

for string in "hello World!"
do 
    echo "string:$string"
done

i=1
while(( $i<=5 ))
do 
    echo $i
    let i++
done