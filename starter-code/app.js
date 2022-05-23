const toggleBtn = document.querySelector('.toggle-btn');
const toggleContent = document.querySelector('.toggle-content');
const closeBtn = document.querySelector('.close-btn');
const links = document.querySelectorAll('.link');

const destinationContent = document.querySelector('.destination-content');
const destinationLinks = document.querySelectorAll('.destination-link');
const marsinfo = document.querySelector('.mars-info')
const europainfo = document.querySelector('.europa-info')
const titaninfo = document.querySelector('.titan-info')
const mooninfo = document.querySelector('.moon-info')
const info = document.querySelectorAll('.information');
const destinationImg = document.querySelector('.destination-img')

toggleBtn.addEventListener('click', function(){
    toggleContent.classList.add('toggle-active');
})
closeBtn.addEventListener('click', function(){
    toggleContent.classList.remove('toggle-active');
})

links.forEach((link)=> {
    const href = link.firstElementChild.href;
    const bodyhref = document.baseURI;
    
    if(bodyhref.includes('index.html')){
        links[0].style.borderBottom = `${3}px solid #fff`
    }
    
    if(bodyhref.includes('destination.html')){
        links[1].style.borderBottom = `${3}px solid #fff`
    }
    
    if(bodyhref.includes('crew.html')){
        links[2].style.borderBottom = `${3}px solid #fff`
    }
    
    if(bodyhref.includes('technology.html')){
        links[3].style.borderBottom = `${3}px solid #fff`
    }
});


destinationLinks.forEach((link)=>{
    link.addEventListener('click', function(e){
        const element = e.currentTarget;
        if(element.classList.contains('mars')){
            info.forEach((info)=>{
                info.classList.remove('show-destination')
            })
            destinationLinks.forEach((destination)=>{
                destination.classList.remove('active-destination')
            })
            marsinfo.classList.add('show-destination')
            destinationImg.src = `./starter-code/assets/destination/image-mars.png`
            element.classList.add('active-destination')
        }
        if(element.classList.contains('europa')){
            console.log('ok');
            info.forEach((info)=>{
                info.classList.remove('show-destination')
            })
            destinationLinks.forEach((destination)=>{
                destination.classList.remove('active-destination')
            })
            europainfo.classList.add('show-destination');
            destinationImg.src = `./starter-code/assets/destination/image-europa.png`
            element.classList.add('active-destination')
        }
        if(element.classList.contains('titan')){
            console.log('ok');
            info.forEach((info)=>{
                info.classList.remove('show-destination')
                
            })
            destinationLinks.forEach((destination)=>{
                destination.classList.remove('active-destination')
            })
            element.classList.add('active-destination')
            destinationImg.src = `./starter-code/assets/destination/image-titan.png`
            titaninfo.classList.add('show-destination')
        }
        if(element.classList.contains('moon')){
            console.log('ok');
            info.forEach((info)=>{
                info.classList.remove('show-destination')
            })
            destinationLinks.forEach((destination)=>{
                destination.classList.remove('active-destination')
            })
            mooninfo.classList.add('show-destination')
            destinationImg.src = `./starter-code/assets/destination/image-moon.png`
            element.classList.add('active-destination')
        }

    })
})


window.addEventListener('DOMContentLoaded',function(){
    if(document.baseURI.includes('destination')){

        mooninfo.classList.add('show-destination');
        destinationLinks.forEach((link)=>{
            if(link.classList.contains('moon')){
                link.classList.add('active-destination')
            }
        })
    }
})


// crew


const crewContainer = document.querySelectorAll('.crew-container');
const crewImage = document.querySelectorAll('.crew-image');
const dots = document.querySelectorAll('.dot');

crewContainer.forEach((container,index)=>{
    container.style.transform = `${index * 100}%`
})
crewImage.forEach((image,index)=>{
    image.style.transform = `${index * 100}%`
})

let counter = 0;
function carousel(){
    
    
    if(counter > crewContainer.length-1){
        counter = 0;
    }
    if(counter < 0){
        counter = crewContainer.length - 1
    }

    if(counter > crewImage.length-1){
        counter = 0;
    }
    if(counter < 0){
        counter = crewImage.length - 1
    }
    crewContainer.forEach((container)=>{
        container.style.transform = `translateX(-${counter * 100}%)`;
    })
    crewImage.forEach((image)=>{
        image.style.transform = `translateX(-${counter * 100}%)`;
    })
  
    crewImage.forEach((img)=>{
        img.style.visibility = 'hidden';
    })
    crewImage[counter].style.visibility = 'visible';

    dots.forEach((dot)=>{
        dot.classList.remove('active-dot');
    })
    dots[counter].classList.add('active-dot')
}



window.addEventListener('DOMContentLoaded',function(){
    if(document.baseURI.includes('crew')){
        crewImage[0].style.visibility = 'visible';
        dots[0].classList.add('active-dot')
        setInterval(function(){
            carousel()
            counter ++;
        },2000)
        
    }
})

dots.forEach((dot)=>{
    dot.addEventListener('click',function () {
        if(dot.classList.contains('dot1')){
            counter = 0
        }
        if(dot.classList.contains('dot2')){
            counter = 1
        }
        if(dot.classList.contains('dot3')){
            counter = 2
        }
        if(dot.classList.contains('dot4')){
            counter = 3
        }
        carousel()
    })
})

// technology
const btns = document.querySelectorAll('.number');
const infoContainer = document.querySelector('.number-info');
const techImg = document.querySelector('.technology-img');
const landscapeContainer = document.querySelector('.landscape-img');

btns.forEach((btn)=>{
    btn.addEventListener('click',async function(e){
    const element = e.currentTarget;
    const id = element.dataset.id;
   
    const response =await fetch('starter-code/data.json');
    const data = await response.json();
    const {technology} = data;
    console.log(technology);
    let {name,description:desc} = technology[0];
    let{portrait, landscape} = technology[0].images 
    
    btns.forEach((btn)=>{
        btn.classList.remove('activenumber')
    })
    if(id === '1'){
            let {name:name1,description:desc1} = technology[0];
            let{portrait:portrait1, landscape:landscape1} = technology[0].images 
            name = name1;
            desc = desc1;
            portrait =portrait1;
            landscape = landscape1;
            
            btns[0].classList.add('activenumber')
        }
        if(id === '2'){
            let {name:name2,description:desc2} = technology[1];
            let{portrait:portrait2, landscape:landscape2} = technology[1].images 
            name = name2;
            desc = desc2;
            portrait =portrait2;
            landscape = landscape2;
            btns[1].classList.add('activenumber')
        }
        if(id === '3'){
            const {name:name3,description:desc3} = technology[2];
            const{portrait:portrait3, landscape:landscape3} = technology[2].images 
            name = name3;
            desc = desc3;
            portrait =portrait3;
            landscape = landscape3;
            btns[2].classList.add('activenumber')
        }

        infoContainer.innerHTML = `<p class="allcaps">the terminology</p>
        <h1 class="technology-name allcaps">${name}</h1>
        <p class="technology-text">
           ${desc}
        </p>`
        techImg.src = `${portrait}`;
        landscapeContainer.src = `${landscape}`;
   
    })
})
window.addEventListener('DOMContentLoaded',function(){
    if(document.baseURI.includes('technology')){
        btns[0].classList.add('activenumber');
        infoContainer.innerHTML = ` <p class="allcaps">the terminology</p>
        <h1 class="technology-name allcaps">launch vehicle</h1>
        <p class="technology-text">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
            payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
            it's quite an awe-inspiring sight on the launch pad!
        </p>`
        
    }
})