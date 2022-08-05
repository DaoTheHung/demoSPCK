let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});






const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tours = [
    {
        name: "Hai Phong" ,
    },
    {
        name: "Da Nang",
    },
    {
        name: "Quy Nhon",
    },
    {
        name: "Sa pa",
    },
    {
        name: "Phu Quoc",
    },
    {
        name: "Thanh Hoa",
    }
];


const click = $('#click').onclick = function() {
     
    const search = $('#search').value;
    const price = $('#price').value;
    const date = $('#date').date;

     if(date == ""){
        alert('Vui lòng chọn ngày');
        return;

     }
    if(price == ""){
        alert('Vui lòng nhập đầy đủ thông tin ');
        return;
    }
    
    
    console.log(search)
    let arr = true;

    for(let tour = 0; tour < tours.length; tour++){
        
         
        if(tours[tour].name.toUpperCase() == search.toUpperCase()){
            window.location = ('./demo.html');
             arr = false;
            
        }
    }
    if(arr == true){
        alert(`Không tìm thấy kết quả cho từ khóa"${search}"`);
        
}
}


// play/pause video
// let video = document.querySelector('.video-wrapper video');
// document.getElementById('play-btn').addEventListener('click', () => {
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// });

