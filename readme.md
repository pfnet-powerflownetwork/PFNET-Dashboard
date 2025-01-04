# PFNET-Dashboard

The **PFNET-Dashboard** is a web-based interface designed for monitoring and managing the PFNET computational power network. This tool allows administrators to oversee the network in real-time, visualize task progress, and manage nodes and tasks effectively.

## Features

- **Real-Time Monitoring**: Displays the number of active nodes and pending tasks in the network.
- **Task Management**: Lists all tasks with their current status, assigned nodes, and progress.
- **Responsive Interface**: Updates dynamically to reflect the latest data.
- **Expandable Backend**: Built with scalability in mind for future integrations with PFNET systems.

## File Structure

### Frontend

1. **`index.html`**
   - The main HTML file for the dashboard interface.
   ```html
   <header>
       <h1>PFNET Dashboard</h1>
   </header>
   <main>
       <section id="network-status">
           <h2>Network Status</h2>
           <div id="status-data"></div>
       </section>
   </main>
   ```

2. **`dashboard.css`**
   - Styles for the dashboard's user interface.
   ```css
   header {
       background-color: #0056b3;
       color: #fff;
   }
   ```

3. **`dashboard.js`**
   - Handles fetching and updating data from the backend.
   ```javascript
   async function fetchNetworkStatus() {
       const response = await fetch('/api/status');
       const status = await response.json();
       document.getElementById("status-data").innerHTML = `Active Nodes: ${status.activeNodes}`;
   }
   ```

### Backend

1. **`DashboardServer.java`**
   - Serves the frontend and provides APIs for network and task data.
   ```java
   Spark.get("/api/status", (req, res) -> {
       return "{ \"activeNodes\": 10, \"pendingTasks\": 5 }";
   });
   ```

2. **`DataAPI.java`** (Future Integration)
   - Will connect with the PFNETAgent to fetch dynamic data.

3. **`WebSocketHandler.java`** (Optional Future Feature)
   - Enables real-time updates using WebSockets.

### Configuration

- **`config.properties`**
   ```properties
   server.port=8080
   server.staticFilesPath=public
   ```

## Getting Started

### Prerequisites

- Java 11+
- Node.js (for future frontend builds)
- Maven (for backend build)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/PFNET-Dashboard.git
   ```

2. Run the backend server:
   ```bash
   mvn clean install
   java -jar target/PFNET-Dashboard.jar
   ```

3. Open the dashboard in your browser:
   ```
   http://localhost:8080
   ```

## Future Work

- **Dynamic Data Integration**: Replace static API responses with real-time data from the PFNET network.
- **Authentication**: Secure access to the dashboard.
- **Logging and Analytics**: Track usage patterns and system performance.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
