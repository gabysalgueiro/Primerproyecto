

const apirick=async (pagina)=> {
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api= await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado")
    divRes.innerHTML="";
  
    data.results.map(item=>{
        divItem=document.createElement ('div')
        divItem.innerHTML=`
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h6 class="card-title"> <b>Nombre:   <br> </b>  ${item.name}</h6>
      <h6 class="card-title"><b>Especie:<br></b> ${item.species}</h6>
      <p class="card-title"><b>Estado: <br></b>${item.status}</p>
      <p class="card-title"><b>Tipo: <br> </b>${item.type}</p>
      <p class="card-title"><b>Genero: <br> </b>${item.gender}</p>
      </div>
    </div>
  </div>
</div>

        `
        
        
        
        

        divRes.appendChild (divItem);
    })

}

apirick(2)