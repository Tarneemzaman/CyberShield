# Cyber Shield: Database Management System

Cyber Shield is a MySQL-based project designed to manage and track cyber-related complaints, user feedback, and investigator activities. The project focuses on structured data storage, security-related logging, and relational query optimization.

## 🛡️ Project Overview

This project serves as a comprehensive backend for a cybersecurity complaint portal. It allows for:
- **User Registration**: Tracking citizens/users who report incidents.
- **Complaint Management**: Organizing reported cyber crimes and their statuses.
- **Investigator Tracking**: Monitoring investigators assigned to cases and logging their actions.
- **Feedback & Quality Control**: Collecting citizen ratings (1-5) and comments on the resolution process.
- **Audit Logging**: Maintaining detailed investigation logs for transparency.

## 🚀 Getting Started

To set up the database locally, follow these steps in order using **MySQL Workbench** or the **VS Code MySQL extension**:

### 1. Database Setup
Execute the following files in the specified order to ensure data integrity:

1.  **`schema.sql`**: Creates the database structure and all tables (Users, Complaints, Investigators, Investigation Logs, and Feedback).
2.  **`seeds.sql`**: Inserts initial sample data for testing and development.
3.  **`queries.sql`**: Contains optimized analytical queries to extract insights.

> **Note:** Ensure you have an active connection to your local MySQL server before running the scripts.

## 📊 Database Schema

The core of the system is built on several key relational tables:
- **Users**: Personal information for complainants.
- **Complaints**: Details of reported incidents, unique IDs, and status updates.
- **Investigators**: Profiles of security officers handling cases.
- **Investigation Logs**: A detailed history of actions taken on each complaint.
- **Feedback**: Citizen ratings (constrained between 1-5) and qualitative feedback.

## 🛠️ Recent Technical Improvements

The current version includes several optimizations based on recent updates:
- **Query Optimization**: Replaced nested subqueries with cleaner `JOIN` syntax in `Q11`.
- **Bug Fixes**: 
    - Resolved `HAVING` clause errors in `Q14` by ensuring proper `GROUP BY` usage.
    - Corrected `DATEDIFF` calculations for more accurate timeline reporting.
- **Organization**: Refined file headers and grouped queries by range (Q1-Q7, Q8-Q14) for better maintainability.
- **Data Integrity**: Enforced `CHECK` constraints on ratings to ensure valid user feedback.

## 💻 Tech Stack
- **Database**: MySQL 8.0+
- **Environment**: Visual Studio Code / MySQL Workbench
- **Language**: MySQL (Structured Query Language)

## 💡 Motivation
In an era of increasing digital threats, the efficiency of reporting and investigating cybercrimes is paramount. The motivation behind **Cyber Shield** was to create a centralized, transparent system that bridges the gap between citizens and investigators. 
- **Efficiency**: Streamlining the transition from complaint filing to case assignment.
- **Transparency**: Providing a clear audit trail of investigation steps via the `investigation_logs`.
- **Quality Improvement**: Using citizen feedback to measure and improve the response time and effectiveness of cybersecurity departments.

## 📜 License
This project is licensed under the **MIT License**.


