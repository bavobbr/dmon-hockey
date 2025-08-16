import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ClubLocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapContainer.current) return;

      try {
        setIsLoading(true);
        setError(null);

        // Get Mapbox token from edge function
        const { data, error: functionError } = await supabase.functions.invoke('get-mapbox-token');
        
        if (functionError) {
          throw new Error(functionError.message || 'Failed to get Mapbox token');
        }

        if (!data?.token) {
          throw new Error('No Mapbox token received');
        }

        mapboxgl.accessToken = data.token;
        
        // D-mon Hockey Club location in Dendermonde, Belgium
        const clubLocation: [number, number] = [4.104237, 51.0398272467]; // Longitude, Latitude for Dendermonde , 4.104237130352323

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

        setIsLoading(false);
      } catch (err) {
        console.error('Map initialization error:', err);
        setError(err instanceof Error ? err.message : 'Failed to load map');
        setIsLoading(false);
      }
    };

    initializeMap();

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
        {error ? (
          <div className="w-full h-96 rounded-lg border flex items-center justify-center bg-muted">
            <div className="text-center">
              <p className="text-muted-foreground">Error loading map</p>
              <p className="text-sm text-muted-foreground mt-1">{error}</p>
            </div>
          </div>
        ) : (
          <div 
            ref={mapContainer} 
            className="w-full h-96 rounded-lg overflow-hidden border"
            style={{ minHeight: '384px' }}
          >
            {isLoading && (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <p className="text-muted-foreground">Loading map...</p>
              </div>
            )}
          </div>
        )}
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