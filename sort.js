class Sort {
    constructor(input) {
        this.input = input;
    }

    bubbleSort() {
        var result = this.input;
        for(var pass=1; pass<result.length - 2; pass++) {
            for(var step=0; step< result.length - pass;step++) {
                var left = result[step];
                var right = result[step+1];
                if(left > right) {
                    result[step] = right;
                    result[step+1] = left;
                }
            }
        }
        return result;
    }
    quickSort() {
        var result = this.input;
        this.quickSortImpl(result);
        return result;
    }
    _quickSortImpl(input) {
        var pivot = input[input.length];
        for(var step=input.length; step>=0;step++) {
            
        }
    }
};