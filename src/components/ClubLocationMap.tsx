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
        const {
          data,
          error: functionError
        } = await supabase.functions.invoke('get-mapbox-token');
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
          zoom: 15
        });

        // Add navigation controls
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Add a marker for the hockey club
        const marker = new mapboxgl.Marker({
          color: '#0ea5e9' // Using a blue color for the marker
        }).setLngLat(clubLocation).setPopup(new mapboxgl.Popup({
          offset: 25
        }).setHTML(`
                <div class="p-3">
                  <h3 class="font-semibold text-lg">D-mon Hockey Club</h3>
                  <p class="text-sm text-muted-foreground">Dendermonde, Belgium</p>
                  <p class="text-sm mt-2">Premier hockeyclub in België</p>
                </div>
              `)).addTo(map.current);
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
  return <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Vind Onze Club
        </CardTitle>
        <CardDescription>
          Gelegen in het hart van Dendermonde, België
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error ? <div className="w-full h-64 md:h-96 rounded-lg border flex items-center justify-center bg-muted">
            <div className="text-center">
              <p className="text-muted-foreground">Fout bij laden van kaart</p>
              <p className="text-sm text-muted-foreground mt-1">{error}</p>
            </div>
          </div> : <div ref={mapContainer} className="w-full h-64 md:h-96 rounded-lg overflow-hidden border" style={{
        minHeight: '256px'
      }}>
            {isLoading && <div className="w-full h-full flex items-center justify-center bg-muted">
                <p className="text-muted-foreground">Kaart laden...</p>
              </div>}
          </div>}
        <div className="mt-4 p-4 bg-muted rounded-lg">
          
          <p className="text-sm text-muted-foreground">
            Ons hockeyveld is gemakkelijk bereikbaar met de auto, fiets of openbaar vervoer. 
            Gratis parking is beschikbaar voor leden en bezoekers.
          </p>
        </div>
      </CardContent>
    </Card>;
};
export default ClubLocationMap;