
window.addEventListener('load' , function(){
  const pullDownButton = document.getElementById("lists")
  pullDownButton.addEventListener('mouseover' , function(){
    pullDownButton.setAttribute("style", "background-color:blue;")
    console.log("乗った時青")
    pullDownButton.addEventListener('mouseout' ,function(){
      pullDownButton.removeAttribute("style", "background-color:red;")
      console.log("外れた時赤")
      pullDownButton.addEventListener('click' , function(){
        pullDownButton.setAttribute("style" , "background-color:green;")
        console.log("クリックすると緑")
      })

    })
   })
})






