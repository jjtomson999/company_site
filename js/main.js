const loading =  document.querySelector('#loading');
const loadingScreen = document.querySelector('#loading-screen');

const loadintText=document.querySelector("#loading p");

window.addEventListener('load',function(){
  loading.animate(
    {
      opacity:[1,0],
      visibility:'hidden',
    },
    {
      delay:1200,
      duration:3000,
      easing:'ease',
      fill:'forwards'
    }
  );
  loadingScreen.animate(
    {
      translate:['0  100vh',]

    },
    {
      duration:3000,
      delay:1200,
      easing:'ease',
      fill:'forwards'
    }
  );
  loadintText.animate(
    {
      opacity:[1,0],
    },{
      duration:2800,
      delay:0,
      easing:'ease',
      fill:'forwards'
    }
    
  )
});