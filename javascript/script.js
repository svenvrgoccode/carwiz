let dropdownList = document.querySelectorAll('.select li a')
const dropdownContent = document.querySelectorAll('.poslovnica-contact')
let selectText = document.querySelectorAll('.select-text')

dropdownList.forEach((item)=>{
    item.addEventListener('mouseenter',(e)=>{
        dropdownList.forEach((item) => {
            item.classList.remove('active')
        })
        dropdownContent.forEach((content)=> {
            content.classList.remove('active')
        })
        e.target.classList.add('active')
        const content = e.target.nextElementSibling
        const poslovnica = content.querySelector('.poslovnica-contact')
        poslovnica.classList.add('active')
    })
})


selectText.forEach((selectTxt)=> {
    selectTxt.addEventListener('click',(e)=>{
        const clickedDropdown = e.target.nextElementSibling
        const allDropdowns = document.querySelectorAll('.select.active')
        const clickedSelectedText = e.currentTarget

        selectText.forEach((text)=>{
            if(text !== clickedSelectedText){
                text.classList.remove('active')
            }
        })
  
        allDropdowns.forEach((dropdown)=>{
            if(dropdown !== clickedDropdown){
                dropdown.classList.remove('active')
            }
        })

        selectTxt.classList.toggle('active')
        clickedDropdown.classList.toggle('active')

    })
})