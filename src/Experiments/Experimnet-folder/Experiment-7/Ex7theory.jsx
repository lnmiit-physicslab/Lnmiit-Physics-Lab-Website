import React from 'react'

export default function Ex7theory() {
	return (
		<div className='tab-content m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/75 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
			<div className="tab-content">
  <div id="home" className="tab-pane fade in active">
    <br />
    <h4>
      <b>Aim :</b>
    </h4>
    <p>
      To find the moment of inertia of gyroscope by measuring the precession
      frequency as a function of spin frequency of gyroscope.
    </p>
    <br />
    <h4>
      <b>Theory :</b>
    </h4>
    <p>
      Gyroscopes are used in compasses, in the steering mechanism of torpedoes
      and in inertial guidance systems. The objective is to find the moment of
      inertia of the gyroscope by measuring the precession frequency, as a
      function of the spin frequency of the gyroscope. The gyroscope that is
      free to rotate about all the three axes is balanced in horizontal position
      with the help of a counter weight C as shown in Fig. 7.1. As soon as a
      small weight is added on the left hand side of counter weight C, the
      gyroscope destabilizes and falls down. Remove the extra small weight,
      balance it again as before and spin the disk of the gyroscope with some
      angular velocity. Now hang the small weight again on the left hand side as
      before. The gyroscope now shows a completely new behavior and starts
      rotating in a direction perpendicular to the previous plane. This movement
      is known as precession. That is how a gyroscope increases the stability of
      a system. Try to explain this behavior using laws of mechanics. Can you
      cite some example from our everyday life where you see actual
      demonstration of this gyroscopic phenomenon?
    </p>
    <p>
      If I is the moment of inertia of the gyroscope about its symmetric axis,
      the angular momentum L is given by,
    </p>
    (6.1)
    <p align="center">L = Iωg</p>
    <p>
      where ωg is the angular velocity of the spinning gyroscope. Now, the
      addition of an additional weight m, at a distance r from the pivot point
      P, introduces a supplementary torque T
    </p>
    <p />
    (6.2)
    <p align="center">
      <img src="resources/images/e6/e6.1.jpg" />
    </p>
    <p>
      The gyroscope now starts precising with frequency ωp under the influence
      of T . Since T is perpendicular to L its effect is to change the direction
      of L. In a time dt, L will rotate by
    </p>
    <p align="center">
      <img src="resources/images/e6/e6.2.jpg" className="img-responsive" />
    </p>
    <p align="center">Figure 6.1: Gyroscope experimental setup</p>
    <p>dΦ, given by</p>(6.3)
    <p align="center">
      <img src="resources/images/e6/e6.3.jpg" />
    </p>
    (6.4)
    <p align="center">
      <img src="resources/images/e6/e6.4.jpg" className="img-responsive" />
    </p>
    <p>
      where we have used Eqns. 6.1, 6.2 and 6.3. If Tp is the time for one
      precession revolution and T is the time taken by the gyroscope to spin
      about its axis (one rotation) then
    </p>
    (6.5)
    <p align="center">
      <img src="resources/images/e6/e6.5.jpg" />
    </p>
    (6.6)
    <p align="center">
      <img src="resources/images/e6/e6.6.jpg" />
    </p>
    <p>Therefore from Eqn. 6.4,</p>(6.7)
    <p align="center">
      <img src="resources/images/e6/e6.7.jpg" />
    </p>
    <p>
      Thus a plot of 1/Tg vs Tp should yield a straight line for a fixed m, from
      which the moment of inertia I of the gyroscope, can be obtained.
    </p>
  </div>
</div>

		</div>
	)
}
