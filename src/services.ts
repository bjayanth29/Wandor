import { activities, buses, destinations, flights, hotels, itineraryDays, packages, trains, type Activity, type Bus, type Flight, type Hotel, type SearchMode, type Train } from './data'

export const searchFlights = (query: string, sort: string = 'recommended') => {
  const filtered = flights.filter((flight) => !query || `${flight.from} ${flight.to} ${flight.airline}`.toLowerCase().includes(query.toLowerCase()))
  return [...filtered].sort((a, b) => sort === 'cheapest' ? a.price - b.price : sort === 'fastest' ? a.duration - b.duration : sort === 'earliest' ? a.departure.localeCompare(b.departure) : a.stops - b.stops || a.price - b.price)
}
export const searchHotels = (query: string, maxPrice = 99999, minRating = 0) => hotels.filter((hotel) => (!query || `${hotel.city} ${hotel.name} ${hotel.location}`.toLowerCase().includes(query.toLowerCase())) && hotel.price <= maxPrice && hotel.rating >= minRating)
export const searchTrains = (query: string) => trains.filter((train) => !query || `${train.from} ${train.to} ${train.name}`.toLowerCase().includes(query.toLowerCase()))
export const searchBuses = (query: string) => buses.filter((bus) => !query || `${bus.from} ${bus.to} ${bus.operator}`.toLowerCase().includes(query.toLowerCase()))
export const getInventory = (mode: SearchMode, query = '') => ({ flights: searchFlights(query), hotels: searchHotels(query), trains: searchTrains(query), buses: searchBuses(query), packages: packages.filter((item) => !query || `${item.location} ${item.name}`.toLowerCase().includes(query.toLowerCase())), activities: activities.filter((item) => !query || `${item.location} ${item.name}`.toLowerCase().includes(query.toLowerCase())) }[mode])
export const generateItinerary = (destination: string, days: number, style: string, interests: string[]) => ({
  destination: destination || 'Japan', days, style, interests,
  total: 58499 + Math.max(days - 7, 0) * 4100,
  hotel: style === 'Luxury' ? 'The Aoyama Grand, Tokyo' : style === 'Budget' ? 'K5 Hotel, Nihonbashi' : 'The Knot Tokyo Shinjuku',
  transport: interests.some((interest) => interest.toLowerCase().includes('adventure')) ? '7-day IC card + one regional rail pass' : '7-day IC card + neighborhood trains',
  weather: '18–23°C · crisp mornings · light jacket recommended',
  route: Array.from({ length: days }, (_, index) => ({ ...itineraryDays[index % itineraryDays.length], day: index + 1, title: index >= itineraryDays.length ? `${itineraryDays[index % itineraryDays.length].title} · extra day` : itineraryDays[index].title })),
})
export const answerWandor = (question: string) => {
  const q = question.toLowerCase()
  if (q.includes('hotel')) return 'For a hotel near Shibuya under ₹8,000, I would start with K5 Hotel or a calm stay in Daikanyama. Want me to narrow it by dates and cancellation policy?'
  if (q.includes('kyoto')) return 'Yes—Kyoto fits best as a one-night mid-trip detour from Tokyo. I would trade one shopping afternoon for a quiet Arashiyama morning.'
  if (q.includes('cheapest') || q.includes('osaka')) return 'The smartest-value route is an overnight bus if time allows; otherwise, book a regional rail pass early and travel outside peak hours.'
  return 'October is lovely for Japan: clear light, comfortable walking weather, and a good excuse to plan around small neighborhood experiences. Tell me your pace and I’ll shape a route.'
}
export const getHotel = (id: string): Hotel | undefined => hotels.find((hotel) => hotel.id === id)
export const getFlight = (id: string): Flight | undefined => flights.find((flight) => flight.id === id)
export const getTrain = (id: string): Train | undefined => trains.find((train) => train.id === id)
export const getBus = (id: string): Bus | undefined => buses.find((bus) => bus.id === id)
export const getActivity = (id: string): Activity | undefined => activities.find((activity) => activity.id === id)
export const serviceCapabilities = ['Flight Search', 'Hotel Search', 'Train Search', 'Bus Search', 'AI Itinerary Generation', 'Authentication', 'Bookings', 'Payments', 'Maps'] as const
export const mapProvider = 'Mock Map service — replace with Mapbox or Google Maps adapter'
export { destinations }

export const authService = { signIn: async () => ({ user: { name: 'Aarav Mehta' } }), signOut: async () => true }
export const bookingService = { create: async (payload: unknown) => ({ id: 'WAN12345678', payload }), cancel: async (id: string) => ({ id, status: 'cancelled' }) }
export const paymentService = { createSimulatedIntent: async (method: string, amount: number) => ({ method, amount, status: 'simulated' as const }) }
export const mapService = { provider: mapProvider, search: async (query: string) => ({ query, points: [] as { label: string; lat: number; lng: number }[] }) }
