import navbar from './navbar.js';
        import {showdata} from './showdata.js';
        navbar();
        document.getElementById("searchfood").addEventListener("click",()=>{
            document.getElementById("show").innerHTML="";
            let div=document.createElement("div");
            div.className="loader";
            div.setAttribute("id","load");

            document.body.append(div);
            const food=document.getElementById("search").value;
            if (food=="") {
                alert("please enter food name");
            }
            else{
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
                .then(
                    (response)=>{
                        document.getElementById("load").style.display="none";
                        return response.json();
                    }
                )
                .then(
                    (data)=>{
                        showdata(data.meals);
                    }
                )
                .catch(
                    (e)=>{
                        console.log(e);
                        alert("No result found , see latest reciepe");
                        window.location="./latest.html"
                    }
                )
            }
        })