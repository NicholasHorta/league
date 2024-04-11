const Util = {
    randomiseArrayHandler: (arr: string[]) => {
        for (let i = 0; i < 2; i++) {
            arr.splice(Math.floor(Math.random() * arr.length), 1);
        };
        return arr;
    },
    returnRandomValueFromArg: (value: number) => {
        return Math.floor(Math.random() * value);
    }
};


export default Util;