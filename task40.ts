interface Album {
        artist: string;
        title: string;
        num_tracks?: number;
    }
    
    function make_album(artist: string, title: string, num_tracks?: number): Album {
        const album: Album = {
            artist: artist,
            title: title
        };
        
        if (num_tracks !== undefined) {
            album.num_tracks = num_tracks;
        }
        
        return album;
    }
    
    const album1: Album = make_album("Imagine Dragons", "Night Visions");
    const album2: Album = make_album("Ed Sheeran", "Divide", 16);
    const album3: Album = make_album("Taylor Swift", "1989", 13);
    
    console.log(album1);
    console.log(album2);
    console.log(album3);