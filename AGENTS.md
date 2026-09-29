# AGENTS.md - Project Guidelines for Gemini

## Project Overview
A full-stack To-Do List application featuring task management, an integrated notes feature, and an additional productivity feature (e.g., category tags, priority levels, or a Pomodoro timer), deployed publicly with automated endpoint tests.

## Coding Standards & Tech Stack
- **Tech Stack:** (Specify your preference here, e.g., Node.js / Express / MongoDB backend with a clean HTML/CSS/JS or React frontend, or Python/Django).
- **Code Quality:** Write clean, modular, and well-commented code. Always handle errors gracefully with clear user feedback.

## Testing & Validation Rules (Mandatory)
- Write automated tests for all backend API endpoints created (using a framework like Jest, Supertest, or Python's `unittest`/`pytest`).
- Always validate that the API endpoints are functioning correctly before marking a task complete.
- Run local tests to verify code stability prior to deployment configuration.

## Workflow Instructions
- Execute changes iteratively. Do not try to build the entire app in one monolithic prompt.
- If an error occurs, provide the full error traceback to the agent for precise debugging.