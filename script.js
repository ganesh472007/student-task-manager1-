let members = [];
let tasks = [];


// ===========================
// ADD TEAM MEMBER
// ===========================

function addMember() {

    const input = document.getElementById("memberName");
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a member name 😊");
        return;
    }

    members.push({
        id: Date.now(),
        name: name
    });

    input.value = "";

    displayMembers();
    updateMemberDropdown();
}


// ===========================
// DISPLAY TEAM MEMBERS
// ===========================

function displayMembers() {

    const teamList = document.getElementById("teamList");

    teamList.innerHTML = "";

    if (members.length === 0) {
        teamList.innerHTML =
            '<div class="empty">No team members yet 👥</div>';
        return;
    }

    members.forEach(member => {

        const div = document.createElement("div");

        div.className = "member";

        div.innerHTML = `👤 ${member.name}`;

        teamList.appendChild(div);
    });
}


// ===========================
// UPDATE MEMBER DROPDOWN
// ===========================

function updateMemberDropdown() {

    const dropdown = document.getElementById("taskMember");

    dropdown.innerHTML =
        '<option value="">Assign to...</option>';

    members.forEach(member => {

        const option = document.createElement("option");

        option.value = member.id;
        option.textContent = member.name;

        dropdown.appendChild(option);
    });
}


// ===========================
// ADD TASK
// ===========================

function addTask() {

    const taskInput = document.getElementById("taskName");
    const memberDropdown = document.getElementById("taskMember");

    const taskName = taskInput.value.trim();
    const memberId = memberDropdown.value;

    if (taskName === "") {
        alert("Please enter a task 📝");
        return;
    }

    if (memberId === "") {
        alert("Please assign the task to a team member 👤");
        return;
    }

    const member = members.find(
        m => m.id == memberId
    );

    const task = {
        id: Date.now(),
        name: taskName,
        member: member.name,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";
    memberDropdown.value = "";

    displayTasks();
}


// ===========================
// DISPLAY TASKS
// ===========================

function displayTasks() {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    if (tasks.length === 0) {

        taskList.innerHTML =
            '<div class="empty">No tasks yet 🎯</div>';

        updateProgress();
        return;
    }

    tasks.forEach(task => {

        const div = document.createElement("div");

        div.className = "task";

        div.innerHTML = `

            <div class="task-info">

                <div class="task-name 
                    ${task.completed ? "completed" : ""}">
                    ${task.completed ? "✅" : "⏳"} ${task.name}
                </div>

                <div class="assigned">
                    Assigned to: ${task.member}
                </div>

            </div>

            <button 
                class="complete-btn"
                onclick="completeTask(${task.id})">
                ${task.completed ? "Undo" : "Complete"}
            </button>

            <button
                class="delete-btn"
                onclick="deleteTask(${task.id})">
                Delete
            </button>
        `;

        taskList.appendChild(div);
    });

    updateProgress();
}


// ===========================
// COMPLETE / UNDO TASK
// ===========================

function completeTask(id) {

    const task = tasks.find(
        task => task.id === id
    );

    if (task) {
        task.completed = !task.completed;
    }

    displayTasks();
}


// ===========================
// DELETE TASK
// ===========================

function deleteTask(id) {

    tasks = tasks.filter(
        task => task.id !== id
    );

    displayTasks();
}


// ===========================
// UPDATE PROGRESS
// ===========================

function updateProgress() {

    const progressBar =
        document.getElementById("progressBar");

    const progressText =
        document.getElementById("progressText");

    if (tasks.length === 0) {

        progressBar.style.width = "0%";

        progressText.textContent =
            "0% completed";

        return;
    }

    const completedTasks =
        tasks.filter(task => task.completed).length;

    const percentage =
        Math.round(
            (completedTasks / tasks.length) * 100
        );

    progressBar.style.width =
        percentage + "%";

    progressText.textContent =
        `${percentage}% completed (${completedTasks}/${tasks.length})`;
}


// ===========================
// INITIAL DISPLAY
// ===========================

displayMembers();
displayTasks();
