

/* JavaScript to dynamically change the profile and image */

function showProfile(member) {
    const image = document.getElementById('carousel-image');
    const title = document.getElementById('profile-title');
    const description = document.getElementById('profile-description');

    // Switch statement to handle profile selection
    switch (member) {
        case 'group':
            image.src = 'Images/bini_feel_good_album_cover.svg';
            title.textContent = 'About BINI';
            description.textContent = 'Filipino pop phenomenon BINI features 8 multi-talented members: Aiah, Colet, Maloi, Gwen, Stacey, Mikha, Jhoanna, and Sheena. The girls have quickly become the biggest female Filipino artist in history...';
            break;
        case 'aiah':
            image.src = 'Images/Aiah.svg';  // Path to Aiah's image
            title.textContent = 'BINI AIAH';
            description.innerHTML = '<strong>Full Name:</strong> Maraiah Queen Arceta<br><strong>Date of Birth:</strong> January 27, 2001<br><strong>Position:</strong> Main Rapper, Sub-Vocalist, Visual<br><strong>Hometown:</strong> Lapu-Lapu City, Cebu<br><strong>Zodiac Sign:</strong> Aquarius';
            break;
        case 'colet':
            image.src = 'Images/Colet.svg';  // Path to Colet's image
            title.textContent = 'BINI COLET';
            description.innerHTML = '<strong>Full Name:</strong> Ma. Nicolette Floresnos Vergara<br><strong>Date of Birth:</strong> September 14, 2001<br><strong>Position:</strong> Main Vocalist, Lead Dancer, Lead Rapper<br><strong>Hometown:</strong> Tagbilaran City, Bohol<br><strong>Zodiac Sign:</strong> Virgo';
            break;
        case 'maloi':
            image.src = 'Images/Maloi.svg';  // Path to Maloi's image
            title.textContent = 'BINI MALOI';
            description.innerHTML = '<strong>Full Name:</strong> Mary Loi Yves Kipte Ricalde<br><strong>Date of Birth:</strong> May 27, 2002<br><strong>Position:</strong> Main Vocalist<br><strong>Hometown:</strong> General Trias City, Cavite<br><strong>Zodiac Sign:</strong> Gemini';
            break;
        case 'gwen':
            image.src = 'Images/Gwen.svg';  // Path to Gwen's image
            title.textContent = 'BINI GWEN';
            description.innerHTML = '<strong>Full Name:</strong> Gweneth Llaguno Apuli<br><strong>Date of Birth:</strong> June 19, 2003<br><strong>Position:</strong> Lead Vocalist, Lead Rapper<br><strong>Hometown:</strong> Daraga, Albay<br><strong>Zodiac Sign:</strong> Gemini';
            break;
        case 'jhoanna':
            image.src = 'Images/Jhoanna.svg';  // Path to Jhoanna's image
            title.textContent = 'BINI JHOANNA';
            description.innerHTML = '<strong>Full Name:</strong> Jhoanna Christine Burgos Robles<br><strong>Date of Birth:</strong> January 26, 2004<br><strong>Position:</strong> Leader, Lead Vocalist, Lead Rapper<br><strong>Hometown:</strong> Calamba, Laguna<br><strong>Zodiac Sign:</strong> Aquarius';
            break;
        case 'stacey':
            image.src = 'Images/Stacey.svg';  // Path to Stacey's image
            title.textContent = 'BINI STACEY';
            description.innerHTML = '<strong>Full Name:</strong> Stacey Aubrey Casumpang Sevilleja<br><strong>Date of Birth:</strong> July 13, 2003<br><strong>Position:</strong> Main Rapper, Lead Dancer<br><strong>Hometown:</strong> Bagbag, Nueva Vizcaya<br><strong>Zodiac Sign:</strong> Cancer';
            break;
        case 'mikha':
            image.src = 'Images/Mikha.svg';  // Path to Mikha's image
            title.textContent = 'BINI MIKHA';
            description.innerHTML = '<strong>Full Name:</strong> Mikhaela Janna Jimenea Lim<br><strong>Date of Birth:</strong> November 8, 2003<br><strong>Position:</strong> Main Rapper, Lead Dancer, Visual<br><strong>Hometown:</strong> Cebu City<br><strong>Zodiac Sign:</strong> Scorpio';
            break;
            case 'sheena':
                console.log("Sheena's profile selected"); // Debugging statement
                image.src = 'Images/Sheena.svg';  // Path to Sheena's image
                title.textContent = 'BINI SHEENA';
                description.innerHTML = '<strong>Full Name:</strong> Sheena Mae Manuel Catacutan<br><strong>Date of Birth:</strong> May 9, 2004<br><strong>Position:</strong> Main Dancer, Youngest<br><strong>Hometown:</strong> Santiago City, Isabela<br><strong>Zodiac Sign:</strong> Taurus';
                break;
            
    }
}