import Image from "next/image";
import { EventModel } from "./models";

async function getEvents(): Promise<EventModel[]>{
  const response = await fetch('http://localhost:8000/events');
  return response.json();
}

export default async function Home() {
  const events = await getEvents();
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8"></h1>
      <div className="grid grid-cols-3 gap-8">
        {events.map((event, key) => (
          <div key={key} className="bg-gray-500 shadow-lg rounded-lg">
          <img></img>
          <div className="p-4">
            <h2 className="text-xl text-white font-bold">{event.name}</h2>
            <p className="text-gray-200 mt-2">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-200 mt-2">Lugares disponíveis: {event.available_spots}</p>
            <p className="text-gray-200 mt-2">{event.price.toFixed(2).replace(".",",")}</p>
            <p><button>Reservar</button></p>
          </div>
        </div>
        ))}
      </div>
    </main>
  );
}
