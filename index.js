module.exports = {
    /**
     * Sum of two numbers
     * 
     * @param {*} n1 First number of the sum
     * @param {*} n2 Second number of the sum
     * @returns 
     */
    sum: function (n1,n2){
        return (this.isnumber(n1,n2) ? n1 + n2: this.errormsg());
    },
    /**
     * Subtraction of two numbers
     * 
     * @param {*} n1 First number of the subtraction
     * @param {*} n2 Second number of the subtraction
     * @returns 
     */
    subtraction: function (n1,n2){
        return (this.isnumber(n1,n2) ? n1 - n2: this.errormsg());
    },
    /**
     * Multiplication of two numbers
     * 
     * @param {*} n1 First number to multiply
     * @param {*} n2 Second number to multiply
     * @returns 
     */
    multiplication: function (n1,n2){
        return (this.isnumber(n1,n2) ? n1 * n2: this.errormsg());
    },
    /**
     * Division of two numbers
     * 
     * @param {*} n1 First number to divide
     * @param {*} n2 Second number to divide
     * @returns 
     */
    division: function (n1,n2){
        return (this.isnumber(n1,n2) ? n1 / n2: this.errormsg());
    },
    /**
     * Error message that excecutes when no numbers are on input
     */
    errormsg: function(){
        console.log('one or more values are not numbers')
    },
    /**
     * Validate that values are numeric type
     * 
     * @param {*} n1 
     * @param {*} n2 
     * @returns 
     */
    isnumber: function(n1,n2){
        if(typeof n1!=='number' || typeof n2!=='number'){
            return false;
        }
        return true;
    }
}