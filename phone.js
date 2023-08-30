const loadPhone = async (searchText,isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones= data.data
    // console.log(phones)
    displayPhones(phones, isShowAll)
}

// rcv data close

// data stay and show start

const displayPhones = (phones, isShowAll) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    } else {
       showAllContainer.classList.add('hidden') 
    }
    
    if(!isShowAll){
        phones = phones.slice(0,12);
    }
    phones.forEach(phone =>{
        // console.log(phone);
        // 1 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList= `card bg-blue-100 p-6 shadow-xl`
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body ">
            <h2 class="card-title justify-center">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetails('${phone.slug}'); show_details_modal.showModal()" class="btn btn-primary">SHOW DETAILS</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard)
    })
    toggleLoadingSpiner(false);
}


// data stay and show close

const handleShowDetails = async (id) =>{
    // console.log(id)
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data

    showPhoneDetails(phone)
}

const showPhoneDetails =(phone) =>{
    console.log(phone)
    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML =`
      <div class="bg-sky-100 py-4 rounded-lg">
         <img class="mx-auto" src="${phone.image}"/>
      </div>
      <h2 class="mt-4 font-bold text-2xl">${phone.name}</h2>
      <p class="mt-1"><span class="font-bold">Storage:  </span>${phone?.mainFeatures?.storage || 'No Storage'}</p>
      <p class="mt-1"><span class="font-bold">Display Size:  </span>${phone?.mainFeatures?.displaySize || 'No Display'}</p>
      <p class="mt-1"><span class="font-bold">Chipset:  </span>${phone?.mainFeatures?.chipSet || 'No Chipset'}</p>
      <p class="mt-1"><span class="font-bold">Slug:  </span>${phone?.slug || 'No Slug'}</p>
      <p class="mt-1"><span class="font-bold">Release Date:  </span>${phone?.releaseDate || 'No Release Date'}</p>
      <p class="mt-1"><span class="font-bold">Brand:  </span>${phone?.brand || 'No Brand'}</p>
      <p class="mt-1"><span class="font-bold">GPS:  </span>${phone?.others?.GPS || 'No GPS'}</p>
    `
    

    // show_details_modal.showModal();
}

//  search button start

const handleSearch = (isShowAll) =>{
    toggleLoadingSpiner(true)
    const searchField= document.getElementById('search-input');
    const searchText = searchField.value;
    
    loadPhone(searchText,isShowAll)
}

const oppo = (isShowAll) =>{
    toggleLoadingSpiner(true)
    searchText='oppo'
    loadPhone(searchText,isShowAll)
} 
const samsung = (isShowAll) =>{
    toggleLoadingSpiner(true)
    searchText='samsung'
    loadPhone(searchText,isShowAll)
} 
const iphone = (isShowAll) =>{
    toggleLoadingSpiner(true)
    searchText='iphone'
    loadPhone(searchText,isShowAll)
} 
const huawei = (isShowAll) =>{
    toggleLoadingSpiner(true)
    searchText='huawei'
    loadPhone(searchText,isShowAll)
} 

//  search button end

// loading spiner start

const toggleLoadingSpiner = (isLoading) =>{
    const loadingSpiner = document.getElementById('loading-spiner');
    if(isLoading){
        loadingSpiner.classList.remove('hidden')
    } else{
        loadingSpiner.classList.add('hidden')
    }
}
//  loading spiner end

//  show all handle start

const handleShowAll = () =>{
    handleSearch(true)
    oppo(true)
    samsung(true)
    iphone(true)
    huawei(true)
}


//  show al handle end
// loadPhone();