const nav=()=>{
    let div=document.createElement("div");
    div.className="topnav";
    div.innerHTML=`
    <a href="./latest.html">lattest reciepe</a>
    <a href="./recipeoftheday.html">reciepe of the day</a>
    <button id="searchfood">search</button>
    <input autocomplete="off" type="text" name="" id="search" placeholder="input text">`
    document.body.insertBefore(div,document.body.firstChild);
}
export default nav;