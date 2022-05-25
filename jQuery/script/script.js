$('body').keydown((e)=>{
    let newText = ''
    newText +=e.key
   $("h1").text(newText)
})