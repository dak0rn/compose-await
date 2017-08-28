/**
 * compose-await
 */

module.exports = function(...fns) {
    return async function(val) {
        let result = val;

        for (let i = fns.length - 1; i >= 0; i--) result = await fns[i](result);

        return result;
    };
};
