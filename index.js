// Code your solution here
function findMatching(driver, name) {
    return driver.filter(function(driver){
        return driver.toLowerCase()===name.toLowerCase();
    });
}

function fuzzyMatch(array, string) {
    return array.filter(function(element) {
        return element.slice(0, 1) ===string.slice(0,1)
    });
}
function matchName(array, name){
    return array.filter(function(driver){
        return driver.name === name;
    });
}
