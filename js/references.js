let ReferenceTable = {};

fetch("data/references.json")
    .then(r => r.json())
    .then(data => {
        ReferenceTable = data;
    });