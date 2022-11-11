import React from 'react';
import logo from './logo.svg';
import './App.css';

export default function SearchSection(props) {
    return (
        <section className='search-section-container'>
            <h3>Keyword</h3>
            <div className='search-section'>
                <input
                    type='text'
                    placeholder='search country here'
                    onChange={props.onchange}
                />
                <button className='search-btn'>Search</button>
            </div>
        </section>
    )
}