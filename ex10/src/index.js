function myFunction() {
    var myMusic = {
        001: {
            artist: "Chet Baker",
            title: "Almost blue",
            release_year: 1982,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add record here
            artist: "Stevie Wonder",
            title: "With a Song in My Heart",
            release_year: 1963,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: false
        }
    };

    return myMusic;
}

myFunction()[2];
module.exports = myFunction;