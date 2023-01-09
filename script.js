window.addEventListener('load' , function(){
  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")
  pullDownButton.addEventListener('mouseover' , function(){
    pullDownButton.setAttribute("style" , "background-color:blue;")
    console.log("青")
    pullDownButton.addEventListener('mouseout' , function(){
      pullDownButton.removeAttribute("style" , "background-color:red;")
      console.log("赤に戻る")
      pullDownButton.addEventListener('click' , function() {
       if (pullDownParents.getAttribute("style") == "display:block;"){
        pullDownParents.removeAttribute("style" , "display:block;")
        console.log("非表示")
        } else {
          pullDownParents.setAttribute("style" , "display:block;")
          console.log("表示")
          }
        })
      })
    })
  })  
