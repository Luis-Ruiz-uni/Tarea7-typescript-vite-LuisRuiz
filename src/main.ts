import './style.css'
import cerroImg from './assets/cerroporteno.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h2> AGUANTE CERRO </h2>
<img src="${cerroImg}" class="base" width="170" height="179">

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
