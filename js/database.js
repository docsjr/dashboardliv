const Database = {
    patients: {},
    exams: [],
    documents: []
};

function saveDatabase() {
    localStorage.setItem(
        "dashboardliv_database",
        JSON.stringify(Database)
    );
}

function loadDatabase() {
    const data = localStorage.getItem(
        "dashboardliv_database"
    );

    if (!data) return;

    const parsed = JSON.parse(data);

    Database.patients = parsed.patients || {};
    Database.exams = parsed.exams || [];
    Database.documents = parsed.documents || [];
}

loadDatabase();