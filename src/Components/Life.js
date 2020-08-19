import React  from 'react';
import axios from 'axios';



class Life extends React.Component{
    constructor() {
        super()
        this.state = {advice:""};
      }
    
  

  componentDidMount(){
    this.fetchAdvice();
  }
  
  fetchAdvice =()=>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response) =>{
      const {advice} = response.data.slip;
this.setState({advice})
    })
    
    
     .catch((error) =>{
      console.log(error);

    });    

  }
  
  render(){
    const{advice} = this.state
    return(

    <div className="Life">
         <h1 className="life-heading">Life.</h1>
      <div className="card">
       <h1 className="heading">{this.state.advice}</h1>
       <button className="button" onClick={this.fetchAdvice}>
         <span> GIVE  ME ADVICE</span>
       </button>
</div>
 </div>

    );
  }
}
export default Life;
