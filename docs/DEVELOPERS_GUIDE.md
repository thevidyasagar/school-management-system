# 🧭 Developers Guide — Student Dashboard Module

Welcome to the **School Management System (SMS)** project under **GoUpTech**.  
This guide explains how backend and frontend developers should collaborate on the `feature/student-dashboard` module efficiently.

---

## 🚀 Module Overview

**Module Name:** Student Dashboard  
**Feature Branch:** `feature/student-dashboard`  

### 🎯 Objective
To build a centralized student dashboard displaying:
- Student profile and attendance summary  
- Upcoming classes & assignments  
- Notifications & announcements  
- Fee status and academic performance overview  

---

## 🌿 Branch Setup

Each developer should start from the latest `dev` branch.

```bash
# Switch to dev branch
git checkout dev
git pull origin dev

# Create your feature branch
git checkout -b feature/student-dashboard
git push -u origin feature/student-dashboard
```

---

## ⚙️ For Backend Developers (Django)

### 🧩 Responsibilities
- Create or update APIs to serve dashboard data (profile, attendance, grades, etc.)
- Ensure authentication & role-based access for students.
- Optimize queries and secure endpoints.
- Write unit tests for your API logic.

### 🪶 Workflow

```bash
# Navigate to backend folder
cd backend

# Activate environment
source venv/bin/activate   # (Mac/Linux)
venv\Scripts\activate      # (Windows)

# Run server locally
python manage.py runserver
```

**Commit Example:**
```
feat(backend/student-dashboard): added API for attendance summary
```

### 📁 Suggested Folder Structure
```
backend/
 ├── student/
 │   ├── views.py
 │   ├── serializers.py
 │   ├── urls.py
 │   └── models.py
```

---

## 🎨 For Frontend Developers (React.js)

### 🧩 Responsibilities
- Build the student dashboard UI (cards, graphs, and sections).
- Integrate APIs from backend.
- Maintain consistent UI/UX with the overall SMS theme.
- Implement error handling and loading states.

### 🪶 Workflow

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

**Commit Example:**
```
feat(frontend/student-dashboard): added dashboard layout and API integration
```

### 📁 Suggested Folder Structure
```
frontend/
 ├── src/
 │   ├── modules/
 │   │   └── student-dashboard/
 │   │       ├── components/
 │   │       ├── pages/
 │   │       ├── hooks/
 │   │       └── services/
```

---

## 🧑‍💻 Team Workflow

1. **Pull latest dev changes**
   ```bash
   git checkout feature/student-dashboard
   git pull origin dev
   ```

2. **Make your updates**  
   Work only inside your module directories to avoid conflicts.

3. **Commit frequently with clear messages**

4. **Push your changes**
   ```bash
   git push origin feature/student-dashboard
   ```

5. **Create a Pull Request (PR)**  
   - Base branch: `dev`  
   - Compare branch: `feature/student-dashboard`  
   - Add reviewers (team lead + module partner)

---

## 🧩 PR Title Examples

- `feat(student-dashboard): implemented profile section`
- `fix(student-dashboard): API response error handled`
- `ui(student-dashboard): improved layout responsiveness`

---

## ✅ PR Review Checklist

Before submitting your PR:
- [ ] Code runs without errors locally  
- [ ] Followed folder structure and naming conventions  
- [ ] Proper commit messages  
- [ ] Tested APIs or components  
- [ ] Added comments where needed  

---

## 🧹 Merging Rules

- No one merges directly to `dev` or `main`
- PRs must be reviewed by **at least one team member**
- Once approved and tested, merge into `dev`

---

## 🪪 Notes

- Always sync with `dev` before new work.
- Keep commits small and meaningful.
- Communicate blockers early with the team lead.
- Tag your teammate or lead in PR if you need help.

---

### 🧠 Example Summary

| Role | Branch | Work | Example Commit |
|------|--------|------|----------------|
| Backend Dev | feature/student-dashboard | Django API for attendance | `feat(api): added attendance summary endpoint` |
| Frontend Dev | feature/student-dashboard | React Dashboard UI | `feat(ui): added student dashboard layout` |

---

> 🏁 **Goal:** Smooth and modular development of the Student Dashboard — clean commits, independent work, and seamless integration.

---

**Organization:** GoUpTech  
