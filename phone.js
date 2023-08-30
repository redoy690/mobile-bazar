const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones= data.data
    // console.log(phones)
    displayPhones(phones)
}

// rcv data close

// data stay and show start

const displayPhones = phones =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden')
    } else {
       showAllContainer.classList.add('hidden') 
    }
    phones = phones.slice(0,12);
    phones.forEach(phone =>{
        console.log(phone);
        // 1 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList= `card bg-blue-100 p-6 shadow-xl`
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body ">
            <h2 class="card-title justify-center">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard)
    })
    toggleLoadingSpiner(false);
}


// data stay and show close

//  search button start

const handleSearch = () =>{
    toggleLoadingSpiner(true)
    const searchField= document.getElementById('search-input');
    const searchText = searchField.value;
    loadPhone(searchText)
}

const oppo = () =>{
    toggleLoadingSpiner(true)
    searchText='oppo'
    loadPhone(searchText)
} 
const samsung = () =>{
    toggleLoadingSpiner(true)
    searchText='samsung'
    loadPhone(searchText)
} 
const iphone = () =>{
    toggleLoadingSpiner(true)
    searchText='iphone'
    loadPhone(searchText)
} 
const huawei = () =>{
    toggleLoadingSpiner(true)
    searchText='huawei'
    loadPhone(searchText)
} 

//  search button end

// loading spiner

const toggleLoadingSpiner = (isLoading) =>{
    const loadingSpiner = document.getElementById('loading-spiner');
    if(isLoading){
        loadingSpiner.classList.remove('hidden')
    } else{
        loadingSpiner.classList.add('hidden')
    }
}

// loadPhone();