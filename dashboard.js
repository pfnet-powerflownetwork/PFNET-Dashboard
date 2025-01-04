document.addEventListener("DOMContentLoaded", () => {
    const statusData = document.getElementById("status-data");
    const tasksTableBody = document.querySelector("#tasks-table tbody");

    async function fetchNetworkStatus() {
        const response = await fetch('/api/status');
        const status = await response.json();
        statusData.innerHTML = `
            <p>Active Nodes: ${status.activeNodes}</p>
            <p>Tasks Pending: ${status.pendingTasks}</p>
        `;
    }

    async function fetchTasks() {
        const response = await fetch('/api/tasks');
        const tasks = await response.json();
        tasksTableBody.innerHTML = tasks.map(task => `
            <tr>
                <td>${task.id}</td>
                <td>${task.status}</td>
                <td>${task.assignedNode || 'Unassigned'}</td>
                <td>${task.progress}%</td>
            </tr>
        `).join('');
    }

    fetchNetworkStatus();
    fetchTasks();
    setInterval(() => {
        fetchNetworkStatus();
        fetchTasks();
    }, 5000);
});
