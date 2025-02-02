const btnE1= document.getElementById("btn");
const appE1= document.getElementById("App");

let notes =[];

function createNoteE1(id , content){
    const element= document.createElement("textarea");
    element.classList.add("note");
    element.placeholder="Empty Note";

    element.value =content;

    element.addEventListener("dblclick",()=>{
        const warning = confirm("do you want to delete this note?");
        if(warning){
            deleteNote(id,element);
        }
    });

    element.addEventListener("input",()=>{
        updateNote(id,content);
    });


    return element;
}
function deleteNote(id, element){

    notes = notes.filter((note)=>note.id!=id);
    appE1.removeChild(element);

}

function updateNote(id , content){

    const target = notes.filter((note) => note.id == id)[0];
    target.content=content;
}

function addNote(){  //id and content

    const noteObj ={

        id: Math.floor(Math.random()* 1000),
        content: ""

    };

    const noteE1= createNoteE1(noteObj.id,noteObj.content);
    appE1.insertBefore(noteE1,btnE1);

    notes.push(noteObj);

}



btnE1.addEventListener("click",addNote);




