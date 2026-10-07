# Wandor

**Wandor** is a cinematic AI travel planner and complete travel-booking frontend prototype. It is built as a Manus-managed React/TypeScript/Vite application with a calm editorial visual system, INR mock inventory, simulated checkout, and clean seams for future APIs.

## Run locally

```bash
pnpm install
pnpm dev
```

The app listens on `http://localhost:3000` (or the managed Preview URL). Production verification:

```bash
pnpm check
pnpm build
pnpm preview
```

## Environment variables

Mock mode requires no environment variables. The managed project has server and database capabilities enabled for future account, persistence, inventory, and booking integrations. Browser-safe provider configuration should be added through managed configuration rather than committed secrets.

## Included experience

- Cinematic video hero with Special Elite wordmark, Geist UI typography, bright top gradient, liquid-glass AI prompt, file upload selector, and AI Planner / Book a Trip switcher.
- Universal search for flights, hotels, trains, buses, packages, and activities.
- Functional flight sorting, hotel price/rating filters, hotel details, visual bus seat selection, packages, activities, destination discovery, wishlist persistence, guides, My Trips, digital travel pass, mock map, and responsive mobile bottom navigation.
- AI planner with destination, duration, budget, travel style, interests, crowd preference, food mood, activity level, and a personalized day-by-day mock itinerary.
- Floating Ask Wandor assistant with mock answers and a typed replacement seam for a future LLM call.
- Simulated booking flow: select → details → traveller → review → payment → confirmation. Supported mock methods are UPI, Card, Net Banking, and Wallet. No real money is processed.
- Admin dashboard with booking/revenue/user/cancellation KPIs, Recharts charts, popular destinations, and operational quick navigation.
- Accessible focus states, semantic headings/labels, alt text, restrained animation, reduced-motion support, lazy-loaded discovery images, and `public/manus-routes.json`.

## Architecture

- `src/data.ts` contains typed mock inventory (20 destinations, 20 hotels, 20 flights, 15 trains, 15 buses, 20 activities, 15 packages, guides, trips, and itinerary days).
- `src/services.ts` owns mock search, hotel lookup, itinerary generation, chat answers, and future API capability seams.
- `src/App.tsx` contains route-level pages and reusable UI building blocks for the prototype.
- `src/index.css` contains the Wandor token layer and responsive editorial styles.

## API integration points

Replace the typed functions in `src/services.ts` with managed API/database adapters:

- `searchFlights`, `searchHotels`, `searchTrains`, `searchBuses`: live inventory/search providers.
- `generateItinerary`: managed LLM structured-output call with user preferences and storage-backed trip drafts.
- `answerWandor`: streaming LLM chat service with conversation persistence.
- `authService` seam: add managed authentication and role checks for My Trips/Admin.
- `bookingService` seam: create, update, cancel, and retrieve bookings in the managed database.
- `paymentService` seam: connect to a protected payment provider only when a real-money product scope is explicitly approved.
- `mapService` seam: replace `MockMap` with Mapbox or Google Maps adapter.

## Notes

The hero video remains hotlinked to the requested cinematic MP4, with `journal.jpg` as a poster fallback. The visual image set is stored in `public/assets/` and was selected for editorial travel coverage. The current admin and account surfaces are demo views; real authentication/authorization and durable customer data can be layered onto the already-enabled managed capabilities.

## Managed publication

The project includes a committed `Dockerfile` and dependency-free `server.mjs` production entrypoint. The managed deployment contract is configured with `dockerfilePath: Dockerfile` and unauthenticated `healthPath: /`. Publication remains manually controlled (`auto_publish: false`); publish only after reviewing the current checkpoint and explicitly approving the release.
