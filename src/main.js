import '../style.css'
import { selectRandomFromArray } from './util'


document.getElementById('button')
      .addEventListener('click', onClick)
document.getElementById('limpiar')
      .addEventListener('click', limpiar)

function onClick(){
      const tam = document.getElementById('tam')
      const participants = document.getElementById('participants')
      const result = document.getElementById('groups')
      const nameList = participants.value.split('\n')
      const [groups, aux] = selectRandomFromArray(nameList, tam.value)
      let msg = ""
      
      if(!tam.value || isNaN(tam.value) || tam.value<0) msg='No estás eligiendo un tamaño de grupo válido'
      else if(!participants.value) msg = 'No hay participantes'
      else {
        for(let i in groups){
            msg +=`Grupo ${parseInt(i)+1}: ${groups[i]} <br>`
        }
        if(aux.length>0)
            msg += `Queda sin grupo:  ${aux}`
      }
      result.innerHTML = msg
}
function limpiar(){
    const participants = document.getElementById('participants')
    const result = document.getElementById('groups')
    participants.value=""
    result.innerHTML=""
}