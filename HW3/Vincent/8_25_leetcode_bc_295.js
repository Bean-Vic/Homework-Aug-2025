class Heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare; // custom comparator
    }
    size() { return this.data.length; }
    peek() { return this.data[0]; }
    push(val) {
        this.data.push(val);
        this._siftUp(this.data.length - 1);
    }
    pop() {
        if (this.size() === 0) return null;
        const top = this.data[0];
        const last = this.data.pop();
        if (this.size() > 0) {
            this.data[0] = last;
            this._siftDown(0);
        }
        return top;
    }
    _siftUp(idx) {
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.compare(this.data[idx], this.data[parent])) {
                [this.data[idx], this.data[parent]] = [this.data[parent], this.data[idx]];
                idx = parent;
            } else break;
        }
    }
    _siftDown(idx) {
        const n = this.size();
        while (true) {
            let left = idx * 2 + 1, right = idx * 2 + 2, candidate = idx;
            if (left < n && this.compare(this.data[left], this.data[candidate])) {
                candidate = left;
            }
            if (right < n && this.compare(this.data[right], this.data[candidate])) {
                candidate = right;
            }
            if (candidate !== idx) {
                [this.data[idx], this.data[candidate]] = [this.data[candidate], this.data[idx]];
                idx = candidate;
            } else break;
        }
    }
}

// MaxHeap: parent >= child
class MaxHeap extends Heap {
    constructor() { super((a, b) => a > b); }
}

// MinHeap: parent <= child
class MinHeap extends Heap {
    constructor() { super((a, b) => a < b); }
}


var MedianFinder = function() {
    this.small = new MaxHeap();
    this.large = new MinHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.small.size() === 0 || num <= this.small.peek()) {
        this.small.push(num);
    } else {
        this.large.push(num);
    }

    if (this.small.size() > this.large.size() + 1) {
        this.large.push(this.small.pop());
    } else if (this.large.size() > this.small.size()) {
        this.small.push(this.large.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.small.size() > this.large.size()) {
        return this.small.peek();
    }
    return (this.small.peek() + this.large.peek()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */