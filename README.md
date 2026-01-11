# 🛡️ CyberShield
> **Cyber Security Complaint Management System**

A centralized, secure, and efficient Relational Database Management System (RDBMS) designed to streamline cybercrime reporting and investigation management.

---

## 📖 Project Overview
With the rapid digitalization of services, cybercrimes such as fraud, identity theft, and online harassment are increasing significantly. **CyberShield** replaces outdated manual processes with a robust SQL-based data management system. It ensures data integrity, minimizes redundancy, and provides real-time tracking for victims while empowering law enforcement authorities with effective data analysis tools.


---

## ✨ Key Features
*   **Multi-Role Access Control:** Separate dashboards for Citizens, Investigators, and Administrators.
*   **Secure Complaint Filing:** Citizens can report incidents with detailed descriptions and categories.
*   **Evidence Management:** Capability to upload and link digital evidence (images, logs, PDFs) to specific cases.
*   **Live Case Tracking:** Real-time status updates (Pending, Under Investigation, Resolved).
*   **Investigation Logs:** An audit trail that records every action taken by an investigator for accountability.
*   **Departmental Organization:** Automated routing of cases to specific units like the Cyber Crime Unit or Financial Crime Division.
*   **Feedback System:** Citizens can rate the investigation process once a case is resolved.

---

## 🛠️ Technology Stack
| Component | Technology |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, Bootstrap 5 |
| **Backend** | PHP (or Django/Python) |
| **Database** | MySQL |
| **Server Tool** | XAMPP / WAMP |
| **Environment** | Windows/Linux/macOS |

---

## 🚀 Installation & Setup Guide

### 1. Prerequisites
*   Install [XAMPP](https://www.apachefriends.org/index.html) or [WAMP](https://www.wampserver.com/en/).
*   Ensure **Git** is installed on your system.

### 2. Database Setup
1.  Open **phpMyAdmin** (`http://localhost/phpmyadmin`).
2.  Create a new database named `cyber_shield_bd`.
3.  Import the SQL schema provided in the `/database` folder of this repository.

### 3. Local Deployment
1.  Clone this repository into your XAMPP `htdocs` folder:
    ```bash
    cd C:/xampp/htdocs
    git clone https://github.com/YourUsername/CyberShield.git
    ```
2.  Update the database configuration in `config/db.php`:
    ```php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $dbname = "cyber_shield_bd";
    ```
3.  Start **Apache** and **MySQL** from the XAMPP Control Panel.
4.  Access the project at `http://localhost/CyberShield`.

---

## 📡 API Endpoints Overview
The system uses the following logical internal endpoints for data handling:
*   `POST /api/login.php` - User authentication and session start.
*   `POST /api/file_complaint.php` - Submits complaint data and triggers notifications.
*   `GET /api/track_case.php?id={case_id}` - Fetches current status and investigator notes.
*   `POST /api/upload_evidence.php` - Handles secure file uploads to the server.

---

## 🔒 Data Privacy & Security
*   **Encryption:** Passwords are stored using `BCRYPT` hashing.
*   **Prepared Statements:** Protection against SQL Injection attacks.
*   **RBAC:** Role-Based Access Control ensures that citizens cannot view investigator logs and vice versa.
*   **Data Decoupling:** Personal profiles are stored separately from authentication credentials to enhance privacy.

---

## 🔮 Future Scope
*   **AI Integration:** Automated categorization of complaints using Natural Language Processing (NLP).
*   **Blockchain Evidence:** Storing digital evidence hashes on a blockchain to ensure they are untamperable.
*   **Mobile App:** Developing a cross-platform mobile application for instant reporting.
*   **SMS Alerts:** Integration with SMS gateways for instant case updates to citizens.

---

## 💡 Inspiration
This project was inspired by the need for transparency in the digital justice system of Bangladesh. By providing a centralized platform, we aim to reduce the "bureaucratic lag" that often discourages victims of cybercrime from seeking help.

---

## 📜 License
This project is licensed under the **MIT License**. You are free to use, modify, and distribute this software for educational purposes.


