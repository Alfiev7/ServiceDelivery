export type Service = {
  name: string;
  price: string;
  rating: number;
  time: string;
}

export type Categories = {
  [key: string]: Service[];
}

export const subCategories: Categories = {
  cleaner: [
    { name: "Deep cleaning", price: "From $80", rating: 4.8, time: "2-3 hours" },
    { name: "Carpet and upholstery cleaning", price: "From $60", rating: 4.7, time: "1-2 hours" },
    { name: "Window washing", price: "From $40", rating: 4.9, time: "1 hour" },
    { name: "Floor polishing and waxing", price: "From $100", rating: 4.6, time: "3-4 hours" },
    { name: "Move-in/move-out cleaning", price: "From $150", rating: 4.8, time: "4-5 hours" },
    { name: "Post-renovation cleanup", price: "From $120", rating: 4.7, time: "3-4 hours" },
    { name: "Office/commercial cleaning", price: "From $100", rating: 4.9, time: "2-3 hours" },
    { name: "Appliance cleaning", price: "From $50", rating: 4.8, time: "1-2 hours" },
    { name: "Disinfection services", price: "From $70", rating: 4.9, time: "1-2 hours" },
    { name: "Regular/recurring cleaning", price: "From $60", rating: 4.8, time: "2-3 hours" }
  ],
  handyman: [
    { name: "TV Mounting and Installation", price: "From $70", rating: 4.7, time: "1-2 hours" },
    { name: "Furniture Assembly", price: "From $60", rating: 4.8, time: "1-3 hours" },
    { name: "Wall Repairs", price: "From $80", rating: 4.6, time: "2-3 hours" },
    { name: "Picture and Mirror Hanging", price: "From $40", rating: 4.9, time: "1 hour" },
    { name: "Lighting Installation", price: "From $90", rating: 4.7, time: "1-2 hours" },
    { name: "Smart Home Device Setup", price: "From $65", rating: 4.8, time: "1-2 hours" }
  ],
  plumber: [
    { name: "Faucet installation and repair", price: "From $70", rating: 4.8, time: "1-2 hours" },
    { name: "Toilet installation and repair", price: "From $120", rating: 4.7, time: "2-3 hours" },
    { name: "Leak detection and repair", price: "From $90", rating: 4.9, time: "1-2 hours" },
    { name: "Water heater installation/repair", price: "From $150", rating: 4.6, time: "2-4 hours" },
    { name: "Drain cleaning and unclogging", price: "From $80", rating: 4.8, time: "1-2 hours" },
    { name: "Showerhead and tap replacement", price: "From $60", rating: 4.7, time: "1 hour" },
    { name: "Garbage disposal repair", price: "From $85", rating: 4.8, time: "1-2 hours" },
    { name: "Pipe insulation and replacement", price: "From $100", rating: 4.7, time: "2-3 hours" },
    { name: "Water filtration system installation", price: "From $200", rating: 4.9, time: "3-4 hours" },
    { name: "Dishwasher and washing machine hookup", price: "From $90", rating: 4.8, time: "1-2 hours" }
  ],
  "aircon-technician": [
    { name: "AC installation", price: "From $300", rating: 4.8, time: "3-4 hours" },
    { name: "Routine AC maintenance", price: "From $80", rating: 4.9, time: "1-2 hours" },
    { name: "Filter cleaning and replacement", price: "From $50", rating: 4.7, time: "1 hour" },
    { name: "Thermostat installation", price: "From $90", rating: 4.8, time: "1-2 hours" },
    { name: "Ductwork cleaning", price: "From $150", rating: 4.6, time: "2-3 hours" },
    { name: "AC repair", price: "From $100", rating: 4.8, time: "1-3 hours" },
    { name: "Compressor repair", price: "From $200", rating: 4.7, time: "2-4 hours" },
    { name: "Seasonal maintenance", price: "From $120", rating: 4.9, time: "2-3 hours" },
    { name: "Ventilation repair", price: "From $90", rating: 4.8, time: "1-2 hours" }
  ],
  electrician: [
    { name: "Electrical troubleshooting", price: "From $80", rating: 4.8, time: "1-2 hours" },
    { name: "Outlet installation", price: "From $60", rating: 4.7, time: "1 hour" },
    { name: "Ceiling fan installation", price: "From $100", rating: 4.9, time: "2-3 hours" },
    { name: "Lighting installation", price: "From $85", rating: 4.8, time: "1-2 hours" },
    { name: "Circuit breaker replacement", price: "From $120", rating: 4.7, time: "2-3 hours" },
    { name: "Surge protection", price: "From $90", rating: 4.8, time: "1-2 hours" },
    { name: "Smart device installation", price: "From $70", rating: 4.9, time: "1-2 hours" },
    { name: "Home wiring inspection", price: "From $150", rating: 4.8, time: "2-3 hours" },
    { name: "Generator installation", price: "From $300", rating: 4.7, time: "4-6 hours" },
    { name: "Smoke detector installation", price: "From $60", rating: 4.9, time: "1 hour" }
  ],
  "tire-change": [
    { name: "Flat tire replacement", price: "From $50", rating: 4.8, time: "30 mins" },
    { name: "Tire rotation", price: "From $40", rating: 4.7, time: "45 mins" },
    { name: "Seasonal tire change", price: "From $80", rating: 4.9, time: "1 hour" },
    { name: "On-site tire repair", price: "From $45", rating: 4.8, time: "30-45 mins" },
    { name: "Tire balancing", price: "From $60", rating: 4.7, time: "1 hour" },
    { name: "New tire installation", price: "From $100", rating: 4.8, time: "1-2 hours" },
    { name: "TPMS service", price: "From $40", rating: 4.9, time: "30 mins" },
    { name: "Tire pressure check", price: "From $20", rating: 4.8, time: "15 mins" },
    { name: "Wheel alignment", price: "From $80", rating: 4.7, time: "1 hour" },
    { name: "Emergency roadside assistance", price: "From $70", rating: 4.9, time: "30-60 mins" }
  ]
}