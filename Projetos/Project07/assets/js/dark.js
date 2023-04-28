/* Modo Noturno */
export const ModoDark = {
    bodyDark: document.querySelector('body'),
    btnDark: document.querySelector('button.darkinho'),
  
    dark(){
      ModoDark.bodyDark.classList.toggle('dark')
    }
  } 
  
  ModoDark.btnDark.onclick = ()=>{
    ModoDark.dark();
  
    if (ModoDark.bodyDark.classList.contains('dark')){
      ModoDark.btnDark.innerText = 'LIGHT'
    } else {
      ModoDark.btnDark.innerText = 'DARK'
    }
  }
  
  