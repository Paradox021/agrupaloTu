export function selectRandomFromArray(arr, num){
    arr = shuffleArray(arr)
    let groups = []
    let aux = []
    let len = arr.length
    for (let i = 1; i<=len; i++){
        aux.push(arr.pop())
        if(i%num==0){
            groups.push(aux)
            aux = []
        }
    }
    return [groups, aux]
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}