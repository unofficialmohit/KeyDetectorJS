let container=document.querySelector('.container');

window.addEventListener('keydown',(e)=>{
    console.log(e.key,e.keyCode,e.code);
    container.innerHTML=`<table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${(e.key==" ") ?"Space":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    </table>`;
})
