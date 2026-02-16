fetch("profile.json")
    .then(response => response.json())
    .then(data => {
        // Jméno
        document.querySelector("#name").textContent = data.name;

        // Dovednosti
        const skillsList = document.querySelector("#skills");
        data.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        // Zájmy
        const interestsSection = document.querySelector("#interests");
        if (data.interests) {
            data.interests.forEach(interest => {
                const p = document.createElement("p");
                p.textContent = interest;
                interestsSection.appendChild(p);
            });
        }

        // Projekty (bonus)
        const projectsSection = document.querySelector("#projects");
        if (data.projects) {
            data.projects.forEach(project => {
                const div = document.createElement("div");
                div.className = "project-card";
                div.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">Otevřít projekt</a>
                `;
                projectsSection.appendChild(div);
            });
        }

        // Kontakty
        const contactsSection = document.querySelector("#contacts");
        if (data.contacts) {
            data.contacts.forEach(contact => {
                const div = document.createElement("div");
                div.className = "contact-item";
                div.innerHTML = `
                    <strong>${contact.type}:</strong> <a href="${contact.link}" target="_blank">${contact.value}</a>
                `;
                contactsSection.appendChild(div);
            });
        }
    })
    .catch(error => {
        console.error("Chyba při načítání JSON:", error);
    });