Postman collection for AccelTrack API

Files:
- `AccelTrack.postman_collection.json` — Postman Collection (v2.1) with requests for auth, tests, schedules, and notifications.
- `AccelTrack.postman_environment.json` — Postman environment with `baseUrl` (default `http://localhost:8080/api`) and `token` variable.

How to use:
1. Open Postman.
2. Import the collection file `postman/AccelTrack.postman_collection.json`.
3. Import the environment `postman/AccelTrack.postman_environment.json` and select it in the top-right environment dropdown.
4. Update `baseUrl` if your backend runs on a different host/port.
5. To test protected endpoints:
   - Use the `Auth -> Login` request to sign in with credentials (or `Register` if you need a new account).
   - Copy the `token` value from the login response (response JSON will have `{ token, user }`) and paste it into the environment variable `token` (or use Postman scripts to set it automatically).
6. Run requests under `Tests`, `Schedules`, or `Notifications`. Protected endpoints require the `Authorization: Bearer {{token}}` header.

Quick tips:
- If your backend isn't running, start it first (e.g., `npm run start` or your server command).
- If CORS blocks browser-based requests, Postman is unaffected (it acts as a client).
- You can bulk-run the collection using Postman Collection Runner or Newman.

Optional: Use Newman to run the collection from the command line:

```powershell
# Install newman globally (if not installed)
pnpm add -g newman

# Run the collection (use the environment file)
newman run postman/AccelTrack.postman_collection.json -e postman/AccelTrack.postman_environment.json
```
