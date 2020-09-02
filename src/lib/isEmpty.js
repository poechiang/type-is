import getType from './type.js';
export default ( value ) => {
    let type = getType( value )

    if ( type === 'array' || type === 'string' || type === 'arguments' ) {
        return value.length <= 0;
    } else if ( type === 'object' ) {
        return Object.entries( value ).length <= 0;
    }
    return !value;
};