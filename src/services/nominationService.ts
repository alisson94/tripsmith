import axios from 'axios';
import {TripData} from '@/types/trip'

export async function searchLatLonNomination(locationName: string, city: string) {
    try{
        const query = `${locationName}, ${city}`;

        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'TripSmith/1.0'
            },
            timeout: 10000
        });

        if (response.data && response.data.length > 0) {
            const { lat, lon } = response.data[0];
            return { lat: parseFloat(lat), lon: parseFloat(lon) };
        } else {
            throw null;
        }
    } catch (e) {
        console.error(`Erro com ${locationName} em ${city}: ${e}`);
        return null;
    }
}

export async function addLatLonInScript(scriptJSON: TripData, city: string): Promise<TripData | null> {
    try {
        const hasValidGeo =
            scriptJSON?.cidade_geo &&
            Number.isFinite(scriptJSON.cidade_geo.lat) &&
            Number.isFinite(scriptJSON.cidade_geo.lng);

        if (hasValidGeo) {
            return scriptJSON;
        }

        const coords = await searchLatLonNomination(city, city);

        if (!coords) {
            return null;
        }

        return {
            ...scriptJSON,
            cidade_geo: {
                lat: coords.lat,
                lng: coords.lon
            }
        };
    } catch (e) {
        console.error(`Erro ao adicionar coordenadas no roteiro para ${city}: ${e}`);
        return null;
    }
}

