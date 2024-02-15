let dropdownList = document.querySelectorAll('.select li a')
const dropdownContent = document.querySelectorAll('.poslovnica-contact')

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