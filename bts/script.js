// document.addEventListener("DOMContentLoaded", function() {
//     const playlist = document.getElementById("playlist");
//     const audioPlayer = document.getElementById("audio-player");
//     const albumImage = document.getElementById("album-image");
//     const songTitle = document.getElementById("song-title");
//     const songAlbum = document.getElementById("song-album");

//     // Define your list of songs with titles and audio file paths
//     const songs = [
//         { title: " Yet To Come", src: "noodles/2_5265163462857727405.mp3", image: "album1.jpg" },
//         { title: " Run ", src: "noodles/2_5265163462857727408.mp3", image: "album2.jpg" },
//         { title: " For Youth", src: "noodles/2_5265163462857727408.mp3", image: "album1.jpg" },
//         { title: " Friends ", src: "noodles/2_5265192058749983393.mp3", image: "album2.jpg" },
//         { title: " Born Singer", src: "noodles/2_5267094304060347582.mp3", image: "album1.jpg" },
//         { title: " No More Dream ", src: "noodles/2_5267094304060347583.mp3", image: "album2.jpg" },
//         { title: " N.O ", src: "noodles/2_5267094304060347584.mp3", image: "album1.jpg" },
//         { title: " Boy In LUV ", src: "noodles/2_5267094304060347585.mp3", image: "album2.jpg" },
//         { title: "Danger ", src: "noodles/2_5267094304060347586.mp3", image: "album1.jpg" },
//         { title: " I Need U ", src: "noodles/2_5267094304060347587.mp3", image: "album2.jpg" },
//         { title: " Burning Up (FIRE)", src: "noodles/2_5267094304060347589.mp3", image: "album1.jpg" },
//         { title: " Blood Sweat & Tears", src: "noodles/2_5267094304060347590.mp3", image: "album2.jpg" },
//          { title: "Spring Day", src: "noodles/2_5267094304060347591.mp3", image: "album1.jpg" },
//         { title: " DNA ", src: "noodles/2_5267094304060347592.mp3", image: "album2.jpg" },
//         { title: " FAKE LOVE", src: "noodles/2_5267094304060347593.mp3", image: "album1.jpg" },
//         { title: "IDOL ", src: "noodles/2_5267094304060347594.mp3", image: "album2.jpg" },
//         { title: " Boy With LUV", src: "noodles/2_5267094304060347595.mp3", image: "album1.jpg" },
//         { title: " Dynamite ", src: "noodles/2_5267094304060347597.mp3", image: "album2.jpg" },
//         { title: " Butter", src: "noodles/2_5267094304060347598.mp3", image: "album1.jpg" },
//         { title: " Stay ", src: "noodles/2_5267094304060347600.mp3", image: "album2.jpg" },
//         { title: " Moon", src: "noodles/2_5267094304060347601.mp3", image: "album1.jpg" },
//         { title: " Trivia : Seesaw ", src: "noodles/2_5267094304060347603.mp3", image: "album2.jpg" },
//         { title: " Her", src: "noodles/2_5267094304060347606.mp3", image: "album1.jpg" },
//         { title: " Filter ", src: "noodles/2_5267094304060347607.mp3", image: "album2.jpg" },
//         { title: " Life Goes On", src: "noodles/2_5267239740242925616.mp3", image: "album1.jpg" },
//         { title: " Euphoria ", src: "noodles/2_5267386202922687839.mp3", image: "album2.jpg" },
//         { title: " Filter", src: "noodles/2_5265163462857727405.mp3", image: "album1.jpg" },
//         { title: " 3D ", src: "noodles/2_5341542103233084897.flac", image: "album2.jpg" },
//         { title: " Standing next to you", src: "noodles/2_5265163462857727405.mp3", image: "album1.jpg" },
//         { title: "Hate you ", src: "noodles/2_5265163462857727408.mp3", image: "album2.jpg" },
//         { title: " Jamais Vu ", src: "noodles/2_5267094304060347602.mp3", image: "album1.jpg" },
//         { title: " EGO ", src: "noodles/2_5267094304060347605.mp3", image: "album1.jpg" },
        
//         // Add more songs here
//     ];

//     // Populate the playlist dynamically
//     songs.forEach((song, index) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = song.title;
//         listItem.setAttribute("data-src", song.src);
//         listItem.setAttribute("data-image", song.image);
//         playlist.appendChild(listItem);
//     });

//     // Event listener for playlist items
//     playlist.addEventListener("click", function(e) {
//         if (e.target.tagName === "LI") {
//             const songSrc = e.target.getAttribute("data-src");
//             const albumImageSrc = e.target.getAttribute("data-image");
//             const songName = e.target.textContent;

//             audioPlayer.src = songSrc;
//             albumImage.src = albumImageSrc;
//             songTitle.textContent = songName;
//             songAlbum.textContent = "BTS Album"; // Change this to actual album name
//         }
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const playlist = document.getElementById("playlist");
    const audioPlayer = document.getElementById("audio-player");
    const albumImage = document.getElementById("album-image");
    const songTitle = document.getElementById("song-title");
    const songAlbum = document.getElementById("song-album");

    // Define your list of songs with titles and audio file paths
    const songs = [
        { title: " Yet To Come", src: "noodles/2_5265163462857727405.mp3", image: "./images/1.jpeg" },
        { title: " Run ", src: "noodles/2_5265163462857727408.mp3", image: "./images/2.jpeg" },
        { title: " For Youth", src: "noodles/2_5265163462857727408.mp3", image: "./images/3.jpeg" },
        { title: " Friends ", src: "noodles/2_5265192058749983393.mp3", image: "./images/2.jpeg" },
        { title: " Born Singer", src: "noodles/2_5267094304060347582.mp3", image: "./images/1.jpeg" },
        { title: " No More Dream ", src: "noodles/2_5267094304060347583.mp3", image: "./images/1.jpeg" },
        { title: " N.O ", src: "noodles/2_5267094304060347584.mp3", image: "./images/1.jpeg" },
        { title: " Boy In LUV ", src: "noodles/2_5267094304060347585.mp3", image: "./images/album1.jpeg" },
        { title: "Danger ", src: "noodles/2_5267094304060347586.mp3", image: "./images/album.jpeg" },
        { title: " I Need U ", src: "noodles/2_5267094304060347587.mp3", image: "./images/album1.jpeg" },
        { title: " Burning Up (FIRE)", src: "noodles/2_5267094304060347589.mp3", image: "./images/album1.jpeg" },
        { title: " Blood Sweat & Tears", src: "noodles/2_5267094304060347590.mp3", image: "./images/album2.jpeg" },
         { title: "Spring Day", src: "noodles/2_5267094304060347591.mp3", image: "./images/album2.jpeg" },
        { title: " DNA ", src: "noodles/2_5267094304060347592.mp3", image: "./images/album1.jpeg" },
        { title: " FAKE LOVE", src: "noodles/2_5267094304060347593.mp3", image: "./images/3.jpeg" },
        { title: "IDOL ", src: "noodles/2_5267094304060347594.mp3", image: "./images/1.jpeg" },
        { title: " Boy With LUV", src: "noodles/2_5267094304060347595.mp3", image: "./images/album2.jpeg" },
        { title: " Dynamite ", src: "noodles/2_5267094304060347597.mp3", image: "./images/1.jpeg" },
        { title: " Butter", src: "noodles/2_5267094304060347598.mp3", image: "./images/album2.jpeg" },
        { title: " Stay ", src: "noodles/2_5267094304060347600.mp3", image: "./images/1.jpeg" },
        { title: " Moon", src: "noodles/2_5267094304060347601.mp3", image: "./images/album2.jpeg" },
        { title: " Trivia : Seesaw ", src: "noodles/2_5267094304060347603.mp3", image: "./images/album1.jpeg" },
        { title: " Her", src: "noodles/2_5267094304060347606.mp3", image: "./images/3.jpeg" },
        { title: " Filter ", src: "noodles/2_5267094304060347607.mp3", image: "./images/album1.jpeg" },
        { title: " Life Goes On", src: "noodles/2_5267239740242925616.mp3", image: "./images/2.jpeg" },
        { title: " Euphoria ", src: "noodles/2_5267386202922687839.mp3", image: "./images/album1.jpeg" },
        { title: " Filter", src: "noodles/2_5265163462857727405.mp3", image: "./images/2.jpeg" },
        { title: " 3D ", src: "noodles/2_5341542103233084897.flac", image: "./images/1.jpeg" },
        { title: " Standing next to you", src: "noodles/2_5265163462857727405.mp3", image: "./images/album1.jpeg" },
        { title: "Hate you ", src: "noodles/2_5265163462857727408.mp3", image: "./images/album2.jpeg" },
        { title: " Jamais Vu ", src: "noodles/2_5267094304060347602.mp3", image: "./images/3.jpeg" },
        { title: " EGO ", src: "noodles/2_5267094304060347605.mp3", image: "./images/album1.jpeg" },
        
        // Add more songs here
    ];

    // Populate the playlist dynamically
    songs.forEach((song, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = song.title;
        listItem.setAttribute("data-src", song.src);
        listItem.setAttribute("data-image", song.image);
        playlist.appendChild(listItem);
    });

    // Event listener for playlist items
    playlist.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            const songSrc = e.target.getAttribute("data-src");
            const albumImageSrc = e.target.getAttribute("data-image");
            const songName = e.target.textContent;

            audioPlayer.src = songSrc;
            albumImage.src = albumImageSrc;
            songTitle.textContent = songName;
            songAlbum.textContent = "BTS Album"; // Change this to actual album name
            audioPlayer.play(); // Autoplay the selected song
        }
    });
});
