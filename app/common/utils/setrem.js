window.addEventListener('resize',function(){
resize();
})
function resize(){

  document.documentElement.style.fontSize = document.body.clientWidth/37.5 + 'px';
}
resize();
