function secondGreaterElement(nums: number[]): number[] {
     let n = nums.length 
    let result =  new Array(n).fill(-1); // 创建并填充数组
    console.log(result)
    //t 存储还没有找到第二个
    let s = [], t = [];
    console.log(s)
    for(let i = 0; i < n; i++){
        //当前的元素curr
        let curr = nums[i]
        //如果栈顶元素小于当前的枚举元素
        while(t.length > 0 && nums[t[t.length-1]] < curr){
            result[t[t.length-1]] = curr
            t.pop() //移除最后一个元素
        }
        let position = s.length-1
        while(position >= 0 && nums[s[position]] < curr){
           position--; //表示此处到末尾？
        }
        // 将s中从position+1到末尾的元素移到t中
        for(let j = position+1; j < s.length; j++){
            t.push(s[j])
        }
        // 从s中移除position+1到末尾的元素
        s.splice(position + 1)
        // 将当前索引入栈s
        s.push(i)
    }
    return result 
};

// 入s栈	当前索引被遍历时	无	开始等待第一个更大元素
// 出s栈	找到第一个更大元素时	nums[s顶] < curr	转移到t栈等待第二个
// 入t栈	从s栈转移过来时	同上	开始等待第二个更大元素
// 出t栈	找到第二个更大元素时	nums[t顶] < curr	任务完成，记录结果