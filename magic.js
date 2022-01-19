console.log('this is magic book')
showNotes()
let form=document.getElementById('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('this is submit ')
   let textarea=document.getElementById('textArea')
   console.log(textarea.value)
   let input=document.getElementById('input')
   console.log(input.value)
   noteObject={
       title:input.value,
       note:textarea.value
   }
   console.log(noteObject)
   let notes=localStorage.getItem('notes')
   console.log(notes)
   if(notes==null){
       notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(noteObject);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
    input.value=""
    textarea.value=""
})

function showNotes(){
    let html="";
    let notes=localStorage.getItem('notes')
    if(notes==null){
     notesObj=[];
let delet=document.getElementById('delete');
delet.style.display='none'
}
else{
        let delet=document.getElementById('delete');
        delet.style.display='inline-block'

        notesObj=JSON.parse(notes);
    }
    let card=document.getElementById('card')
    notesObj.forEach((element) => {
        html+=`
        <div class="cardElem" >
        <h3>${element.title}</h3>
        <p>${element.note}</p>
      </div>
        `
    });

    card.innerHTML=html;
    
}

let delet=document.getElementById('delete');
delet.addEventListener('click',()=>{
    
    localStorage.clear()
    showNotes()
})

