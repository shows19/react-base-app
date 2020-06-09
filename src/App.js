import React from 'react';
import './App.css';

function App({name}) {
  return (
    <div>
		<div className="bigHeading">Hello <strong>{name}!</strong></div>
		<h1>Headings</h1>
		<h2>This is a sample h2 heading</h2>
		<p>Lets try some sample paragraph multiple lines.</p>
		<h2>My favourite fruits:</h2>
		<ul>
			<li>Apple</li>
			<li>Mango</li>
			<li>Water Melon</li>
			<li>Sweet Melon</li>
			<li>Pomegranate</li>
		</ul>
		<br />
		<h2>Java script expressions</h2>
		<span>50 + 3 = {50+3}</span>
    </div>
  );
}

export default App;
