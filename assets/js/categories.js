
const getCategoryInfo = async ()=>{

      const param = new URLSearchParams(location.search);

      const catName = param.get("categoryName");
    
     const response = await axios.get(`https://dummyjson.com/products/category/${catName}`);
     console.log(response.data.products[0].images);
     
      return response.data;
}

getCategoryInfo();


 //  To Do: dispaly the name , price, thumbnali and rate  


const displayCategoryInfo = async () => {

  const categoryInfo = await getCategoryInfo();

  const response = categoryInfo.products;

   const result = response.map((catInfo)=>{

    return `

     <div class="col-xxl-3 col-lg-4 col-md-6 col-12">
     <div class="card p-2 h-100">
        <img src="${catInfo.thumbnail}" width="300" height="300" class="card-img-top" alt="...">
               <div class="card-body">
              <h5 class="card-title">${catInfo.title}</h5>
             <p class="card-text">${catInfo.description}</p>
          </div>
     </div>
     </div>
    
    `;
   }).join(" ");

   document.querySelector(".categoryInfo .row").innerHTML=result;
  
}

displayCategoryInfo();



