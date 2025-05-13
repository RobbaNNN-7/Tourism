from flights_main.fast_flights import FlightData, Passengers, Result, get_flights

result: Result = get_flights(

    flight_data=[

        FlightData(date="2025-05-10", from_airport="ISB", to_airport="KHI")

    ],

    trip="one-way",

    seat="economy",

    passengers=Passengers(adults=2, children=1, infants_in_seat=0, infants_on_lap=0),

    fetch_mode="fallback",

)


for flight in result.flights:

    print(flight)

# The price is currently... low/typical/high

print("The price is currently", result.current_price)