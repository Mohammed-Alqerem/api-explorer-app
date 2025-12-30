
const getCategoryInfo = async ()=>{

      const param = new URLSearchParams(location.search);

      const catName = param.get("categoryName");
    
     const response = await axios.get(`https://dummyjson.com/products/category/${catName}`);
     console.log(response.data);
     
      return response.data;
}



 //  To Do: dispaly the name , price, thumbnali and rate  


const displayCategoryInfo = async () => {


  const categoryInfo = await getCategoryInfo();

     document.querySelector(".loading").classList.add("d-none");


  const response = categoryInfo.products;

   const result = response.map((catInfo)=>{

      let stars="";
      
          
         if(Math.floor(catInfo.rating) == 5){
            for(let i = 0; i<5 ; i++){

               stars+=`<i class="fa-solid fa-star"></i>`;

            }

   
         }else{
             for(let i = 0; i<Math.floor(catInfo.rating) ; i++){
                stars+=`<i class="fa-solid fa-star text-warning "></i>`;
             }

             for(let i = Math.floor(catInfo.rating);i<5;i++){
                stars+=`<i class="fa-regular fa-star" style="color: #FFD43B;"></i>`;
             }

         }


    return `

     <div class="col-xxl-3 col-lg-4 col-md-6 col-12">
     <div class="card p-2 h-100">
        <img src="${catInfo.thumbnail}" width="300" height="300" class="card-img-top" alt="...">
               <div class="card-body d-flex flex-column gap-2 align-items-start">
              <h5 class="card-title h3">${catInfo.title}</h5>
             <p class="card-text"><span class="fw-bold">${catInfo.price}$</span></p>
             <span class="d-block">${stars}</span>
             <a class="card-link btn btn-primary  w-100" href="productDetails.html?search=${catInfo.title}">More Details</a>
          </div>
     </div>
     </div>
    
    `;
   }).join(" ");

   document.querySelector(".categoryInfo .row").innerHTML=result;
  
}

displayCategoryInfo();



