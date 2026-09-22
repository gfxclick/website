document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    // LocalStorage থেকে আগের ডাটা লোড করা
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // স্ক্রিনে টাস্কগুলো প্রদর্শন করা
    const renderTasks = () => {
        todoList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            if (task.completed) {
                li.classList.add("completed");
            }

            // টাস্কের টেক্সট
            const textSpan = document.createElement("span");
            textSpan.textContent = task.text;
            textSpan.style.cursor = "pointer";
            
            // কাজের ওপর ক্লিক করলে সম্পন্ন/অসম্পন্ন টগল হবে
            textSpan.addEventListener("click", () => toggleTask(index));

            // ডিলিট বাটন
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "মুছুন";
            deleteBtn.className = "delete-btn";
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                deleteTask(index);
            });

            li.appendChild(textSpan);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    };

    // নতুন টাস্ক যোগ করা
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        if (text !== "") {
            tasks.push({ text: text, completed: false });
            saveTasks();
            renderTasks();
            todoInput.value = "";
        }
    });

    // টাস্ক স্ট্যাটাস টগল (Completed/Uncompleted)
    const toggleTask = (index) => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    };

    // টাস্ক মুছে ফেলা
    const deleteTask = (index) => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    };

    // LocalStorage-এ টাস্ক সেভ করে রাখা
    const saveTasks = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // প্রথমবার লোড হওয়ার সময় টাস্কগুলো দেখানো
    renderTasks();
});