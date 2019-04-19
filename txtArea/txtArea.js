//获取文本内容
var string = document.querySelector('#content').value;

string.addEventListener('blur',function(){
    var data = string
        localStorage.setItem('data',string);
    }
)

