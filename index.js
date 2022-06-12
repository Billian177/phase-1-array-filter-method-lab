// Code your solution here
function findMatching (names, string){
    return names.filter((namesM)=> namesM.toUpperCase()===string.toUpperCase());
}

function fuzzyMatch (names, string){
    return names.filter((namesM)=> namesM.toUpperCase().indexOf(string.toUpperCase()) ===0);
}

function matchName(driver, string){
    return driver.filter((nameMa)=> nameMa.name===string);
}