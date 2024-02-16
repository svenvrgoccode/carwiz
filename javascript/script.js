const dropdownLists = document.querySelectorAll('.select li a')
const dropdownContents = document.querySelectorAll('.poslovnica-contact')
const selectTexts = document.querySelectorAll('.select-text')
const selects = document.querySelectorAll('.select')


function closeAllSelects() {
    selects.forEach((select)=>{
        select.classList.remove('active')
    });
    selectTexts.forEach((selectText) => {
        selectText.classList.remove('active')
    })
}

function clearList(){
    dropdownLists.forEach((list)=>{
        list.classList.remove('active')
    })
}

function clearContact() {
    dropdownContents.forEach((contact)=>{
        contact.classList.remove('active')
    })
}


selectTexts.forEach((selectText,index)=>{
    selectText.addEventListener('click',(e)=>{
        const listA = selects[index].querySelectorAll('.select li a')
        const listPoslovnica = selects[index].querySelectorAll('.poslovnica-contact')
        const firstPoslovnica = listPoslovnica[0]
        const firstA = listA[0]

        if(!selects[index].classList.contains('active')){

            closeAllSelects();

            selects[index].classList.toggle('active');
            e.currentTarget.classList.toggle('active')

            firstA.classList.add('active')
            firstPoslovnica.classList.add('active')
        }else{
            selects[index].classList.remove('active');
            e.currentTarget.classList.remove('active')
            clearList()
            clearContact()


        }
    })
})

dropdownLists.forEach((listItem,index)=>{
    listItem.addEventListener('mouseenter',(e)=>{
        clearList()
        listItem.classList.add('active')
        clearContact()
        dropdownContents[index].classList.add('active')
    })
})


document.addEventListener('click',(e)=> {
    const isInsideSelect = Array.from(selects).some((select) => select.contains(e.target))
    const isInsideSelectText = Array.from(selectTexts).some((selectText) => selectText.contains(e.target))

    if(!isInsideSelect && !isInsideSelectText){
        closeAllSelects();
        clearList()
        clearContact()
    }
})


const date1 = document.querySelector('#datepicker1') 
const date2 = document.querySelector('#datepicker2') 

let currentDate = new Date();
let formattedDate = (parseInt(currentDate.toISOString().slice(5,7), 10)) + '/' + (parseInt(currentDate.toISOString().slice(8,10), 10)) + '/' + currentDate.toISOString().slice(0,4);

date1.value = formattedDate;

let threeDaysAhead = new Date(currentDate);
threeDaysAhead.setDate(currentDate.getDate() + 3);

let formattedThreeDaysAhead = (parseInt(threeDaysAhead.toISOString().slice(5, 7), 10)) + '/' + (parseInt(threeDaysAhead.toISOString().slice(8, 10), 10)) + '/' + threeDaysAhead.toISOString().slice(0, 4);

date2.value = formattedThreeDaysAhead;

date1.addEventListener("keydown", function(event) {
    event.preventDefault();
});
date2.addEventListener("keydown", function(event) {
    event.preventDefault();
});