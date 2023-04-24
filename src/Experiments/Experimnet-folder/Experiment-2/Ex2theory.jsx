const Ex1theory = () => {
	return (
		<div className='text-left p-3 leading-10 mt-2'>
			<h2 className='expHead'>Apparatus Required :</h2>
			<p>
			Stop watch, long bar, meter scale, knife edge.
			</p><br/>
			<h2 className='expHead'>Procedure :</h2>
			<ul>
				<li>1. Balance the bar on sharp wedge and mark the position of its center of gravity (C.G.).</li>
				<li>2. Ensure that the frame on which movable knife edge / pivot is to be rested is horizontal.</li>
			</ul>
			<img src='https://aashish157.github.io/lnmiit-physics-lab/resources/images/e1/bar_pendu.jpg' className='ml-28 w-2/4'/>
			<ul>
				<li>3. Suspend the pendulum in the first hole. The knife edge or pivot should be placed on the glass plate as shown in Fig. 2.2.</li>
				<li>4. The distance d is the distance between point of suspension (bottom of the hole) and the C.G.</li>
				<li>5. Start the oscillation of the pendulum.</li>
				<li>6. Use the stop watch to measure the time for 10 oscillations. The time should be measured after the pendulum has had a few oscillations and the oscillations have become regular.</li>
				<li>7. Repeat the process by suspending the pendulum in the consecutive holes.</li>
				<li>8. Draw a graph by taking distance along X-axis and time period along Y -axis as shown in Fig. 2.3. Shift the axes to draw a full page graph.</li>
			</ul><br/>
			<h2 className='expHead'>Calculation :</h2>
			<ul>
				<li>1. With the help of the graph, distance d 1 and d 2 can be measured from which the value of g can be calculated by using formulas where d 1 and d 2 the distances M 1 A 1 , M 1 B 1 respectively and T is the time CM 1 as shown in Fig. 2.3. As there are two branches one could take the mean of Q 1 M 1 and M 1 A 1 for the distance d 1 and mean of P 1 M 1 and M 1 B 1 for the distance d 2 for substitution in this formula.</li>
				<li>2. Choose another line P 2 B 2 and find g 2 using Eqns. (2.20) and (2.21), where d 1 is the mean of Q 2 M 2 and M 2 A 2 , d 2 is the mean of P 2 M 2 and M 2 B 2 and T = CM 2 .</li>
				<li>3. At the minima, ensure that P 3 M 3 is equal to M 3 B 3 . Then calculate g 3 via the formula</li>
				<li>4. Find the average value of g.</li>
			</ul><br/>
			<h2 className='expHead'>Theoretical Error :</h2>
			<p>
				Acceleration due to gravity (g) is given by the formula<br/>
				Taking log and differentiating<br/>
				Thus, maximum possible error = ................%.
			</p><br/>
			<h2 className='expHead'>Results :</h2>
			<p>
				The standard value of g = ..............m/sec 2 .<br/>
				Percentage error = ...............%.
			</p><br/>
			<h2 className='expHead'>Precaution :</h2>
			<ul>
				<li>1. The Knife edge is made horizontal. If it is not perfectly horizontal the bar may be twisted while swinging.</li>
				<li>2. The motion of a bar should be strictly in a vertical plane.</li>
				<li>3. The amplitude of the swing should be small.</li>
				<li>4. The time period of oscillations should be determined by measuring time by large number of oscillations with an accurate stop watch.</li>
				<li>5. All distances should be measured and plotted from one end of the rod.</li>
			</ul>
		</div>
	);
};
export default Ex1theory;
