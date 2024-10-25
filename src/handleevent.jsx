export default function(){
    function handleclick1(){
        alert('click1');
    }
    const handleclcik2 = ()=> {alert('click2')};
    const addnum = (num)=>{alert(num+3)};
    return(
      <div>
        <h3>React core concept part2</h3>
        <button onClick={handleclick1}>click1</button>
        <button onClick={handleclcik2}>click2</button>
        <button onClick={()=>{alert('click3')}}>click3</button>
        <button onClick={()=>addnum(3)}>click4</button>
      </div>
    )
}