export type SearchMode = 'flights' | 'hotels' | 'trains' | 'buses' | 'packages' | 'activities'
export type WishlistKind = 'hotel' | 'destination' | 'activity' | 'package'

export type Destination = { id: string; name: string; region: string; category: string; blurb: string; image: string; accent: string }
export type Flight = { id: string; airline: string; number: string; from: string; to: string; departure: string; arrival: string; duration: number; stops: number; price: number; logo: string }
export type Hotel = { id: string; name: string; city: string; location: string; rating: number; stars: number; price: number; image: string; amenities: string[]; room: string; cancellation: string; description: string }
export type Train = { id: string; name: string; number: string; from: string; to: string; departure: string; arrival: string; duration: string; classes: string[]; availability: string; price: number }
export type Bus = { id: string; operator: string; type: string; from: string; to: string; departure: string; arrival: string; duration: string; seats: number; price: number }
export type Package = { id: string; name: string; location: string; days: number; price: number; category: string; image: string; includes: string[] }
export type Activity = { id: string; name: string; location: string; category: string; rating: number; duration: string; price: number; image: string }
export type Guide = { id: string; title: string; author: string; read: string; image: string; excerpt: string; tag: string }

const remote = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=82`

export const destinations: Destination[] = [
  { id: 'goa', name: 'Goa', region: 'India · Konkan coast', category: 'Beaches', blurb: 'Salt air, slow mornings, and the good kind of nowhere.', image: '/assets/goa.jpg', accent: '#d89b75' },
  { id: 'kerala', name: 'Kerala', region: 'India · Backwaters', category: 'Nature', blurb: 'Monsoon greens and a gentler pace of travel.', image: '/assets/kerala.jpg', accent: '#789d80' },
  { id: 'kashmir', name: 'Kashmir', region: 'India · Himalayas', category: 'Mountains', blurb: 'Alpine lakes, saffron sunsets, and quiet houseboats.', image: '/assets/kashmir.jpg', accent: '#879aaa' },
  { id: 'manali', name: 'Manali', region: 'India · Himachal', category: 'Adventure', blurb: 'Pine trails and snowline escapes above the valley.', image: remote('photo-1464822759023-fed622ff2c3b'), accent: '#8b9b87' },
  { id: 'jaipur', name: 'Jaipur', region: 'India · Rajasthan', category: 'Historical', blurb: 'A rose-pink city built for wandering after dark.', image: remote('photo-1477587458883-47145ed94245'), accent: '#c98570' },
  { id: 'varanasi', name: 'Varanasi', region: 'India · Uttar Pradesh', category: 'Spiritual', blurb: 'A river city that rewards an early start.', image: remote('photo-1561361058-c24cecae35ca'), accent: '#d99b62' },
  { id: 'bengaluru', name: 'Bengaluru', region: 'India · Karnataka', category: 'Cities', blurb: 'Third-wave coffee, leafy lanes, and excellent weekends.', image: remote('photo-1596176530529-78163a4f7af2'), accent: '#90a487' },
  { id: 'mumbai', name: 'Mumbai', region: 'India · Maharashtra', category: 'Cities', blurb: 'Sea-facing evenings and a city that keeps moving.', image: remote('photo-1570168007204-dfb528c6958f'), accent: '#929db1' },
  { id: 'delhi', name: 'Delhi', region: 'India · NCR', category: 'Food', blurb: 'Old lanes, new tables, and history in every block.', image: remote('photo-1587474260584-136574528ed5'), accent: '#b4896b' },
  { id: 'dubai', name: 'Dubai', region: 'UAE · Gulf', category: 'Luxury', blurb: 'Desert light, design hotels, and a little extra.', image: remote('photo-1512453979798-5ea266f8880c'), accent: '#c4a16f' },
  { id: 'singapore', name: 'Singapore', region: 'Southeast Asia', category: 'Cities', blurb: 'A city of gardens, hawker stalls, and clean lines.', image: remote('photo-1525625293386-3f8f99389edd'), accent: '#87a8a5' },
  { id: 'bali', name: 'Bali', region: 'Indonesia · Island', category: 'Beaches', blurb: 'Rice terraces, temple mornings, and island rhythm.', image: remote('photo-1537996194471-e657df975ab4'), accent: '#6c9a88' },
  { id: 'paris', name: 'Paris', region: 'France · Europe', category: 'Food', blurb: 'A long lunch, a museum, and a walk home.', image: remote('photo-1502602898657-3e91760cbb34'), accent: '#9a8b9c' },
  { id: 'tokyo', name: 'Tokyo', region: 'Japan · Kanto', category: 'Food', blurb: 'Tiny bars, neighborhood shrines, and perfect trains.', image: remote('photo-1540959733332-eab4deabeeaf'), accent: '#af8494' },
  { id: 'kyoto', name: 'Kyoto', region: 'Japan · Kansai', category: 'Historical', blurb: 'Moss gardens, tea houses, and a slower kind of wonder.', image: remote('photo-1493976040374-85c8e12f0c0e'), accent: '#9b9d7e' },
  { id: 'lisbon', name: 'Lisbon', region: 'Portugal · Iberia', category: 'Cities', blurb: 'Tiles, hills, and the Atlantic at the end of every tram line.', image: remote('photo-1555881400-74d7acaacd8b'), accent: '#d09d77' },
  { id: 'melbourne', name: 'Melbourne', region: 'Australia · Victoria', category: 'Food', blurb: 'Laneway culture, coastal drives, and long black coffee.', image: remote('photo-1514395462725-fb4566210144'), accent: '#8393a0' },
  { id: 'ladakh', name: 'Ladakh', region: 'India · High Himalaya', category: 'Adventure', blurb: 'Blue skies, high passes, and the long way round.', image: remote('photo-1533130061792-64b345e4a833'), accent: '#a48c80' },
  { id: 'pondicherry', name: 'Pondicherry', region: 'India · Coromandel', category: 'Beaches', blurb: 'French façades and the first coffee of the day.', image: remote('photo-1548013146-72479768bada'), accent: '#d4a77c' },
  { id: 'rishikesh', name: 'Rishikesh', region: 'India · Uttarakhand', category: 'Spiritual', blurb: 'River air, yoga mornings, and a better kind of reset.', image: remote('photo-1533130061792-64b345e4a833'), accent: '#7ba29c' },
]

const airlines = ['IndiGo', 'Air India', 'Vistara', 'Akasa Air', 'Emirates', 'Singapore Airlines']
const routes = [['BLR', 'DEL'], ['DEL', 'BOM'], ['BOM', 'GOI'], ['BLR', 'COK'], ['DEL', 'SXR'], ['BLR', 'DXB'], ['BOM', 'SIN'], ['DEL', 'BKK'], ['BLR', 'TYO'], ['MAA', 'CMB']]
export const flights: Flight[] = Array.from({ length: 20 }, (_, i) => {
  const [from, to] = routes[i % routes.length]
  const airline = airlines[i % airlines.length]
  const duration = 145 + (i % 5) * 35
  return { id: `flight-${i + 1}`, airline, number: `${['6E', 'AI', 'UK', 'QP', 'EK', 'SQ'][i % 6]} ${1200 + i * 17}`, from, to, departure: ['06:30', '08:10', '10:45', '13:20', '17:50'][i % 5], arrival: ['09:15', '11:05', '13:30', '16:05', '21:10'][i % 5], duration, stops: i % 4 === 0 ? 1 : 0, price: 4599 + i * 420, logo: airline.slice(0, 2).toUpperCase() }
})

const hotelImages = ['/assets/kerala.jpg', '/assets/goa.jpg', '/assets/kashmir.jpg', remote('photo-1564501049412-61c2a3083791'), remote('photo-1551882547-ff40c63fe5fa'), remote('photo-1601918774946-25832a4be0d6')]
const hotelNames = ['The Leela Palace', 'Casa de Goa', 'Aroha House', 'The Roseate', 'Brisa Marina', 'Mango Tree Residency', 'The Kumaon', 'The Postcard', 'The Oberoi', 'The Blue Room']
export const hotels: Hotel[] = Array.from({ length: 20 }, (_, i) => ({
  id: `hotel-${i + 1}`, name: hotelNames[i % hotelNames.length], city: destinations[i % destinations.length].name, location: ['Indiranagar', 'Fontainhas', 'Fort Kochi', 'Hauz Khas', 'Mall Road', 'Varkala Cliff'][i % 6], rating: Number((4.2 + (i % 8) / 10).toFixed(1)), stars: 4 + (i % 2), price: 4200 + (i % 6) * 1100, image: hotelImages[i % hotelImages.length], amenities: [['Breakfast', 'Pool', 'Wi-Fi'], ['Spa', 'Airport transfer', 'Bar'], ['Garden', 'Restaurant', 'Workspace']][i % 3], room: ['Deluxe King', 'Garden Suite', 'Sea-view room'][i % 3], cancellation: i % 3 === 0 ? 'Free cancellation' : 'Pay at property', description: 'A calm, design-forward stay with warm service, generous common spaces, and a sense of place that makes it easy to stay one more night.',
}))

const trainNames = ['Karnataka Express', 'Rajdhani Express', 'Shatabdi Express', 'Duronto Express', 'Vande Bharat', 'Konkan Kanya Express']
export const trains: Train[] = Array.from({ length: 15 }, (_, i) => ({ id: `train-${i + 1}`, name: trainNames[i % trainNames.length], number: `${12600 + i * 19}`, from: ['Bengaluru', 'New Delhi', 'Mumbai', 'Chennai', 'Kochi'][i % 5], to: ['New Delhi', 'Bengaluru', 'Goa', 'Bengaluru', 'Mangaluru'][i % 5], departure: ['05:30', '07:00', '14:20', '20:00'][i % 4], arrival: ['13:10', '18:35', '21:45', '05:30'][i % 4], duration: ['6h 20m', '11h 35m', '28h 15m', '33h 30m'][i % 4], classes: ['SL', '3A', '2A', 'CC'].slice(0, 2 + (i % 3)), availability: i % 3 === 0 ? 'Few seats left' : 'Available', price: 1099 + (i % 5) * 650 }))

export const buses: Bus[] = Array.from({ length: 15 }, (_, i) => ({ id: `bus-${i + 1}`, operator: ['VRL Travels', 'KSRTC Airavat', 'IntrCity SmartBus', 'Orange Tours', 'SRS Travels'][i % 5], type: ['Volvo AC Sleeper', 'Multi-axle Seater', 'AC Semi Sleeper'][i % 3], from: ['Bengaluru', 'Mumbai', 'Pune', 'Hyderabad', 'Kochi'][i % 5], to: ['Goa', 'Pune', 'Bengaluru', 'Chennai', 'Munnar'][i % 5], departure: ['19:30', '21:10', '22:00', '20:45'][i % 4], arrival: ['07:15', '06:30', '08:20', '06:10'][i % 4], duration: ['11h 45m', '9h 20m', '10h 20m', '9h 25m'][i % 4], seats: 12 + (i % 8), price: 799 + (i % 6) * 160 }))

export const packages: Package[] = Array.from({ length: 15 }, (_, i) => ({ id: `package-${i + 1}`, name: [`7 Days Kerala Escape`, `5 Nights in Kashmir`, `Weekend in Jaipur`, `8 Days Japan Edit`, `Bali, Slowly`, `Ladakh High Route`][i % 6], location: destinations[(i + 1) % destinations.length].name, days: [7, 6, 3, 8, 5, 9][i % 6], price: [24999, 31999, 14999, 89999, 45999, 37999][i % 6] + (i % 3) * 1800, category: ['Domestic', 'International', 'Honeymoon', 'Family', 'Adventure', 'Luxury', 'Weekend'][i % 7], image: destinations[(i + 1) % destinations.length].image, includes: ['Hotels', 'Breakfast', 'Transfers', 'Sightseeing'].slice(0, 3 + (i % 2)) }))

const activityImages = [remote('photo-1529156069898-49953e39b3ac'), remote('photo-1518509562904-e7ef99cdcc86'), remote('photo-1500534623283-312aade485b7'), '/assets/journal.jpg', remote('photo-1544551763-46a013bb70d5')]
export const activities: Activity[] = Array.from({ length: 20 }, (_, i) => ({ id: `activity-${i + 1}`, name: ['Old Delhi food walk', 'Sunrise at Nandi Hills', 'Backwater canoe & lunch', 'Hidden Tokyo ramen crawl', 'Goa surf lesson', 'Pink City photo walk'][i % 6], location: destinations[(i + 4) % destinations.length].name, category: ['Food Tours', 'Adventure', 'Nature', 'Sightseeing', 'Water Sports', 'Photography'][i % 6], rating: Number((4.5 + (i % 5) / 10).toFixed(1)), duration: ['3 hours', 'Half day', 'Full day', '2.5 hours'][i % 4], price: 899 + (i % 7) * 420, image: activityImages[i % activityImages.length] }))

export const guides: Guide[] = [
  { id: 'guide-japan', title: '10 hidden places in Japan for a slower October', author: 'Mira Kapoor', read: '8 min read', image: remote('photo-1493976040374-85c8e12f0c0e'), excerpt: 'Trade the checklist for neighborhood shrines, early trains, and the cafés locals keep to themselves.', tag: 'Japan' },
  { id: 'guide-kerala', title: 'The complete Kerala travel guide', author: 'Arjun Menon', read: '12 min read', image: '/assets/kerala.jpg', excerpt: 'A route through backwaters, spice country, and a few places you will want to keep quiet.', tag: 'India' },
  { id: 'guide-bengaluru', title: 'Best weekend trips from Bengaluru', author: 'Naina Rao', read: '6 min read', image: remote('photo-1500534623283-312aade485b7'), excerpt: 'Six easy escapes for when the city starts to feel a little too familiar.', tag: 'Weekends' },
  { id: 'guide-budget', title: 'The best budget destinations in India', author: 'Ishaan Sethi', read: '10 min read', image: '/assets/goa.jpg', excerpt: 'Good travel does not need a big number—just the right season and a little curiosity.', tag: 'Smart travel' },
  { id: 'guide-kashmir', title: 'Things to do in Kashmir beyond the lake', author: 'Leena Mir', read: '7 min read', image: '/assets/kashmir.jpg', excerpt: 'Mountain roads, saffron villages, and the soft light of the valley.', tag: 'Kashmir' },
  { id: 'guide-tokyo', title: 'A food-first guide to Tokyo', author: 'Yuki Tanaka', read: '9 min read', image: remote('photo-1540959733332-eab4deabeeaf'), excerpt: 'How to eat very well in Tokyo without following the loudest recommendations.', tag: 'Food' },
]

export const itineraryDays = [
  { day: 1, title: 'Tokyo arrival, at your own pace', morning: 'Airport → boutique hotel in Shibuya', afternoon: 'Neighborhood walk through Daikanyama', evening: 'Hidden ramen bar + sunset from Shibuya Sky', cost: 4200, travel: '45 min' },
  { day: 2, title: 'Food, craft & old Tokyo', morning: 'Tsukiji outer market before 9am', afternoon: 'Local café and slow streets of Yanaka', evening: 'Asakusa lanterns, then Golden Gai', cost: 5100, travel: '1h 10m' },
  { day: 3, title: 'The quiet side of the city', morning: 'Meiji Jingu before the crowds', afternoon: 'Kiyosumi gardens + independent bookshops', evening: 'Small plates in Kuramae', cost: 3900, travel: '55 min' },
  { day: 4, title: 'A day trip to Kamakura', morning: 'Train to Kita-Kamakura', afternoon: 'Temple trail and sea-side lunch', evening: 'Return for a vinyl bar in Shimokitazawa', cost: 6800, travel: '2h 20m' },
  { day: 5, title: 'Markets & modern ritual', morning: 'Coffee and ceramics in Koenji', afternoon: 'TeamLab Borderless timed entry', evening: 'Omakase counter with a local host', cost: 9200, travel: '1h 35m' },
  { day: 6, title: 'Hills, hikes & hidden cafés', morning: 'Mount Takao forest walk', afternoon: 'Onsen reset and a riverside lunch', evening: 'Shinjuku jazz kissaten', cost: 5600, travel: '2h 05m' },
  { day: 7, title: 'One last good morning', morning: 'Breakfast at a neighborhood bakery', afternoon: 'Souvenirs from Kagurazaka lanes', evening: 'Airport transfer, with time to spare', cost: 3400, travel: '1h 15m' },
]

export const trips = [
  { id: 'WAN12345678', destination: 'Bengaluru → Tokyo', dates: '12–19 October 2026', type: 'AI itinerary + flights', status: 'Upcoming', amount: 58499 },
  { id: 'WAN76100322', destination: 'Mumbai → Goa', dates: '03–06 August 2026', type: 'Hotel + bus', status: 'Completed', amount: 18200 },
  { id: 'WAN55018012', destination: 'Delhi → Jaipur', dates: '18–20 June 2026', type: 'Holiday package', status: 'Cancelled', amount: 12999 },
]
