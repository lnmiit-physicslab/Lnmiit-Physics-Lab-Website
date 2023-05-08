import React from 'react'

export default function Ex7procedure() {
	return (
		<div className='tab-content p-10 m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/100 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
			<div id="menu1" className="tab-pane fade">
  <br />
  <h4>
    <b>Apparatus Required :</b>
  </h4>
  <p>Gyroscope, tachometer, stopwatch, weights.</p>
  <h4>
    <b>Procedure :</b>
  </h4>
  <p>
    Balance the gyroscope horizontally, using the counterweight C, without any
    weight m.
  </p>
  <p>
    1. Give a spin to the horizontal balanced gyroscope and measure the time
    (Tg) required to complete one revolution using the given light barrier
    counter.
  </p>
  <p>
    2.Immediately after this, hand a mass m into the groove at the longer end of
    the gyroscope. This is at a distance r = 27cm. The gyroscope will precess.
    Using the stop watch, measure the duration of half the rotation Tp/2.
  </p>
  <p>
    3.Without any delay, remove the mass m, so that gyroscope stops processing,
    and measure Tg again, using the light barrier counter.
  </p>
  <p>
    4.The average of Tg measured in steps (1) and (3) above is to be used in Eq.
    (6.7).
  </p>
  <p>
    5.Repeat for several different initial spins of the gyroscope and fixed m
    and plot 1/Tg vs Tp and find the slope. Find I using Eq. (6.7).
  </p>
  <p>6. Find I for another value of m.</p>
  <p />
  <h4>
    <b>Observation :</b>
  </h4>
  <p />
  <p>For mass m = ...... gm.</p>
  <p align="center">
    <img src="/src/resources/images/e6/e6.8.jpg" className="img-responsive" />
  </p>
  (6.8)
  <p align="center">where, ωgr = (ωg1 + ωg2)/2</p>(6.9)
  <p align="center"> ωg = 2π(ωgr/60)</p>(6.10)
  <p align="center">Tg = 2π/ωg </p>(6.10)
  <p>Repeat your observations for another mass.</p>
  <p />
  <h4>
    <b>Calculation :</b>
  </h4>
  <p />
  <p>
    Plot a graph of 1/Tg vs Tp for both masses on the same graph paper using the
    same axes. The graphs should be a straight line passing through origin. Find
    the slope (s) and calculate the moment of inertia of the gyroscope from the
    obtained slope values.
  </p>{" "}
  (6.11)
  <p align="center"> I = mgr/4π2s</p>
  <p />
  <h4>
    <b>Results :</b>
  </h4>
  <p />
  <p>Moment of inertia of the gyroscope</p>
  <p>1.For mass m1 = ......... kg m2.</p>
  <p>2. For mass m2 = ........ kg m2.</p>
</div>

		</div>
	)
}
