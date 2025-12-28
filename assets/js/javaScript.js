

const getCategoriesList = async ()=>{

    const response = await axios.get("https://dummyjson.com/products/category-list");
      console.log(response.data);
    return response.data;
}


const displayCategories = async ()=>{

     const categories = await getCategoriesList();
     document.querySelector(".loading").classList.add("d-none");

    const result = categories.map((cat)=>{

        return `
     <div class="col-xxl-3 col-lg-4 col-md-6 col-12">
                        
        <div class="card">
               <div class="card-body">
               <h5 class="card-title">${cat}</h5>
               <a href=".././././../categories.html?categoryName=${cat}" class="btn btn-primary">Check it</a>
           </div>
        </div>

    </div>
        
        `
    }).join(' ');


     document.querySelector(".categories .row").innerHTML= result;




}



displayCategories();