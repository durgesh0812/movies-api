


let input=document.getElementById("input1")
let searchbtn=document.querySelector("#search1")
searchbtn.addEventListener("click",()=>{
    console.log("button pressed")
    sendapirequest()
    sendapirequest1()
}) 

async function sendapirequest(){
    let inputData = input1.value;
    let response=await fetch(`http://www.omdbapi.com/?apikey=e728a52b&t=${inputData}`)

console.log(response)
let data=await response.json();
console.log(data)
useapidata(data)
}




 function useapidata(data)

 {
      document.querySelector("#content").innerHTML=`
     
     

    <div class="card ">
    <img src="${data.Poster}" class="card-img-top" alt="...";">
  <div class="card-body" style="font-family: 'Cookie', cursive;tex-align:center;font-size: 20px;">
    <h5 class="card-title" style="text-align:center">${data.Title.toUpperCase()}<p class="card-text"style="text-align:center">${data.Year}</p></h5>
    
    <p class="card-text"><b>Director:</b>${data.Director}</p>
    <p class="card-text"><b>Genre:</b>${data.Genre}</p>
    <p class="card-text"><b>Language:</b>${data.Language}</p>
    <p class="card-text"><b>Runtime:</b>${data.Runtime}</p>
    <p class="card-text"><b>Cast:</b>${data.Actors}</p>
    <p class="card-text"><b>Plot:</b>${data.Plot}</p>
    
    
  </div>
</div>
    
     `
 }
