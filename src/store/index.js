import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [
    {
      "id": 1,
      "posterName": "Chris Smith",
      "posterAlias": "ChristopherSmith7",
      "posterGender": "Male",
      "posterAge": "21",
      "posterCity": "Tartu",
      "posterTransport": "no",
      "posterDesignation": "rider",
      "postMessage": "Hello! I found this site recently and I'd like to ask what places in Estonia would you recommend to visit. I hear there are a lot of places, but I can't visit them all in 2 days. What sights should I go see and what can I skip? Thanks in advance!",
      "postDate": "Nov 03, 2025",
      "image": null,
      "postLikes": 0
    },
    {
      "id": 2,
      "posterName": "Anna Langenpere",
      "posterAlias": "Lange5432",
      "posterGender": "Female",
      "posterAge": "25",
      "posterCity": "Tartu",
      "posterTransport": "yes",
      "posterDesignation": "driver",
      "postMessage": "Any nice warm food places to eat at? I am going from Tartu to Tapa and would really like to stop for a rest and warm food.",
      "postDate": "Oct 30, 2025",
      "image": null,
      "postLikes": 0
    },
    {
      "id": 3,
      "posterName": "Kendra Paju",
      "posterAlias": "Pajupaju",
      "posterGender": "Female",
      "posterAge": "28",
      "posterCity": "Tartu",
      "posterTransport": "no",
      "posterDesignation": "rider",
      "postMessage": "Gathering a group for a spa day on the weekend! The season change can be exhausting, so don't miss a chance to refresh yourself and make new friends.",
      "postDate": "Oct 20, 2025",
      "image": null,
      "postLikes": 0
    },
    {
      "id": 4,
      "posterName": "Ülo Üleoja",
      "posterAlias": "ÜleojaMees",
      "posterGender": "Male",
      "posterAge": "31",
      "posterCity": "Tartu",
      "posterTransport": "yes",
      "posterDesignation": "driver",
      "postMessage": "Any travel recommendations? I want to go somewhere warm during November but I'd like to go someplace else other than Bahamas.",
      "postDate": "Oct 17, 2025",
      "image": null,
      "postLikes": 0
    },
    {
      "id": 5,
      "posterName": "Micheal Knight",
      "posterAlias": "MK01",
      "posterGender": "Male",
      "posterAge": "22",
      "posterCity": "Tartu",
      "posterTransport": "yes",
      "posterDesignation": "driver",
      "postMessage": "Took amazing photograph during vacation, wanted to share!",
      "postDate": "Oct 06, 2025",
      "image": "https://i.postimg.cc/fk63Tj3R/free-background-lurdy9nef5pl8ugp.webp",
      "postLikes": 0
    },
    {
      "id": 6,
      "posterName": "Egon V.",
      "posterAlias": "EgonVM",
      "posterGender": "Male",
      "posterAge": "21",
      "posterCity": "Tartu",
      "posterTransport": "no",
      "posterDesignation": "driver",
      "postMessage": "Playing video games made me want to go on a tropical vacation. Where could I go that looks tropical like this?",
      "postDate": "Oct 05, 2025",
      "image": "https://i.postimg.cc/14Lg5cgP/Egons-gaming-picture.png",
      "postLikes": 0
    },
    {
      "id": 7,
      "posterName": "Kelly Päike",
      "posterAlias": "kelly88997",
      "posterGender": "Female",
      "posterAge": "24",
      "posterCity": "Tartu",
      "posterTransport": "yes",
      "posterDesignation": "rider",
      "postMessage": "Can anyone help me refactor JS code for WAD last homework, my project feels like a mess :S. Please send me a message!",
      "postDate": "Oct 04, 2025",
      "image": null,
      "postLikes": 0
    },
    {
      "id": 8,
      "posterName": "Laura Kastan",
      "posterAlias": "lauura",
      "posterGender": "Female",
      "posterAge": "19",
      "posterCity": "Tartu",
      "posterTransport": "yes",
      "posterDesignation": "driver",
      "postMessage": "Visited my good friend at bay area, Marcus, the lighthouse keeper. Drank few beers under clear night sky. Never seen Milky Way before like this. Took a picture on hike home, night was as bright as day. Enjoy!",
      "postDate": "Sept 29, 2025",
      "image": "https://i.postimg.cc/3WPyJCyw/free-background-kx6msnemub2vv0aw.webp",
      "postLikes": 0
    },
    {
      "id": 9,
      "posterName": "Kert Kuup",
      "posterAlias": "KKp998",
      "posterGender": "Male",
      "posterAge": "27",
      "posterCity": "Tartu",
      "posterTransport": "yes",
      "posterDesignation": "rider",
      "postMessage": "New school year started, so any advice on coding that gets me through a year?",
      "postDate": "Sept 01, 2025",
      "image": null,
      "postLikes": 0
    },
    {
      "id": 10,
      "posterName": "Rachael Skyforged",
      "posterAlias": "skybornR1",
      "posterGender": "Female",
      "posterAge": "25",
      "posterCity": "Tartu",
      "posterTransport": "yes",
      "posterDesignation": "rider",
      "postMessage": "Looking group for Data Mining Sciences team excercise. Please PM me!",
      "postDate": "Sept 01, 2025",
      "image": null,
      "postLikes": 0
    }
]
  },

  mutations: {
    addLike(state, postId) {
      const post = state.posts.find(p => p.id === postId);
      if (post) post.postLikes++;
    },

    resetLikes(state) {
      state.posts.forEach(post => {
        post.postLikes = 0;
      });
    }
  }
});
