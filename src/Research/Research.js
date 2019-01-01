import React from 'react';
import ResearchAreas from '../API/ResearchAreas.json';
import './Research.css';

const researchBuilder = () => {
    return (
        ResearchAreas.map((item,index)=>{
            return (
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="card">
                            <img className="card-img-top" src={process.env.PUBLIC_URL + '/img/research/' + item.image} alt="Not found!"></img>
                            <div className="card-body">
                                <h5 className="card-title">{item.header}</h5>
                            </div>
                        </div>
                    </div>
            );
        })
    );
}

const refBuilder = (refs) => {
    return refs.map((ref, index) => {
        return (
            <div className = '-research-refs-item'>                                
                <p className = '-research-refs-title'>
                    {'['+(index+1)+'] '+ref.title}
                </p> 
                <p className = '-research-refs-authors'>
                    {ref.authors}
                </p>
                <p className = '-research-refs-address'>
                    <span className = '-research-refs-journal'>{ref.journal}</span>, 
                    <span className = '-research-refs-year'>{ref.year}</span>, 
                    <span className = '-research-refs-volume'>{ref.volume}</span>, 
                    <span className = '-research-refs-page'>{ref.page}</span>
                </p>                                                                 
            </div> 
        )
    });
}

const Research = () =>{
    return (
        <div className='-research-outer-wrapper row'>
            {researchBuilder()}
        </div>
    );
}

export default Research;