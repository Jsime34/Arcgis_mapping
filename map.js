define(["esri/Map", "esri/views/MapView", "esri/Graphic"], function(Map, MapView, Graphic) {
  const map = new Map({
    basemap: "streets-navigation-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-100, 40],
    zoom: 4
  });

  const markers = [
    {
        name: "Old Faithful",
        description: "A very big geyser",
        coordinates: [-110.828186, 44.460245],
        category: "USA"
    },
    {
        name: "Rexburg",
        description: "Our lil town",
        coordinates: [-111.785061, 43.818361],
        category: "USA"
    },
    {
        name: "Salt Lake City",
        description: "Utah's biggest city",
        coordinates: [-111.887618, 40.759438],
        category: "USA"
    },
    {
        name: "Boise",
        description: "Idaho's capital",
        coordinates: [-116.209062, 43.616190],
        category: "USA"
    },
    {
        name: "Majes",
        description: "My hometown",
        coordinates: [-72.192619, -16.362286],
        category: "Home"
    },
    {
        name: "Arequipa",
        description: "The city where I was born.",
        coordinates: [-71.545930, -16.398893],
        category: "Home"
    },
    {
        name: "Lima",
        description: "Capital of my home country",
        coordinates: [-77.035871, -12.062202],
        category: "City"
    },
    {
        name: "Ica",
        description: "My father's city",
        coordinates: [-75.729808, -14.063648],
        category: "Home"
    },
    {
        name: "La Paz",
        description: "The capital of Bolivia, tallest capital in the world.",
        coordinates: [-68.136292, -16.499478],
        category: "Tourism"
    },
    {
        name: "Puno",
        description: "Uros Islands and Lake Titicaca city, the musical capital of Peru.",
        coordinates: [-70.019109, -15.842535],
        category: "Tourism"
    },
    {
        name: "Tacna",
        description: "Southernmost point of Peru, limit and frontier with Chile",
        coordinates: [-70.249350, -17.994384],
        category: "Tourism"
    },
    {
        name: "Idaho Falls",
        description: "Closest city, good for shopping",
        coordinates: [-111.998894, 43.500547],
        category: "USA"
    },
    {
        name: "Provo",
        description: "A small city, home of the main BYU branch, great for meeting with old friends.",
        coordinates: [-111.651645, 40.238802],
        category: "USA"
    },
    {
        name: "Iquique",
        description: "Coastal Chilean city, has some nice beaches and great places to trade.",
        coordinates: [-70.134665, -20.241433],
        category: "Tourism"
    },
    {
        name: "Lava Hot Springs",
        description: "Great hot springs for relaxing and leaving your problems behind.",
        coordinates: [-112.005020, 42.619306],
        category: "USA"
    },
    {
        name: "Mesa falls",
        description: "Beautiful falls and nature.",
        coordinates: [-111.326686, 44.188102],
        category: "USA"
    },
    {
        name: "Arica",
        description: "Most northern city of Chile, used to be Peruvian.",
        coordinates: [-70.329435, -18.459372],
        category: "Tourism"
    },
    {
        name: "Sao Paulo",
        description: "Brasil's biggest city and one of the biggest in the continent.",
        coordinates: [-46.463441, -23.435317],
        category: "City"
    },
    {
        name: "Rio de Janeiro",
        description: "Holds one of the world's wonders, a truly colorful city.",
        coordinates: [-43.174602, -22.920965],
        category: "City"
    },
    {
        name: "Florianopolis",
        description: "If you wanna relax and have a good time, this is your place.",
        coordinates: [-48.586359, -27.597997],
        category: "Tourism"
    },
    {
        name: "Penha",
        description: "Beto Carrero's park is the main attraction here, such a great park for families.",
        coordinates: [-48.616792, -26.798300],
        category: "Tourism"
    }
  ]

  const categoryColors = {
      "USA": "red",
      "Home": "green",
      "City": "blue",
      "Tourism": "yellow"
  }

  markers.forEach(loc => {
    const point = {
        type: "point",
        longitude: loc.coordinates[0],
        latitude: loc.coordinates[1]
    };

    const symbol = {
        type: "simple-marker",
        color: categoryColors[loc.category],
        size: "12px",
        outline: {
            color: "black",
            width: 1
        }
    };

    const popupTemplate = {
        title: loc.name,
        content: loc.description
    };

    const graphic = new Graphic({
        geometry: point,
        symbol: symbol,
        popupTemplate: popupTemplate
    });

    view.graphics.add(graphic);
  });

  view.on("click", function(event) {
  const lat = event.mapPoint.latitude.toFixed(6);
  const lon = event.mapPoint.longitude.toFixed(6);

  console.log("Clicked location:", lat, lon);
  alert(`Latitude: ${lat}\nLongitude: ${lon}`);
  }); 


});