
const location = 'India';

export const getCurrency = () => {

    let symbol;
    switch (location) {
        case 'India':
            symbol = '₹'
            break;
        case 'USA':
            symbol = '$'
            break;
        default:
            symbol = '₹'
            break;
    }

    return symbol;
}