function isPalindrome(array) {
    if (array[0]===array[array.length-1]) {
        if ((array.length===3) || (array.length===2)) {
            return true;
        }
        else {
            array.pop();
            array.shift();
            return  isPalindrome(array);
        }
    }
    else {
        return false;
    }
}