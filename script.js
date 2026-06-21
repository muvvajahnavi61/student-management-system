const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");

window.onload = loadStudents;

async function loadStudents() {
    try {
        const response = await fetch("http://localhost:8081/students");
        const students = await response.json();

        tableBody.innerHTML = "";

        students.forEach(student => {
            addRow(student);
        });

    } catch (error) {
        console.error(error);
    }
}

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    try {
        const response = await fetch("http://localhost:8081/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const savedStudent = await response.json();

        addRow(savedStudent);

        form.reset();

        alert("Student Added Successfully");

    } catch (error) {
        console.error(error);
    }
});

function addRow(student) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
    `;

    tableBody.appendChild(row);
}