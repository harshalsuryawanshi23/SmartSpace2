# Smart Space — Frontend Prototype

A responsive React 18 + Vite prototype for a neighborhood space-booking platform. This is a UI-only demo backed by local mock data; it does not connect to a backend, real authentication, identity provider or payment gateway.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Build and preview with `npm run build` and `npm run preview`.

## Demo accounts

All seeded accounts use password `Demo@123`:

| Role | Email |
| --- | --- |
| User | `user@demo.com` |
| Space Manager | `manager@demo.com` |
| System Admin | `admin@demo.com` |

Login also has one-click demo buttons. Registration always creates a regular user. The Demo Mode switcher lets reviewers change role quickly.

## Included workflows

- User home, search filters/sorting, space details, reservations, QR entry passes, booking history/cancellation and profile/reset.
- Manager dashboard, organization-scoped spaces, facilities, schedule blocks, bookings and watchman entry verification.
- Admin dashboard, user activation/deactivation, organization management, global space management and cross-organization booking management.
- Search checks capacity, facilities, venue hours, confirmed reservations and manager blocks. Booking prevents overlapping reservations for a user and venue.
- Local persistence with `localStorage`, simulated service latency, loading/empty/error states, validation, toasts and confirmation dialogs.
- Claymorphism design, responsive layouts, mobile navigation, visible keyboard focus and labels.

## Structure

```text
frontend/
├── index.html, package.json, vite.config.js, README.md
└── src/
    ├── main.jsx, App.jsx, index.css
    ├── data/mockData.js
    ├── services/api.js
    ├── context/AppContext.jsx
    └── components/{ui.jsx, SpaceCard.jsx, BookingCard.jsx, SpaceForm.jsx}
```

## API integration

Data access is isolated in `src/services/api.js`; replace its simulated functions when the Express API is ready. Pages and components use app context and services, rather than importing the seed data directly.

## Limitations

This is a UI demo only. Route protection is not backend authorization; local storage is browser-local and not shared. QR passes are for demonstration, Aadhaar last-four verification is mock logic, decorator suggestions are contact-only, and there are no real payments or maps. Real authorization and identity checks must be enforced by a secure backend when connected.
