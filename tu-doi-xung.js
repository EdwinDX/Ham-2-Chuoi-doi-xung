function isPalindrome(array) {
    if (array[0]===array[array.length-1]) {
        if (array.length===3 || array.length===2) {
            return 'chuỗi đối xứng';
        }
        else {
            array.pop();
            array.shift();
            isPalindrome(array);
        }
    }
    else {
        return 'chuỗi không đối xứng';
    }
}