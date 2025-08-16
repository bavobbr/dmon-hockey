import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const ClubLocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // You'll need to get your Mapbox token from the Supabase secrets
    // For now, we'll use a placeholder that you can replace
    mapboxgl.accessToken = 'your-mapbox-token-here';
    
    // D-mon Hockey Club location in Dendermonde, Belgium
    const clubLocation: [number, number] = [4.1016, 51.0283]; // Longitude, Latitude for Dendermonde

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: clubLocation,
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add a marker for the hockey club
    const marker = new mapboxgl.Marker({
      color: '#0ea5e9', // Using a blue color for the marker
    })
      .setLngLat(clubLocation)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-3">
              <h3 class="font-semibold text-lg">D-mon Hockey Club</h3>
              <p class="text-sm text-muted-foreground">Dendermonde, Belgium</p>
              <p class="text-sm mt-2">Premier field hockey club in Belgium</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Find Our Club
        </CardTitle>
        <CardDescription>
          Located in the heart of Dendermonde, Belgium
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapContainer} 
          className="w-full h-96 rounded-lg overflow-hidden border"
        />
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-2">Getting Here</h4>
          <p className="text-sm text-muted-foreground">
            Our hockey field is easily accessible by car, bike, or public transport. 
            Free parking is available on-site for members and visitors.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClubLocationMap;