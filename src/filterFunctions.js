/*  generic function for filtering input value by: 
    - good with children, other dogs, stranger
    - playfulness
    - barking
    - trainability
    - shedding
 */
    export function by(input) {
        let specification = 0
        switch(input) {
            case 1: {
                return specification = [0,5];
            }
            case 2 || 3: {
                return specification = [1,5];
            }
            case 4: {
                return specification = [3,5]
            }
            case 5: {
                return specification = [4,5]
            }
        }
    }
    

// calculate size from users input
export function bySize(input) {
    let sizeRange = []
    switch(input) {
        case 1: {
            return sizeRange = [0, 200];
        }
        case 2: {
            return sizeRange = [0, 30];
        }
        case 3: {
            return sizeRange = [30, 50];
        }
        case 4: {
            return sizeRange = [50, 110];
        }
        case 5: {
            return sizeRange = [110, 200];
        }
    }
}

// filter by grooming
export function byGrooming(input) {
    let grooming = 0
    switch(input) {
        case 1 || 5: {
            return grooming = [0,5];
        }
        case 2 || 3: {
            return grooming = [2,5];
        }
        case 4: {
            return grooming = [2,3]
        }
    }
}

// filter by shedding
export function byshedding(input) {
    let shedding = 0
    switch(input) {
        case 1: {
            return shedding = [0,1];
        }
        case 2 || 3: {
            return shedding = [0,3];
        }
        case 4 || 5: {
            return shedding = [0,5]
        }
    }
}
    
    



