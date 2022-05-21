var el = document.getElementById('button');
const modelwrapper = document.querySelector('.model_wrapper');
const btn_close = document.querySelector('.btn_close');
if(el){
  el.addEventListener('click', function(){
    openModel();
  });
}

if(btn_close){
    btn_close.addEventListener('click', function(){
      closeModel();
    });
  }

  modelwrapper.addEventListener('click',(e) => {
      if(e.target !== modelwrapper) return;
      closeModel();
  });

  document.addEventListener('keydown',(e) => {
      if(e.key === 'Escape'){
          closeModel();
      }
  })

  function openModel() {
      modelwrapper.classList.add('active');
  }
  function closeModel() {
    modelwrapper.classList.remove('active');
}