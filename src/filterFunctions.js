// calculate size from users input
export function bySize(input) {
    let sizeRange = []
    switch(input) {
        case 1: {
            return sizeRange = [0, 15];
        }
        case 2: {
            return sizeRange = [16, 30];
        }
        case 3: {
            return sizeRange = [31, 50];
        }
        case 4: {
            return sizeRange = [51, 109];
        }
        case 5: {
            return sizeRange = [110, 200];
        }
    }
}