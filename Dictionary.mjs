
class Dictionary{

    constructor(...languages){
        this.languagefiles = languages
        this.dictionary = null;
    }

    setLanguage = function(){
        // Velger språket som skal brukes.

        // Laster språket fra riktig fil (se this.languages)
    }

    get = function(key){
        // Henter riktig verdi basert på key i dictionary.
        return this.dictionary[key];
    }

    keys = function(){
        // retunerer alle keys i dictionary 
        return Object.keys( this.dictionary);
    }

    

}


export default Dictionary;