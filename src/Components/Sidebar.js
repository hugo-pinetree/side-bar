import React from 'react';
import portrait from '../alfonso-scarpa-e12EkMYv44U-unsplash.jpg';
//import line from './Rectangle 2.png';
import '../index.css';

function Line(props){
    if(!props.disp){
        return <div className='invisible-line'> </div>;
    }
    return(
        <div className='line'> </div>
    );
}

class SideLink extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hovered: false
        }
    }
    handleOnMouseOver(){
        this.setState({
            hovered: true
        })
       
    }
    handleOnMouseOut(){

        
        this.setState({
            hovered: false
        })
     
    }
    
     
    
    render(){
        
        return(
            <div className='container'>
                    
                    <div className='go'>
                        <button className='rec'
                            onMouseOver={()=> this.handleOnMouseOver()}
                            onMouseOut={()=>this.handleOnMouseOut()}  
                        >
                            {this.props.label}
                        </button>
                        <Line disp={this.state.hovered}></Line>
                        </div>
                    
                    
                
                
            </div>
           
            
            
        )
    }
}
export default class Sidebar extends React.Component{
    scrollWin() {
        window.scrollBy(20, 0);
        
    }
    render(){
       
        return(
            <div className='sidenav'>
                <img width='100%' height='100%'src={portrait} alt=''/>
                <div className='side-nav-buttons'>
                    <SideLink label='Welcome'></SideLink>
                   
                    <SideLink label='Log In'></SideLink>
                  
                    <SideLink label='See Moods'></SideLink>
                 
                </div>
                <p className='caption1'>Photo taken by Alfonso Scarpa</p>
            </div>
        )
    }
}

