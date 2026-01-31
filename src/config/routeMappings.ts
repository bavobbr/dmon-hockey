export const ROUTE_REDIRECTS = {
  // Lidmaatschap
  '/membership/info': '/lidmaatschap/info',
  '/membership/register': '/lidmaatschap/registratie',
  '/membership/indoor-registration': '/lidmaatschap/indoor-registratie',
  '/membership/insurance': '/lidmaatschap/verzekering',
  '/membership/contact': '/lidmaatschap/contact',

  // Sportief
  '/sporting/training': '/sportief/training',
  '/sporting/how-to-play': '/sportief/hoe-te-spelen',
  '/sporting/rules': '/sportief/regels',
  '/sporting/rules/u6-u8': '/sportief/regels/u6-u8',
  '/sporting/rules/u9': '/sportief/regels/u9',
  '/sporting/rules/u10-u12': '/sportief/regels/u10-u12',
  '/sporting/rules/u14-plus': '/sportief/regels/u14-plus',
  '/sporting/rules/indoor': '/sportief/regels/indoor',
  '/sporting/stick-guide': '/sportief/stick-gids',
  '/sporting/coaches-info': '/sportief/coaches-info',
  '/sporting/hockey-principles': '/sportief/hockey-principes',
  '/sporting/indoor-hockey': '/sportief/indoor-hockey',
  '/sporting/rules-agent': '/sportief/regels-assistent',

  // Club
  '/club/field': '/club/veld',
  '/club/board': '/club/bestuur',
  '/club/values': '/club/waarden',
  '/club/history': '/club/geschiedenis',
  '/club/field-status': '/club/veld-status',
} as const;
