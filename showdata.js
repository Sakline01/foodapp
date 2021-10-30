
export const showdata=(data)=>{
    var container=document.getElementById("show");
    container.innerHTML="";
    console.log(data);
    if (data.length>10) {
        for (let i = 0; i < 10; i++) {
            card(data,container,i);
        }   
    }
    else{
        for (let i = 0; i < data.length; i++) {
            card(data,container,i);
        }
    } 
}
const card=(data,container,i)=>{
    let div=document.createElement("div");
    div.className="card";
    let subdiv1=document.createElement("div");
    subdiv1.className="left";
    let subdiv2=document.createElement("div");
    subdiv2.className="right";
    let img=document.createElement("img");
    img.src=data[i].strMealThumb;
    let h2=document.createElement("h2");
    h2.textContent=data[i].strMeal;
    let hr=document.createElement("hr");
    let ingredient=[]
    let measure=[]
    let pp="<h2>Ingredients:</h2>";
    let p=document.createElement("p");
    for (let j = 1; j < 11; j++) {
        ingredient.push(`strIngredient${j}`);
        measure.push(`strMeasure${j}`);
        if (data[i][ingredient[j-1]]=='') {
            break;
        }
        else{
            pp+=`${data[i][ingredient[j-1]]}-${data[i][measure[j-1]]} | `;
           
        }
    }
    p.innerHTML=pp;
    p.style.fontSize="16px";
    let catagory=document.createElement("h2");
    catagory.textContent=`Category: ${data[i].strCategory} | Type: ${data[i].strArea}`
    subdiv1.append(img,h2,hr,p,catagory);
    let desc=document.createElement("p");
    let con="";
    if (data[i].strInstructions.length>2000) {
        con=data[i].strInstructions.slice(0,2001);
        desc.innerHTML=`<h2>Process</h2><br>${con}`;
    }
    else{
        desc.innerHTML=`<h2>Process</h2><br>${data[i].strInstructions}`;
    }
    let btn=document.createElement("button");
    btn.textContent='Watch Tutorial';
    btn.addEventListener("click",()=>{
        window.location=data[i].strYoutube;
    })
    subdiv2.append(desc,btn);
    div.append(subdiv1,subdiv2);
    div.style.margin="20px";
    container.append(div);
}



// for (let i = 0; i < data.length; i++) {
//     let div=document.createElement("div");
//     div.textContent=data[i].strMeal;
//     let ingredient=[]
//     let measure=[]
//     for (let j = 1; j < 11; j++) {
//         let p=document.createElement("p")
//         ingredient.push(`strIngredient${j}`);
//         measure.push(`strMeasure${j}`);
//         if (data[i][ingredient[j-1]]=='') {
//             break;
//         }
//         else{
//            p.textContent=`${data[i][ingredient[j-1]]}-${data[i][measure[j-1]]}`;
//            p.style.fontSize="15px";
//             div.append(p);
//         }
//     }
//     div.style.margin="20px";
//     div.style.fontSize="20px"
//     container.append(div);
// }