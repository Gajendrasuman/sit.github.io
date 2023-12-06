// Services Animation
const bubox = document.querySelector('#services .bubox')
setInterval(()=>{
    cls = ['bubble', 'box']
    bub = document.createElement('div')
    bub.setAttribute('class',cls[Math.floor(Math.random()*2)])
    let lf = Math.floor(Math.random()*95)
    let size = Math.floor(Math.random()*(7 - 3) + 3)
    bub.style="left: "+lf+"%; height: "+size+"rem; width: "+size+"rem;";
    bubox.appendChild(bub)
    let box =  document.querySelectorAll('#services .bubox .box')
    let bubble =  document.querySelectorAll('#services .bubox .bubble')
    if(bubble.length + box.length > 10){
        bubox.removeChild(bubox.firstChild)
    }
    box.forEach(e => {
        if(e.style.top >= "110%"){
            e.remove()
        }
    });
    bubble.forEach(e => {
        if(e.style.top >= "110%"){
            e.remove()
        }
    });

},2000)
const service_cards = document.querySelectorAll('#services .card-container .card-box .card')
service = (id)=>{
    if(id.classList.contains('active')){
        Na=0 
    } 
    else{
        service_cards.forEach(card => {
            card.classList.remove('active');
        })
        id.classList.add('active')
        const file = "./Data/js/config.json"
        fetch(file).then(
            response =>{
                if(response.ok){
                    return response.json()
                }
            }
        ).then(data =>
            {
                for(i = 0; i < service_cards.length; i++){
                    e = data.container.services[i];
                    if(e.title == id.getAttribute('data-text')){
                        document.querySelector('#services .card-display .card .icon img').setAttribute('src', e.img)
                        document.querySelector('#services .card-display .card .service-title h1').innerText = e.title
                        document.querySelector('#services .card-display .card .service-details p').innerText = e.data
                    }

                }
            })
    }
        
}


// Portfolio Slider
cards = document.querySelectorAll('#portfolio .card');
function left(){
    card_count = cards.length
    current_portfolio = parseInt(document.querySelector('#portfolio .active-portfolio').getAttribute('data-count'))
    if(current_portfolio > 1){
        rem_portfolio = document.querySelector('#portfolio .active-portfolio').classList.remove('active-portfolio')
        cards[current_portfolio - 2].classList.add('active-portfolio')
        cards[current_portfolio - 2].style.ZIndex = "99";
        img = document.querySelector('#portfolio .background img')
        setTimeout(()=>{
            img.style.transition = "none";
            img.style.transition = "top 0.35s ease-in-out";
            img.style.top = "100%";
        },0)
        setTimeout(()=>{
            img.style.transition = "none";
            img.style.left = "100%";
            img.setAttribute('src', document.querySelector('#portfolio .active-portfolio .image img').getAttribute('src'))
        },350)
        setTimeout(()=>{
            img.style.top = 0;
        },351)

        setTimeout(()=>{
            img.style.transition = "left 0.35s ease-in-out";
            img.style.left = 0;
        },352)
    }
    current_portfolio = parseInt(document.querySelector('#portfolio .active-portfolio').getAttribute('data-count'))
    _left = 4 - (current_portfolio * 2)
    _right = 34;
    index = 1;
    z_reverse = card_count;
    cards.forEach(card => {
        if(card.classList.contains('active-portfolio')){
            card.style.left = "calc(50% - 15rem)";
            card.style.zIndex = "99";
        }
        else if(parseInt(card.getAttribute('data-count')) <= current_portfolio){
            card.style.left = _left + "rem";
            card.style.zIndex = index;
            index += 1;
            _left += 2;
        }
        else if(parseInt(card.getAttribute('data-count')) >= current_portfolio){
            card.style.left = 'calc(100% - ' + _right + "rem)";
            card.style.zIndex = z_reverse;
            z_reverse -= 1;
            _right -= 2;
        }
    })
}

function right(){
    card_count = cards.length
    current_portfolio = parseInt(document.querySelector('#portfolio .active-portfolio').getAttribute('data-count'))
    if(current_portfolio < card_count){
        rem_portfolio = document.querySelector('#portfolio .active-portfolio').classList.remove('active-portfolio')
        cards[current_portfolio].classList.add('active-portfolio')
        cards[current_portfolio].style.ZIndex = "99";
        img = document.querySelector('#portfolio .background img')
        setTimeout(()=>{
            img.style.transition = "none";
            img.style.transition = "top 0.35s ease-in-out";
            img.style.top = "100%";
        },0)
        setTimeout(()=>{
            img.style.transition = "none";
            img.style.left = "100%";
            img.setAttribute('src', document.querySelector('#portfolio .active-portfolio .image img').getAttribute('src'))
        },350)
        setTimeout(()=>{
            img.style.top = 0;
        },351)

        setTimeout(()=>{
            img.style.transition = "left 0.35s ease-in-out";
            img.style.left = 0;
        },352)
    }
    current_portfolio = parseInt(document.querySelector('#portfolio .active-portfolio').getAttribute('data-count'))
    _left = 4 - (current_portfolio * 2)
    _right = 34;
    index = 1;
    z_reverse = card_count;

    cards.forEach(card => {
        if(card.classList.contains('active-portfolio')){
            card.style.left = "calc(50% - 15rem)"
            card.style.zIndex = "99";
        }
        else if(parseInt(card.getAttribute('data-count')) < current_portfolio){
            card.style.left = _left + "rem";
            card.style.zIndex = index;
            _left += 2;
            index += 1;
        }
        else if(parseInt(card.getAttribute('data-count')) >= current_portfolio){
            card.style.left = 'calc(100% - ' + _right + "rem)";
            card.style.zIndex = z_reverse;
            z_reverse -= 1;
            _right -= 2;
        }
    })
}

// Testimonial Slider
const slides = document.querySelectorAll('#testimonial .container .slides');
setInterval(()=>{
    slide_count = slides.length;
    slides.forEach(slide => {
        if(slide.classList.contains('active-slide')){
            current_slide = parseInt(slide.getAttribute('data-count'))
            slide.setAttribute('style','animation: zoom-out 1s ease-in')
            setTimeout(()=>{
                slide.classList.remove('active-slide')
                slide.removeAttribute('style')
            }, 999)
            if(parseInt(slide.getAttribute('data-count')) + 1 == slide_count){
                setTimeout(()=>{
                    slides[0].classList.add('active-slide')
                    slides[0].setAttribute('style','animation: zoom-out 1s reverse ease-in')
                }, 1000)
                setTimeout(()=>{
                    slides[0].removeAttribute('style')
                }, 2000)
                a="#"
                c="#"
                while(a.length + c.length <= 13){
                    b = Math.floor(Math.random()*15)
                    if(a.length <= 6){
                        if(b == 10){
                            a += "a"
                        }
                        else if(b == 11){
                            a += "b"
                        }
                        else if(b == 12){
                            a += "c"
                        }
                        else if(b == 13){
                            a += "d"
                        }
                        else if(b == 11){
                            a += "e"
                        }
                        else if(b == 15){
                            a += "f"
                        }
                        else{
                            a += b
                        }
                    }
                    else{
                        if(b == 10){
                            c += "a"
                        }
                        else if(b == 11){
                            c += "b"
                        }
                        else if(b == 12){
                            c += "c"
                        }
                        else if(b == 13){
                            c += "d"
                        }
                        else if(b == 11){
                            c += "e"
                        }
                        else if(b == 15){
                            c += "f"
                        }
                        else{
                            c += b
                        }
                    }
                    
                }
                const sl = document.querySelector('#testimonial .container')
                sl.setAttribute('style', 'background: linear-gradient(to right, '+a+', '+c+');')
                a = "#"
                c = "#"
            }
            else{
                setTimeout(()=>{
                    slides[current_slide + 1].classList.add('active-slide')
                    slides[current_slide + 1].setAttribute('style','animation: zoom-out 1s reverse ease-in')
                }, 1000)
                setTimeout(()=>{
                    slides[current_slide + 1].removeAttribute('style')
                }, 2000)
                a="#"
                c="#"
                while(a.length + c.length <= 13){
                    b = Math.floor(Math.random()*15)
                    if(a.length <= 6){
                        if(b == 10){
                            a += "a"
                        }
                        else if(b == 11){
                            a += "b"
                        }
                        else if(b == 12){
                            a += "c"
                        }
                        else if(b == 13){
                            a += "d"
                        }
                        else if(b == 11){
                            a += "e"
                        }
                        else if(b == 15){
                            a += "f"
                        }
                        else{
                            a += b
                        }
                    }
                    else{
                        if(b == 10){
                            c += "a"
                        }
                        else if(b == 11){
                            c += "b"
                        }
                        else if(b == 12){
                            c += "c"
                        }
                        else if(b == 13){
                            c += "d"
                        }
                        else if(b == 11){
                            c += "e"
                        }
                        else if(b == 15){
                            c += "f"
                        }
                        else{
                            c += b
                        }
                    }
                    
                }
                const sl = document.querySelector('#testimonial .container')
                sl.setAttribute('style', 'background: linear-gradient(to right, '+a+', '+c+');')
                a = "#"
                c = "#"
            }
        }
        
    })
},8 * 1000)

// Blogs
document.querySelector('#blogs .count h1').innerText = document.querySelectorAll('#blogs .blog').length
function blog(n){
    const data_type = n.getAttribute('data-type');
    const cat = document.querySelectorAll('#blogs .main .blog')
    const total = document.querySelectorAll('#blogs .blog').length
    show = 0
    hide = 0
    if(data_type == 'all'){
        cat.forEach(type=>{
            if(type.classList.contains('hide')){
                type.classList.remove('hide');
                type.style.display = "inline-block";
                type.classList.add('show');
            }
            show += 1
            document.querySelector('#blogs .count h1').innerText = show
        })

    }
    else{
        cat.forEach(type=>{
            const d_type = type.getAttribute('data-type')
            if(d_type == data_type && type.classList.contains('hide') == true){
                type.classList.remove('hide')
                type.style.display = "inline-block";
                type.classList.add('show')
                show += 1;
                document.querySelector('#blogs .count h1').innerText = show
            }
            else if(d_type != data_type){
                type.classList.remove('show')
                type.classList.add('hide')
                type.style.display = "none";
                hide += 1;
                document.querySelector('#blogs .count h1').innerText = total - hide
            }
        })
    }
    if(z == 0){
        document.querySelector('#bolgs .warning').style.display = "block";
    }
    else{
        document.querySelector('#bolgs .warning').style.display = "none";
    }
}
// Contact
function contact(n){
    if(n.classList.contains('name') || n.id == 'name'){
        const inputs = document.querySelector('#contact .name input')
        const label = document.querySelector('#contact .name label')
        if(inputs.value != ''){
            label.setAttribute('style', 'top: -1.5rem;color: #fff')
        }

    }
}