/*  generic function for filtering input value by: 
    - good with children, other dogs, stranger
    - playfulness
    - barking
    - trainability
    - grooming
    - shedding
 */
export function by(input) {
    let specification = 0
    switch(input) {
        case 1: {
            return specification = [0,5];
        }
        case 2: {
            return specification = [1,5];
        }
        case 3: {
            return specification = [2,5];
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
