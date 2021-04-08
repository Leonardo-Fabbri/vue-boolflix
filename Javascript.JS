var app = new Vue ({
    el:"#app",
    data: {
        search: "",
        films:[],
        flags:["france","italy","united_kindom",]

     
    },
    
    methods:{
        searchMovies() {
                axios
                .get("https://api.themoviedb.org/3/search/movie",{
                    params: {
                        api_key: "7a7b54048a2a608bbb36af31c9798538",
                        query: this.search, 
                        language: "it-IT",

                
                    
                    }
               })

                .then((result)=> {
                    console.log(result.data.results);
                    this.films = result.data.results;
                    console.log(this.films);

                   


                })
        
        },
        Nstelle(vote) {
            return parseInt(vote / 2)
        },
        bandiera(lang) {
            return `images/${lang}.png` ;
        }
        




    }   


});
// il signore degli anelli
Vue.config.devtools = true;