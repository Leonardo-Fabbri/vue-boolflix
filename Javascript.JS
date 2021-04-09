var app = new Vue ({
    el:"#app",
    data: {
        search: "",
        films:[],
        flags:["fr","it","en","de","es","ja","ru"]

     
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
                    this.films = result.data.results;
                    console.log(this.films);
                    axios
                    .get("https://api.themoviedb.org/3/search/tv",{
                        params: {
                            api_key: "7a7b54048a2a608bbb36af31c9798538",
                            query: this.search, 
                            language: "it-IT",
    
        
                        }
                   })
                   .then((result)=> {
                    // this.serie=this.films.concat(this.films); 
                    this.films= this.films.concat(result.data.results)

                   
                    console.log(this.films)
                })
            })
            // var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
               
        
        },
        Nstelle(vote) {
            return parseInt(vote / 2)
        },
        bandiera(lang) {
            return `images/${lang}.png` ;
        },
       poster(img) {
           return `https://image.tmdb.org/t/p/w185/${img}`;

        }
        




    }   


});
// il signore degli anelli
Vue.config.devtools = true;