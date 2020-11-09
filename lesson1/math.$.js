// var result = add(3,7);
// var expected = 10;

// if(result !== 10){
//     throw Error(`3 + 7 应该等于 ${expected}， 但是结果却是 ${result}`);
// }


// var result = minus(3,3);
// var expected = 0;

// if(result !== 0){
//     throw Error(`3 - 3 应该等于 ${expected}， 但是结果却是 ${result}`);
// }

function expect(result){
    return {
        toBe:function(actual){
            if(result !== actual){
                throw Error(`实际值与预期值不相符 预期${actual}`);
            }
        }
    }
}

function test(desc,fn){
    try{
        fn();
        console.log(`${desc} 通过测试`)
    }catch(e){
        console.log(`${desc} 没有通过测试 ${e}` )
    }
}

test('测试加法 3+7',()=>{
    expect(add(3,7)).toBe(10)
})

test('测试加法 3-3',()=>{
    expect(minus(3,3)).toBe(0)
})

// expect(add(3,3)).toBe(6)
// expect(minus(6,3)).toBe(3)