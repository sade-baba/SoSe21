namespace Randompoem { 

    let subjects: string [] = ["Harry, Herminse, Ron, Hagrid, Snape,Dumbledore"];
    let predicates: string [] = ["braut, liebt, studiert, hasst, zaubert,zerstört"];
    let objects: string [] = ["Zaubertränke, den Grimm, Lupin, Hogwarts, die Karte des Rumtreibers ,Dementoren"];
    
    console.log (subjects, predicates, objects); 

    for (let i: number = objects.length; i > 0; i--) {
    //console.log(i);

    let output: string = getVerse (subjects, predicates, objects);
    console.log(output); 
    }


    function getVerse (_subjects: string[], _predicates:string[], _objects: string[]): string {
        let verse: string = "";


        let rSubject: number = Math.floor (Math.random() * _subjects.length);
        let rPredicate: number = Math.floor (Math.random() * _predicates.length);
        let rObject: number = Math.floor (Math.random() * _objects.length);

        verse = _subjects.splice (rSubject, 1) + ""
        + _predicates.splice (rSubject, 1) + ""
        + _objects.splice (rObject, 1) + "!";

        return verse; 
    }
   
}

