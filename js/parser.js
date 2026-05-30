function extractPatient(text) {

    const nameMatch =
        text.match(
            /Sandro Norberto da Silva Pereira Junior/i
        );

    const birthMatch =
        text.match(
            /DN:\s*(\d{2}\/\d{2}\/\d{4})/i
        );

    const collectionMatch =
        text.match(
            /DATA COLETA:\s*(\d{2}\/\d{2}\/\d{4})/i
        );

    return {
        name: nameMatch
            ? nameMatch[0]
            : "",

        birthDate: birthMatch
            ? birthMatch[1]
            : "",

        collectionDate: collectionMatch
            ? collectionMatch[1]
            : ""
    };
}
function extractFerritin(text){

    const match =
        text.match(
            /Ferritina\s+(\d+[,.]?\d*)\s*ng\/mL/i
        );

    if(!match) return null;

    return {
        exam:"Ferritina",
        value:Number(
            match[1].replace(",",".")
        ),
        unit:"ng/mL"
    };
}
function extractHbA1c(text){

    const match =
        text.match(
            /Hemoglobina Glicada.*?(\d+[,.]?\d*)\s*%/is
        );

    if(!match) return null;

    return {
        exam:"Hemoglobina Glicada",
        value:Number(
            match[1].replace(",",".")
        ),
        unit:"%"
    };
}