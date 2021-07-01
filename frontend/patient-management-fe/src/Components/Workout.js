//import { useEffect, useState } from 'react';
import SuperheroService from '../services/SuperheroService';
import React,{Component} from 'react';

class SuperheroList extends Component{
    constructor(props){
        super(props);
        this.state={
            heroes:[]
        }
    }

componentDidMount(){
    SuperheroService.getAll()
    .then((res) => {
        this.setState({heroes: res.data})
    })

}
render(){
    return(
        <div>
    {heroes.map((hero) =>(
     <div key={hero.id}>
             <ul>
                 <li>{hero.superheroName}</li>
                 <li>{hero.superPower}</li>
            </ul>
       </div>
    ))}
   </div> 
    )}
    

}