import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0'

Deno.serve(async (req) => {
  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const sponsors = [
      { name: 'Wcup', tier: 'diamond', website_url: 'https://wcup.eu', active: true },
      { name: 'Cruin', tier: 'diamond', website_url: null, active: true },
      { name: 'Verheyden en CO Accountants', tier: 'gold', website_url: 'https://www.vhco.be', active: true },
      { name: 'Integra', tier: 'silver', website_url: null, active: true },
      { name: 'Houtland', tier: 'bronze', website_url: 'https://www.houtland.be', active: true },
      { name: 'Vervoer De Decker', tier: 'bronze', website_url: null, active: true },
      { name: 'Osaka', tier: 'bronze', website_url: null, active: true },
      { name: 'Qualimandjaro', tier: 'bronze', website_url: 'https://www.qualimandjaro.be', active: true },
      { name: 'Topsport', tier: 'bronze', website_url: 'https://www.topsport.be', active: true },
      { name: 'Inbraakveilig', tier: 'bronze', website_url: 'https://inbraakveilig.be', active: true },
      { name: '4LS', tier: 'bronze', website_url: 'https://www.4ls.be', active: true },
      { name: 'Van Mossel', tier: 'bronze', website_url: 'https://www.vanmossel-mertens.be', active: true },
      { name: 'De Witte De Sutter', tier: 'bronze', website_url: 'https://www.dewitte.com', active: true },
      { name: 'BESD interieur', tier: 'bronze', website_url: null, active: true },
      { name: 'KVIK Aalst', tier: 'bronze', website_url: 'https://www.kvik.be', active: true },
      { name: 'Immo Robert', tier: 'bronze', website_url: 'https://www.immorobert.be', active: true },
      { name: 'Tuincentrum Vincent', tier: 'bronze', website_url: 'https://www.tuincentrumvincent.be', active: true },
      { name: 'Verco Tapijten', tier: 'bronze', website_url: 'https://www.verco.be', active: true },
      { name: 'Moore', tier: 'bronze', website_url: 'https://www.moore.be', active: true },
      { name: 'Frédéric Van den Berghe', tier: 'bronze', website_url: null, active: true },
      { name: 'Sivafrost', tier: 'bronze', website_url: 'https://www.sivafrost.be', active: true },
      { name: 'Caudron', tier: 'bronze', website_url: 'https://www.caudron.be', active: true },
      { name: 'Garage De Kimpe', tier: 'bronze', website_url: 'https://www.garagedekimpe.be', active: true },
      { name: 'Tim Govaert Gevelrenovatie', tier: 'bronze', website_url: 'https://www.timgovaert.be', active: true },
      { name: 'Atelier Keurslager', tier: 'bronze', website_url: 'https://www.atelierkeurslager.be', active: true },
      { name: 'Data Trust Associates', tier: 'bronze', website_url: 'https://www.datatrust.be', active: true },
      { name: 'Tuinen Van de Wiele', tier: 'bronze', website_url: 'https://www.tuinenvandewiele.be', active: true },
      { name: 'Cornelis Bedding', tier: 'bronze', website_url: 'https://www.cornelisbedding.be', active: true },
      { name: 'AU Bureau coworking', tier: 'bronze', website_url: 'https://www.aubureau.be', active: true },
      { name: 'Stad Dendermonde', tier: 'bronze', website_url: 'https://www.dendermonde.be', active: true },
    ]

    const { data, error } = await supabaseClient
      .from('sponsors')
      .insert(sponsors)
      .select()

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ success: true, count: data.length, sponsors: data }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
