function showSuggestions(input) {
    let suggestionsBox = document.querySelector('.suggestions-box');
    if (!input) {
        suggestionsBox.style.display = 'none';
    } else {
        let suggestions = [
            'Alfonso, Cavite', 'Amadeo, Cavite', 'Bacoor, Cavite', 'Carmona, Cavite', 'Cavite City, Cavite', 
            'Dasmarinas, Cavite', 'General Emilio Aguinaldo, Cavite', 'General Mariano Alvarez, Cavite', 'General Trias, Cavite', 
            'Imus, Cavite', 'Indang, Cavite', 'Kawit, Cavite', 'Magallanes, Cavite', 'Maragondon, Cavite', 'Mendez, Cavite', 
            'Naic, Cavite', 'Noveleta, Cavite', 'Rosario, Cavite', 'Silang, Cavite', 'Tagaytay, Cavite', 'Tanza, Cavite', 
            'Ternate, Cavite', 'Trece Martires, Cavite', 'Alaminos, Laguna', 'Bay, Laguna', 'Binan, Laguna', 'Cabuyao, Laguna', 
            'Calamba, Laguna', 'Calauan, Laguna', 'Cavinti, Laguna', 'Famy, Laguna', 'Kalayaan, Laguna', 'Liliw, Laguna', 
            'Los Banos, Laguna', 'Luisiana, Laguna', 'Lumban, Laguna', 'Mabitac, Laguna', 'Magdalena, Laguna', 'Majayjay, Laguna', 
            'Nagcarlan, Laguna', 'Paete, Laguna', 'Pagsanjan, Laguna', 'Pakil, Laguna', 'Pangil, Laguna', 'Pila, Laguna', 
            'Rizal, Laguna', 'San Pablo City, Laguna', 'San Pedro, Laguna', 'Santa Cruz, Laguna', 'Santa Maria, Laguna', 
            'Santa Rosa, Laguna', 'Siniloan, Laguna', 'Victoria, Laguna', 'Agoncillo, Batangas', 'Alitagtag, Batangas', 
            'Balayan, Batangas', 'Balete, Batangas', 'Batangas City, Batangas', 'Bauan, Batangas', 'Calaca, Batangas', 
            'Calatagan, Batangas', 'Cuenca, Batangas', 'Ibaan, Batangas', 'Laurel, Batangas', 'Lemery, Batangas', 'Lian, Batangas', 
            'Lipa, Batangas', 'Lobo, Batangas', 'Mabini, Batangas', 'Malvar, Batangas', 'Mataas na Kahoy, Batangas', 'Nasugbu, Batangas', 
            'Padre Garcia, Batangas', 'Rosario, Batangas', 'San Jose, Batangas', 'San Juan, Batangas', 'San Luis, Batangas', 
            'San Nicolas, Batangas', 'San Pascual, Batangas', 'Santa Teresita, Batangas', 'Santo Tomas, Batangas', 'Taal, Batangas', 
            'Talisay, Batangas', 'Tanauan, Batangas', 'Taysan, Batangas', 'Tingloy, Batangas', 'Tuy, Batangas', 'Angono, Rizal', 
            'Antipolo, Rizal', 'Baras, Rizal', 'Binangonan, Rizal', 'Cainta, Rizal', 'Cardona, Rizal', 'Jalajala, Rizal', 
            'Morong, Rizal', 'Pililla, Rizal', 'Rodriguez, Rizal', 'San Mateo, Rizal', 'Tanay, Rizal', 'Taytay, Rizal', 'Teresa, Rizal', 
            'Agdangan, Quezon', 'Alabat, Quezon', 'Atimonan, Quezon', 'Buenavista, Quezon', 'Burdeos, Quezon', 'Calauag, Quezon', 
            'Candelaria, Quezon', 'Catanauan, Quezon', 'Dolores, Quezon', 'General Luna, Quezon', 'General Nakar, Quezon', 
            'Guinyangan, Quezon', 'Gumaca, Quezon', 'Infanta, Quezon', 'Jomalig, Quezon', 'Lopez, Quezon', 'Lucban, Quezon', 
            'Lucena, Quezon', 'Macalelon, Quezon', 'Mauban, Quezon', 'Mulanay, Quezon', 'Padre Burgos, Quezon', 'Pagbilao, Quezon', 
            'Panukulan, Quezon', 'Patnanungan, Quezon', 'Perez, Quezon', 'Pitogo, Quezon', 'Plaridel, Quezon', 'Polilio, Quezon', 
            'Quezon, Quezon', 'Real, Quezon', 'Sampaloc, Quezon', 'San Andres, Quezon', 'San Antonio, Quezon', 'San Francisco, Quezon', 
            'San Narciso, Quezon', 'Sariaya, Quezon', 'Tagkawayan, Quezon', 'Tayabas, Quezon', 'Tiaong, Quezon', 'Unisan, Quezon'
        ];
        
        let filtered = suggestions.filter(s => s.toLowerCase().includes(input.toLowerCase()));

        let limitedSuggestions = filtered.slice(0, 5);
        
        if (limitedSuggestions.length) {
            suggestionsBox.innerHTML = limitedSuggestions.map(item => `<div onclick="selectSuggestion('${item}')">${item}</div>`).join('');
            suggestionsBox.style.display = 'block'; // Display the suggestions box
        } else {
            suggestionsBox.innerHTML = '<div>No results found</div>';
            suggestionsBox.style.display = 'block'; // Display the "No results found" message
        }
    }
}

function selectSuggestion(value) {
    document.querySelector('.search-input').value = value;
    document.querySelector('.suggestions-box').style.display = 'none'; // Hide the suggestions box after selecting a suggestion
}
