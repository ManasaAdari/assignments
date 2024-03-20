const performtasks=(tasks)=>promise.all(tasks.map(task)=>promise.all(task)))
const t1=new promise(resolve=> setTimeout(()=>resolve('task1),1200));
const t2=new promise(resolve=> setTimeout(()=>esolve('task2),2200));
const t3=new promise(resolve=> setTimeout(()=>resolve('task3),3200));  
performtasks([t1,t2,t3])
  .then(results=>console.log("completed",result))
  .catch(error=>console.error("error exists",error));
