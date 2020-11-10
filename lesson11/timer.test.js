import timer from './timer';

beforeEach(()=>{
    jest.useFakeTimers();
})


test('timer 测试',()=>{
    const fn = jest.fn();
    timer(fn);
    // jest.runAllTimers() 
    // jest.runOnlyPendingTimers() //只执行当前队列timers
    jest.advanceTimersByTime(3000); //时间快进
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(3000); //时间快进
    expect(fn).toHaveBeenCalledTimes(2);
})