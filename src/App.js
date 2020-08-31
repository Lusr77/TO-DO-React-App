import React from 'react';
import './App.css';
let c=0;
class App extends React.Component{
  
  constructor(props)
  {
    super(props);
    
    this.state={
      item:'',
      items:[]
    }
    this.handleIpChange = this.handleIpChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  handleIpChange(k,v)
  {
    // console.log(k,v);
    this.setState({[k]:v});
  }

  onSubmit()
  {
  
    let im={
      id:c,
      value:this.state.item.slice()
    };
    console.log(im);
    let ims=this.state.items;
    ims.push(im);
    console.log(ims);
    this.setState({
      ims,
      item:''
    });
    // this.setState({item:''});
    c=c+1;
    console.log(this.state.items);
  }
  onDel(id){
    console.log(id);
    let list=[...this.state.items];
    let newlist=list.filter((e)=>e.id !== id);
    this.setState({items:newlist});
  }

  render (){
   return( 
     <div>
     <h1>To-Do List</h1>
   <div className="main">
      
      <input className="ip" name="item" type="text" placeholder="What To Do..." value={this.state.item} onChange={(e)=>this.handleIpChange("item",e.target.value)}></input>
      <button className="sub" type="submit" onClick={this.onSubmit}>Add</button>
     {
       this.state.items.map((item)=>
       {
         return(
           <div className="list-item">
         <p key={item.id}>{item.value}</p>
         <button onClick={()=>this.onDel(item.id)} className="del"><img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/xbox-x-button-1-568454.png" height="25px" width="25px" alt="delete"></img></button>
         
         </div>
         )
       })
     } 
    </div>
    </div>
  )
  
  }
}

export default App;
