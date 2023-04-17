
export async function load({ fetch }) {  

  const url = 'https://statsapi.web.nhl.com/api/v1/teams';

  const teamsReq = await fetch(url);

  const teamsRes = await teamsReq.json();

  const nhlteams = teamsRes.teams;

  return { 
    nhlteams
  }
} 


// https://statsapi.web.nhl.com/api/v1/teams

// https://github.com/erunion/sport-api-specifications/blob/master/nhl/nhl.yaml