🛡️ CyberShield
Cyber Security Complaint Management System
Course: Database Management Systems Laboratory (CSE 3522)
Institution: United International University (UIU)
Team Name: DataGuardians

📝 Project Overview
CyberShield is a centralized, secure, and efficient Relational Database Management System (RDBMS) designed to bridge the gap between cybercrime victims and law enforcement. In an era of rapid digitalization, CyberShield replaces outdated manual processes with a robust SQL-based platform. It allows citizens to report cybercrimes like identity theft and online harassment while providing authorities with powerful tools for real-time tracking, evidence management, and data analysis.

✨ Key Features
User Role Management: Distinct interfaces for Citizens, Investigators, and Administrators.
Complaint Filing: Intuitive forms for citizens to report incidents with detailed descriptions.
Evidence Management: Securely upload and link digital evidence (images, PDFs, logs) to specific cases.
Real-time Tracking: Victims can monitor the status of their complaints (Pending → Under Investigation → Resolved).
Investigation Logs: A comprehensive audit trail recording every action taken by investigators for maximum accountability.
Automated Notifications: System-generated alerts to keep users updated on case progress.
Departmental Mapping: Efficiently route cases to specialized units (e.g., Financial Crime Division, Cyber Crime Unit).

🚀 Technology Stack
Layer	Technology
Frontend	HTML5, CSS3, Bootstrap 5
Backend	PHP (Server-side logic)
Database	MySQL 
Server Tool	XAMPP 
Version Control	Git & GitHub

🛠️ Installation & Setup Guide
Prerequisites
Install XAMPP (Apache & MySQL).
Git installed on your local machine.
Step-by-Step Setup
Clone the Repository:
code
Bash
git clone https://github.com/YourUsername/CyberShield-DBMS.git
cd CyberShield-DBMS
Database Configuration:
Open phpMyAdmin (http://localhost/phpmyadmin).
Create a new database named cyber_shield_bd.
Import the database/schema.sql file (or copy-paste the SQL from your project folder).
Project Deployment:
Move the project folder to C:/xampp/htdocs/.
Ensure your database connection file (config/db.php) matches your local MySQL credentials:
code
PHP
$conn = mysqli_connect("localhost", "root", "", "cyber_shield_bd");
Run the Application:
Start Apache and MySQL in the XAMPP Control Panel.
Open your browser and go to http://localhost/CyberShield-DBMS.

📡 API Endpoints Overview (Internal Logic)
While this is a monolithic application, the internal routing follows these logical pathways:
POST /auth/login.php - User authentication and session handling.
POST /complaints/submit.php - Submitting a new cybercrime report.
GET /api/case_status.php?id={id} - Fetching live status of a specific complaint.
POST /evidence/upload.php - Handling multi-part form data for digital proofs.

🔒 Data Privacy & Security
Password Hashing: Utilizing password_hash() (BCrypt) for secure credential storage.
Role-Based Access Control (RBAC): Users can only access data relevant to their role.
SQL Injection Prevention: Implementing Prepared Statements to ensure data integrity.
Encapsulation: Personal information is stored in a separate profiles table to decouple authentication data from personal data.

🔮 Future Scope
AI-Powered Categorization: Using Machine Learning to automatically tag the severity of a complaint.
Blockchain Integration: Ensuring digital evidence remains untampered with using blockchain hashing.
Mobile Application: Developing a Flutter/React Native app for easier reporting via mobile.
Two-Factor Authentication (2FA): Adding an extra layer of security for investigator logins.

💡 Inspiration
With the rapid digitalization in Bangladesh, cybercrimes such as fraud and identity theft have increased significantly. CyberShield was inspired by the need for a transparent, fast-acting system that empowers citizens and provides law enforcement with organized data to fight digital crime effectively.

📜 License
This project is licensed under the MIT License.
