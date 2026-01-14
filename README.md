# AccelTrack

A lightweight student tracking app for recording attendance, grades, assignments, and progress analytics.

## Key features
- Student and class management
- Attendance and grade tracking
- Assignment scheduling and submission records
- Basic analytics and reporting
- Role-based access for teachers and admins

## Tech stack
- Frontend: React + TypeScript
- UI: Tailwind CSS (or your preferred CSS framework)
- Backend: ASP.NET Core Web API (C#)
- Data: SQL Server with Entity Framework Core
- Auth: JWT / ASP.NET Identity
- Dev / Deploy: Docker, GitHub Actions

## Quick start
1. git clone <repo>
2. Configure backend: update appsettings.json (ConnectionStrings, JWT secret)
3. Backend: cd ./backend && dotnet restore && dotnet run
4. Frontend: cd ./frontend && npm install && npm start
5. Or run: docker-compose up --build

## Contributing
PRs welcome. Follow established code style and add tests for new features.

## License
MIT