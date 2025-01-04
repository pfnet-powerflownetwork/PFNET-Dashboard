package com.pfnet.dashboard;

import spark.Spark;

public class DashboardServer {

    public static void main(String[] args) {
        Spark.staticFileLocation("/public");

        Spark.get("/api/status", (req, res) -> {
            res.type("application/json");
            return "{ \"activeNodes\": 10, \"pendingTasks\": 5 }"; // Replace with dynamic data
        });

        Spark.get("/api/tasks", (req, res) -> {
            res.type("application/json");
            return "[ {\"id\": \"Task1\", \"status\": \"Completed\", \"assignedNode\": \"Node1\", \"progress\": 100}, "
                 + "  {\"id\": \"Task2\", \"status\": \"In Progress\", \"assignedNode\": \"Node3\", \"progress\": 75} ]";
        });
    }
}
