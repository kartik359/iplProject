import React, { useEffect } from 'react'
import { useState } from 'react'
import './news.css'
let newsData={
  "storyList": [
    {
      "story": {
        "id": 135415,
        "hline": "Sutherland leads Superchargers to thumping win over Originals",
        "intro": "The Superchargers restricted the Originals to just 94 before chasing it down with 35 balls to spare",
        "pubTime": "1756231471089",
        "source": "Cricbuzz",
        "storyType": "Reports",
        "imageId": 743496,
        "seoHeadline": "Sutherland leads Superchargers to thumping win over Originals",
        "context": "Women's Hundred, 2025",
        "coverImage": {
          "id": "743496",
          "caption": "Litchfield and Monaghan shared a 54-run stand ",
          "source": "Getty"
        },
        "entitlements": {},
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 135414,
        "hline": "Vijay Shankar set for Tripura switch",
        "intro": "The all-rounder confirms obtaining NOC from TNCA and awaits approval from Tripura",
        "pubTime": "1756227252170",
        "source": "Cricbuzz",
        "storyType": "News",
        "imageId": 743487,
        "seoHeadline": "Vijay Shankar set for Tripura switch",
        "context": "India domestic season",
        "coverImage": {
          "id": "743487",
          "caption": "The all-rounder confirms obtaining NOC from TNCA and awaits approval from Tripura",
          "source": "AFP"
        },
        "entitlements": {},
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 135413,
        "hline": "Netherlands recall Zulfiqar, Braat for Bangladesh T20Is",
        "intro": "There's also a call-up for for the promising 17 year-old Cedric de Lange",
        "pubTime": "1756220958992",
        "source": "Cricbuzz",
        "storyType": "News",
        "imageId": 743444,
        "seoHeadline": "Netherlands recall Zulfiqar, Braat for Bangladesh T20Is",
        "context": "Netherlands tour of Bangladesh, 2025",
        "coverImage": {
          "id": "743444",
          "caption": "Zulfiqar returns to the T20I set-up after a gap of six years ",
          "source": "Getty"
        },
        "entitlements": {},
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 135412,
        "hline": "Cricket economy struck hard by real money gaming ban",
        "intro": "The ripple effects of the recent ban on real money gaming in India will be felt across the cricketing industry - from BCCI to cricketers to cricket leagues",
        "pubTime": "1756204759921",
        "source": "Cricbuzz",
        "storyType": "News",
        "imageId": 743438,
        "seoHeadline": "Cricket, cricketers and real money gaming bill",
        "context": "Real Money Gaming Ban",
        "coverImage": {
          "id": "743438",
          "caption": "Cricketers are set to lose a significant chunk of their endorsement income [File]",
          "source": "AFP"
        },
        "entitlements": {},
        "adsType": {}
      }
    },
   
    {
      "story": {
        "id": 135411,
        "hline": "Cox, Jacks put Invincibles on course for a direct entry to final",
        "intro": "Among the three teams in the mix to make the final directly, the Invincibles enjoy a far superior NRR",
        "pubTime": "1756174347439",
        "source": "Cricbuzz",
        "storyType": "News",
        "imageId": 743425,
        "seoHeadline": "Cox, Jacks put Invincibles on course for a direct entry to final",
        "context": "The Men's Hundred, 2025",
        "coverImage": {
          "id": "743425",
          "caption": "Jordan Cox hit 47 off 27 balls in his team's victory",
          "source": "Getty"
        },
        "entitlements": {},
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 135410,
        "hline": "O'Rourke, Phillips & Allen ruled out of Australia series; Santner set for surgery",
        "intro": "While O'Rourke and Allen are out for three months, Phillips has a timeline of one month before reassessment. Santner too will be out for a month at least\n",
        "pubTime": "1756173215276",
        "source": "Cricbuzz",
        "storyType": "News",
        "imageId": 743427,
        "seoHeadline": "William O'Rourke, Glenn Phillips & Finn Allen ruled out of Australia series; Mitchell Santner set for surgery New Zealand Blackcaps",
        "context": "Injury Woes",
        "coverImage": {
          "id": "743427",
          "caption": "William O' Rourke suffered a stress fracture in his lower back against Zimbabwe last month ",
          "source": "Getty"
        },
        "entitlements": {},
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 135409,
        "hline": "BCB ACU recommends five-year ban for Sabbir over match-fixing",
        "intro": "According to ACU documents seen by Cricbuzz, Sabbir was found to have breached multiple clauses of the BCB's Anti-Corruption Code",
        "pubTime": "1756172600197",
        "source": "Cricbuzz",
        "storyType": "News",
        "imageId": 743423,
        "seoHeadline": "Bangladesh Cricket Board Match fixing Anti-Corruption Unit",
        "context": "Bangladesh Cricket",
        "coverImage": {
          "id": "743423",
          "caption": "[Representational image] The case has been referred to the BCB's Anti-Corruption Tribunal for formal proceedings under Article 5 of the Code.",
          "source": "Getty"
        },
        "entitlements": {},
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 135408,
        "hline": "Spirit win big to keep top-three hopes alive",
        "intro": "Dean and Gray returned identical figures of 2 for 11 as the Invincibles were restricted to a modest 108/8",
        "pubTime": "1756144453106",
        "source": "Cricbuzz",
        "storyType": "Reports",
        "imageId": 743371,
        "seoHeadline": "The Hundred Women's Competition 2025 London Spirit win big to keep top-three hopes alive Oval Invincibles ",
        "context": "The Hundred Women's Competition, 2025",
        "coverImage": {
          "id": "743371",
          "caption": "Skipper Dean helped set up the win with her 2/11.",
          "source": "Getty"
        },
        "entitlements": {},
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 135407,
        "hline": "James Anderson leads SA20 auction list",
        "intro": "782 players have registered for the auction but only 84 places are up for grabs",
        "pubTime": "1756139331390",
        "source": "Cricbuzz",
        "storyType": "News",
        "imageId": 743301,
        "seoHeadline": "James Anderson leads SA20 auction list",
        "context": "SA20",
        "coverImage": {
          "id": "743301",
          "caption": "Anderson is among the oldest players in the auction list",
          "source": "Getty"
        },
        "entitlements": {},
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 135406,
        "hline": "Brendan Taylor returns for ODIs against Sri Lanka",
        "intro": "Zimbabwe have also been given a fillip through the fit-again pair of Blessing Muzarabani and Richard Ngarava",
        "pubTime": "1756133627118",
        "source": "Cricbuzz",
        "storyType": "News",
        "imageId": 743290,
        "seoHeadline": "Brendan Taylor returns for ODIs against Sri Lanka",
        "context": "Long awaited comeback",
        "coverImage": {
          "id": "743290",
          "caption": "Brendan Taylor last featured for Zimbabwe in 2021.",
          "source": "Getty"
        },
        "entitlements": {},
        "adsType": {}
      }
    }
  ],
  "lastUpdatedTime": "1756240326022",
  "appIndex": {
    "seoTitle": "Latest and breaking Cricket News - Cricbuzz | Cricbuzz.com",
    "webURL": "http://www.cricbuzz.com/cricket-news"
  }
}


function News() {
  const [news,setNews]=useState(null)
  async function fetchNews() {
  const url = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index';
  const options = {
    method: 'GET',
    headers: {
     'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setNews(result);
  } catch (error) {
    console.error(error);
    setNews(newsData); // fallback
  }
}

useEffect(() => {
  fetchNews();         // no arguments passed
  // setNews(newsData);   // fallback static data
}, []);

  return (
    <div className="container">
      {
        news?.storyList?.map((data,i)=>(
             <div className="card" key={i}>
  <div className="card-body">
    <h5 className="card-title">{i+1}. {(data.story?.hline)?data.story?.hline:"NULL"}</h5>
    {/* <img src={`https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${data.story.imageId}/i.jpg`} alt="newsimg" /> */}
    <h6 className="card-subtitle ">{(data.story?.intro)?data.story?.intro:"NULL"}</h6>
    <p className="card-text"> <strong>Context:</strong>  {(data.story?.context)?data.story?.context:"NULL"}</p>
      <p className="card-text"> <strong>Source:</strong>  {(data.story?.source)?data.story?.source:"NULL"}</p>
      <p className="card-text"> <strong>StoryType:</strong>  {(data.story?.storyType)?data.story?.storyType:"NULL"}</p>
  </div>
   <a href={news.appIndex.webURL} className="card-link">{news.appIndex?.seoTitle}</a>
   
</div>
        ))
      }
 
</div>
  )
}

export default News;
