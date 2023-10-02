const buttonLeft = document.getElementById('buttonLeft')
const buttonRight = document.getElementById('buttonRight')
const elementButton = document.getElementById('elementBtn')
const slider = document.querySelector('.slider__row')
const slide = document.querySelector('.slide')
const circlecontainer = document.querySelector('.circles')

let animation
let fakeLast = document.getElementById('fakeLast')
let fakeFirst = document.getElementById('fakeFirst')


let slideArray = [...slider.children]
slideArray.pop()
slideArray.shift()


let circleArray =[...circlecontainer.children]

let margin = 10
let slideLength = slide.offsetWidth + margin
let SliderPosition = slideLength
slider.style.right = SliderPosition + 'px'


for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].addEventListener('click',circleScroll)
}


buttonLeft.addEventListener('click', scrollLeft)

elementButton.addEventListener('click', addNewElement)

buttonRight.addEventListener('click', scrollRight)


function addNewElement(){
    let element = document.createElement('span')
    element.innerHTML = slideArray.length + 1
    element.classList.add('slide')
    slider.appendChild(element)
    slideArray.push(element)
    fakeLast.innerHTML = parseInt(fakeLast.innerHTML)+1
    fakeFirst.before(element)


    let circle = document.createElement('span')
    circle.innerHTML = slideArray.length
    circle.classList.add('circle')
    circle.addEventListener('click',circleScroll)
    circlecontainer.appendChild(circle)
    circleArray.push(circle)
}



function circleScroll(){
    if(!animation){
        let magicNumber = parseInt(this.innerHTML)
        let oldClass = document.querySelector('.active')
        let oldnumber = parseInt(oldClass.innerHTML)
        if(magicNumber > oldnumber){
            oldClass.classList.remove('active')
            this.classList.add('active')
            let tempTimeout = magicNumber * slideLength
        animation = setInterval(()=>{
            if(SliderPosition == tempTimeout - 10)
            {
                clearInterval(animation)
                animation = null
            }
            SliderPosition = SliderPosition+10
            slider.style.right = SliderPosition + 'px'}, 1)
        }
        else if(magicNumber < oldnumber)
        {
            oldClass.classList.remove('active')
            this.classList.add('active')
            let tempTimeout = magicNumber * slideLength
            animation = setInterval(()=>{
                if(SliderPosition == tempTimeout + 10)
                {
                    clearInterval(animation)
                    animation = null
                }
                SliderPosition = SliderPosition-10
                slider.style.right = SliderPosition + 'px'
            }, 1)

        }else if
        (magicNumber == oldnumber){
            animation = null
            return
        }

        
    }
}




function scrollRight(){
    if(!animation){
        let tempTimeout = SliderPosition + slideLength -1
        animation = setInterval(()=>{
            if(SliderPosition == tempTimeout){
                if(SliderPosition == slideLength * slideArray.length +slideLength -1)
                {
                    SliderPosition = slideLength - 1
                    slider.style.right = SliderPosition + 'px'
                    clearInterval(animation)
                    circleChange(1, false)
                    animation = null
                }else{
                    clearInterval(animation)
                    circleChange(+1, true)
                    animation = null
                }
            }
            SliderPosition = SliderPosition+1
            slider.style.right = SliderPosition + 'px'
    }, 1)
}
}


function circleChange(num, state){
    num = parseInt(num)
    let oldClass = document.querySelector('.active')
    if(state){
        num = parseInt(oldClass.innerHTML)+ num
        let newClass = circleArray[num-1]
        console.log(newClass);
        newClass.classList.add('active')
        oldClass.classList.remove('active')
    }else{
        let newClass = circleArray[num-1]
        console.log(newClass);
        newClass.classList.add('active')
        oldClass.classList.remove('active')
    }
}


function scrollLeft(){
    if(!animation){
    let tempTimeout = SliderPosition - slideLength +1
            clearInterval(animation)
        animation = setInterval(()=>{
            if(SliderPosition == tempTimeout){
                if(SliderPosition == 1){
                    SliderPosition = slideLength * slideArray.length +1
                    slider.style.right = SliderPosition + 'px'
                    clearInterval(animation)
                    circleChange(circleArray.length, false)
                    animation = null
                } else {
                    clearInterval(animation)
                    circleChange(-1, true)
                    animation = null
                }
            }
            SliderPosition = SliderPosition-1
            slider.style.right = SliderPosition + 'px'
    }, 1)
}
}
