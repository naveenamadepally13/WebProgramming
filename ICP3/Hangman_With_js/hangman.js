
var Hangman = (function () {
    
    'use strict';

    function Hangman(elId) {
        
        // Dom is ready
        this.elId       = elId;
        this.words      = ['BRAINSTORM', 'BICYCLE', 'LOLLIPOP', 'VULTURE', 'RAZOR', 'SCREWDRIVER', 'TYPEWRITER'];
    }

    Hangman.prototype.hint = function(){
        //var span = document.getElementsByClassName("close")[0];
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        var modelCont = document.getElementById("modelCont");

        span.onclick = function() {
            modal.style.display = "none";
        }
        modal.style.display = "block";
        if( this.WORD === 'BRAINSTORM'){
            modelCont.innerHTML = '<img src="brain.png" />'
        }else if( this.WORD === 'BICYCLE'){
            modelCont.innerHTML = '<img src="bicycle.png" />'
        }else if( this.WORD === 'LOLLIPOP'){
            modelCont.innerHTML = '<img src="loli.png" />'
        }else if( this.WORD === 'VULTURE'){
            modelCont.innerHTML = '<img src="vulture.png" />'
        }else if( this.WORD === 'RAZOR'){
            modelCont.innerHTML = '<img src="razor.png" />'
        }else if( this.WORD === 'SCREWDRIVER'){
            modelCont.innerHTML = '<img src="screw.png" />'
        }else if( this.WORD === 'TYPEWRITER'){
            modelCont.innerHTML = '<img src="type.png" />'
        }
    };
    Hangman.prototype.reset = function () {
        
        // Reset variables
        this.STOPPED        = false;
        this.MISTAKES       = 0;
        this.GUESSES        = [];
        this.WORD           = this.words[Math.floor(Math.random() * this.words.length)];
        // Reset Elements
        this.hideElementByClass('h');
        this.showElementByIdWithContent(this.elId + "_guessbox", null);
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
    };

    Hangman.prototype.guess = function (guess) {

        // Uppercase the guessed letter
        guess = guess.charAt(0).toUpperCase();

        if (this.STOPPED || this.GUESSES.indexOf(guess) > -1) {
            // Game stopped or allready guessed on that letter
            return;
        }

        // Add the letter to array GUESSES
        this.GUESSES.push(guess);
        // Update the word hint
        this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
        // Update the guessed letter list
        this.showElementByIdWithContent(this.elId + "_guesses", this.GUESSES.join(''));

        if (this.WORD.indexOf(guess) < 0) {
            
            // Incorrect guess
            this.MISTAKES++;
            
            // Show next part of hangman character
            this.showElementByIdWithContent(this.elId + "_" + this.MISTAKES, null);

            if (this.MISTAKES === 6) {
                // Game Over
                this.showElementByIdWithContent(this.elId + "_end", "GAME OVER!<br/>The word was: " + this.WORD);
                this.STOPPED = true;
                return;
            }
            
        } else if (this.WORD.indexOf(this.getGuessedfWord()) !== -1) {
            // Victory
            this.showElementByIdWithContent(this.elId + "_end", "You made it!<br/>The word was: " + this.WORD);
            this.STOPPED = true;
            return;
        }

    };
    
    Hangman.prototype.showElementByIdWithContent = function (elId, content) {
        if (content !== null) {
            document.getElementById(elId).innerHTML = content;
        }
        document.getElementById(elId).style.opacity = 1;
    };
    
    Hangman.prototype.hideElementByClass = function (elClass) {
        var elements = document.getElementsByClassName(elClass), i;
        for (i = 0; i < elements.length; i++) {
            elements[i].style.opacity = 0;
        }
    };

    Hangman.prototype.getGuessedfWord = function () {
        var result = "", i;
        console.log(this.WORD)
        for (i = 0; i < this.WORD.length; i++) {
            // Word characters
            result += (this.GUESSES.indexOf(this.WORD[i]) > -1) ?
                    this.WORD[i] : "_";
        }

        return result;
    };
    
    return new Hangman('hangm');
    
}());
