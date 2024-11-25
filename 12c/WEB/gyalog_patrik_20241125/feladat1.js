import input from "./input.js";

const students = [];
async function appController(){
        console.log("--- Menü --- \n")
        console.log("1 - adatok kiírása, 2 - adat hozzáadása")
        const option = await input("Opció:");
    
        switch(option){
            case "1":
                printStudents();
                break;
            case "2":
                addStudent();
                break;
            case "exit":
                console.log("Kilépés...")
                run = false;
                break;
            default:
                console.log("Nincs ilyen opció!");
                break;
        }
}

function printStudents(){
    if(students.length){
        console.log("--- Diákok --- \n")
        students.forEach((student)=> {
            console.log(`Diák: ${student.name} Email: ${student.email}`)
        })
    } else {
        console.log("Nincsenek diákok!")
    }
    appController();
}

async function addStudent(){
    console.log("--- Diák hozzáadása --- \n")
    const name = await input("Adj meg egy nevet:");
    const email = await input("Adj meg egy e-mailt:");

    students.push(
        {name,email}
    );
    printStudents();
}

appController();