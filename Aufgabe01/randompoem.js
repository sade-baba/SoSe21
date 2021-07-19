var Randompoem;
(function (Randompoem) {
    let subjects = ["Harry, Herminse, Ron, Hagrid, Snape,Dumbledore"];
    let predicates = ["braut, liebt, studiert, hasst, zaubert,zerstört"];
    let objects = ["Zaubertränke, den Grimm, Lupin, Hogwarts, die Karte des Rumtreibers ,Dementoren"];
    console.log(subjects, predicates, objects);
    for (let i = objects.length; i > 0; i--) {
        //console.log(i);
        let output = getVerse(subjects, predicates, objects);
        console.log(output);
    }
    function getVerse(_subjects, _predicates, _objects) {
        let verse = "";
        let rSubject = Math.floor(Math.random() * _subjects.length);
        let rPredicate = Math.floor(Math.random() * _predicates.length);
        let rObject = Math.floor(Math.random() * _objects.length);
        verse = _subjects.splice(rSubject, 1) + ""
            + _predicates.splice(rSubject, 1) + ""
            + _objects.splice(rObject, 1) + "!";
        return verse;
    }
})(Randompoem || (Randompoem = {}));
//# sourceMappingURL=randompoem.js.map