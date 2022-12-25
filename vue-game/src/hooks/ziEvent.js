//index作为标签 表示用户点了该棋子和每点击该棋子
let index = false;
export  function move(zi){
 //获取当前的高度和宽度
 let top =  Number(zi.style.top.split('px')[0])
 let left =  Number(zi.style.left.split('px')[0])
 
 zi.onclick = function(){
    if(index) return
    index = true
    //表示方向 
    let f 
    // 复四个节点
    let zi2 = zi.cloneNode(false)
    let zi3 = zi.cloneNode(false)
    let zi4 = zi.cloneNode(false)
    let zi5 = zi.cloneNode(false)

    //给这四个节点分别向四个位置增加一个棋子位
    //zi2向上
    zi2.style.top =  top-63+'px'
    //zi3向下
    zi3.style.top =  top+63+'px'
    //zi4向左
    zi4.style.left =  left-63+'px'
    //zi5向右
    zi5.style.left =  left+63+'px'  

    // 修改它们的颜色
    zi2.style.backgroundColor='rgba(150,150,150,0.1)'
    zi3.style.backgroundColor='rgba(150,150,150,0.1)'
    zi4.style.backgroundColor='rgba(150,150,150,0.1)'
    zi5.style.backgroundColor='rgba(150,150,150,0.1)'

    //将四个节点挂载到棋盘
    zi.parentNode.appendChild(zi2)
    zi.parentNode.appendChild(zi3)
    zi.parentNode.appendChild(zi4)
    zi.parentNode.appendChild(zi5)
    
    //点击它们 棋子就会移动到它们的位置

    //给四个棋子设置点击事件
    zi2.onclick = function(){
        zi.style.top =  top-63+'px'
        zi.parentNode.removeChild(zi2)
        zi.parentNode.removeChild(zi3)
        zi.parentNode.removeChild(zi4)
        zi.parentNode.removeChild(zi5)
        top = Number(zi.style.top.split('px')[0])
        index = false;
    }
    zi3.onclick = function(){
        zi.style.top =  top+63+'px'
        zi.parentNode.removeChild(zi2)
        zi.parentNode.removeChild(zi3)
        zi.parentNode.removeChild(zi4)
        zi.parentNode.removeChild(zi5)
        top = Number(zi.style.top.split('px')[0])
        index = false;
    }
    zi4.onclick = function(){
        zi.style.left =  left-63+'px'
        zi.parentNode.removeChild(zi2)
        zi.parentNode.removeChild(zi3)
        zi.parentNode.removeChild(zi4)
        zi.parentNode.removeChild(zi5)
        left = Number(zi.style.left.split('px')[0])
        index = false;
    }
    zi5.onclick = function(){
        zi.style.left =  left+63+'px' 
        zi.parentNode.removeChild(zi2)
        zi.parentNode.removeChild(zi3)
        zi.parentNode.removeChild(zi4)
        zi.parentNode.removeChild(zi5)
        left = Number(zi.style.left.split('px')[0])
        index = false;
    }

 }
}