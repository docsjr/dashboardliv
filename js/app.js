function saveExam(patient,result){

    Database.exams.push({

        patientName:
            patient.name,

        birthDate:
            patient.birthDate,

        collectionDate:
            patient.collectionDate,

        exam:
            result.exam,

        value:
            result.value,

        unit:
            result.unit
    });

    saveDatabase();
}
function classifyExam(
    examName,
    value
){

    const ref =
        ReferenceTable[examName];

    if(!ref)
        return "SEM_REFERENCIA";

    const min =
        ref.male.min;

    const max =
        ref.male.max;

    if(value < min)
        return "BAIXO";

    if(value > max)
        return "ALTO";

    return "NORMAL";
}