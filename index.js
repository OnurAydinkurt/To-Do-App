let input = document.querySelector('.enteredList');
let addBtn = document.querySelector('.addList');
let task = document.querySelector('.task');


addBtn.addEventListener('click',() => {
    
    if (input.value.trim() !=0){
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `
        <p>${input.value}</p>
              <div class="itemsbtn">
                 <i class="fa-solid fa-pen-to-square"></i>
                 <i class="fa-solid fa-xmark"></i>
              </div>
        `
        task.appendChild(newItem);
               
        localStorage.setItem('localStorage', JSON.stringify(input.value));

    } else{
        alert('Lütfen Bir Görev Giriniz.')
    }
    
})

task.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

task.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('complated');
    }
})
