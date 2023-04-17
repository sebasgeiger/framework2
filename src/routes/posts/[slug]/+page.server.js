import { posts } from '../data.js';

export async function load({ fetch,params }) {  

  const url = 'https://statsapi.web.nhl.com/api/v1/teams';

  const teamsReq = await fetch(url);

  const teamsRes = await teamsReq.json();

  const nhlteams = teamsRes.teams;

  const post = posts.find((post) => post.slug === params.slug);
  return { 
    nhlteams,
    post
  }
} 

