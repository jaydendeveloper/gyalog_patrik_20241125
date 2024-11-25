import input from "./input.js";

const timetable = {
    hétfő:[],
    kedd:[],
    szerda:[],
    csütörtök:[],
    péntek:[]
}

async function appController(){
    console.log("--- Menü --- \n");
    console.log("1 - óra hozzáadása 2 - órarend");
    const option = await input("Opció: ");

    switch(option){
        case "1":
            let day;
            const validDays = ["hétfő", "kedd", "szerda", "csürtörtök", "péntek"];
            while(!validDays.includes(day)){
                day = await input("Nap: ")
            }

            addLesson(day);
            break;
        case "2":
            printTimetable();
            break;
        default: 
            console.log("Nincs ilyen opció!");
            break;
    }
}


async function addLesson(day){
    console.log("kilép - kilépés")
    let lesson;

    while(lesson != "kilép"){
        lesson = await input();
        if(lesson != "kilép"){
            timetable[day].push(lesson);
        }
    }

    appController();
}

async function printTimetable(){
    Object.keys(timetable).forEach(key => {
        let str = `${key}: `;
        
        timetable[key].length ? timetable[key].forEach((lesson, index) => {
            str += `${index+1}. óra ${lesson} `;
        }) : str += "Nincs óra ezen a napon!";
        console.log(str);
    })

    appController();
}


appController();