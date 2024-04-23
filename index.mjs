import fetch from 'node-fetch';
import fs from 'fs';
const links = [
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_antimonide",
        "name": "Aluminium antimonide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_arsenate",
        "name": "Aluminium arsenate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_arsenide",
        "name": "Aluminium arsenide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_diboride",
        "name": "Aluminium diboride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_bromide",
        "name": "Aluminium bromide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_carbide",
        "name": "Aluminium carbide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_iodide",
        "name": "Aluminium iodide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_nitride",
        "name": "Aluminium nitride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_oxide",
        "name": "Aluminium oxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_phosphide",
        "name": "Aluminium phosphide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_chloride",
        "name": "Aluminium chloride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_fluoride",
        "name": "Aluminium fluoride"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_hydroxide",
        "name": "Aluminium hydroxide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_nitrate",
        "name": "Aluminium nitrate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_sulfide",
        "name": "Aluminium sulfide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_sulfate",
        "name": "Aluminium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Aluminium_potassium_sulfate",
        "name": "Aluminium potassium sulfate"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonia",
        "name": "Ammonia"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_azide",
        "name": "Ammonium azide"
    },
    {
        "link": "https://en.wikipedia.org/api/rest_v1/page/summary/Ammonium_bicarbonate",
        "name": "Ammonium bicarbonate"
    }];

// Function to fetch data from API links and save as JSON
async function fetchData() {
    const mainList = [];
    for (const link of links) {
        if (link.link.includes('api') || link.link.includes('rest')) {
            try {
                const response = await fetch(link.link);
                const data = await response.json();
                mainList.push(data);
                console.log('fetching data:'+link.name);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            mainList.push(link);
        }
    }
    fs.writeFileSync('result.json', JSON.stringify(mainList, null, 2));
}

fetchData();
