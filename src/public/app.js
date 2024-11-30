const API_URL = '/api/json'; // Base URL for the backend API

// DOM Elements
const personForm = document.getElementById('personForm');
const personIdInput = document.getElementById('personId');
const nameInput = document.getElementById('name');
const dobInput = document.getElementById('dateOfBirth');
const peopleList = document.getElementById('peopleList');

// Fetch and display all people
async function fetchPeople() {
    const response = await fetch(API_URL);
    const people = await response.json();
    peopleList.innerHTML = ''; // Clear existing list
    people.forEach((person) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${person.name} (DOB: ${person.dateOfBirth})`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.onclick = () => loadPersonIntoForm(person);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deletePerson(person.id);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        peopleList.appendChild(listItem);
    });
}

// Load a person's details into the form for editing
function loadPersonIntoForm(person) {
    personIdInput.value = person.id;
    nameInput.value = person.name;
    dobInput.value = person.dateOfBirth;
}

// Handle form submission for adding/updating
personForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const personData = {
        name: nameInput.value,
        dateOfBirth: dobInput.value,
    };
    const personId = personIdInput.value;

    if (personId) {
        // Update existing person
        await fetch(`${API_URL}/${personId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(personData),
        });
    } else {
        // Add new person
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(personData),
        });
    }

    personForm.reset();
    fetchPeople();
});

// Delete a person
async function deletePerson(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchPeople();
}

// Initial fetch
fetchPeople();
