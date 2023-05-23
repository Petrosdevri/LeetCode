class KthLargest {
  protected storage: number[];
  protected kth: number;
  constructor(k: number, nums: number[]) {
    this.storage = [...nums].sort((a,b) => b-a);
    this.kth = k;
  }

  add(val: number): number {
    if (this.storage.length === 0){
      this.storage.push(val);        
      return this.storage[this.kth-1]
    }

    for (let i = 0; i < this.storage.length; i += 1){
      if (i === 0 && this.storage[i] <= val){
        this.storage.splice(i, 0, val);
        break;
      }
      if (i === this.storage.length-1 && this.storage[i] > val){
        this.storage.splice(i+1, 0, val);
        break;
      }
      if (this.storage[i] > val && val > this.storage[i+1]){          
        this.storage.splice(i+1, 0, val);
        break;
      }
      if (this.storage[i] === val){
        this.storage.splice(i, 0, val);
        break;
      }
    }
    
    return this.storage[this.kth-1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
/** 
 * @param {number} val
 * @return {number}
 */
/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */