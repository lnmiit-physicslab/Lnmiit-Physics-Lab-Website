import React from 'react'

export default function Ex8procedure() {
	return (
		<div className='tab-content m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/75 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
			<div id="menu1" className="tab-pane fade">
  <br />
  <h4>
    <b>Apparatus Required :</b>
  </h4>
  <p>Faraday setup, diode, capacitor, breadboard, connecting wire, CRO etc.</p>
  <h4>
    <b>Procedure :</b>
  </h4>
  <p>
    1. <b>Charging of capacitor to obtain</b> εmax The induced emf can be
    measured by using a simple circuit as shown in Fig. 8.2. The induced emf in
    the coil charges a capacitor C, through a resistance R and a diode D and the
    voltage developed across C is measured by voltmeter V . The diode current
    can flow only if the voltage at A is greater than B. Thus once a capacitor
    attains a voltage ", current can flow through the capacitor only if the
    induced emf is greater than ". If the time constant RC is not small compared
    to the time taken for the magnet to cross the coil, the capacitor does not
    get fully charged in AC signal oscillation. It may take several oscillations
    to do so.
  </p>
  <p>
    Connect a resistor, diode and a capacitor given to you in series with the
    coil. Observe the signal across resistor, diode and the capacitor as a
    function of time
  </p>
  <p>
    Calculate vmax using Eq. (8.5) and plot a graph between "max vs vmax. "max
    is the maximum potential obtained in the CRO.
  </p>
  <p>
    {" "}
    2. <b>Induced emf as a function of velocity</b>You can use the computer
    interface provided to measure the voltage as a function of time. The
    instructor will explain you how to use the software.
  </p>
  <p align="center">
    <img src="resources/images/e7/7.5.jpg" style={{ width: "30%" }} />
  </p>
  <p align="center">Figure 8.2: Circuit diagram for charging of a capacitor</p>
  <ul>
    <li>
      Ensure that the support for the apparatus is vertical by adjusting
      levelling screws. Adjust the weights W1 and W2 mounted on the horizontal
      bar to make zero of the scale as the mean position. Centre of the magnet
      must be inside the coil.
    </li>
    <li>
      Ensure that the support for the apparatus is vertical by adjusting
      levelling screws. Adjust the weights W1 and W2 mounted on the horizontal
      bar to make zero of the scale as the mean position. Centre of the magnet
      must be inside the coil.
    </li>
    <li>
      Plot of t vs φ(t): Record one or two oscillations. Focus on only one of
      them by using magnification button. Use the integration feature of the
      software to obtain flux φ as a function of time. You can integrate only
      half of the pulse, since the pulse is highly symmetric. Plot this on a
      graph paper for the complete pulse.
    </li>
    <li>
      vmax dependence of slope of "(t) at mean position and φ: The emf induced
      in the coil can be written as
    </li>
    (8.6)
    <p align="center">
      <img src="resources/images/e7/7.14.jpg" style={{ width: "30%" }} />
    </p>
    <p>
      Note that when the magnet is at its mean position, then ω = ωmax or
      velocity is at its maximum since Vmax = ωmax R. However, dφ/dθ = 0 at that
      point. Hence emf will go through a zero corresponding to the mean
      position. Also note that
    </p>
    (8.7)
    <p align="center">
      <img src="resources/images/e7/7.4.jpg" style={{ width: "30%" }} />
    </p>
    <p>
      Hence a plot of the slope of ε(t) at the zero, corresponding to the mean
      position against v^2 max would be linear. The proportionality constant
      depends only on the geometry of the coil and the magnet. For calculating φ
      use “Show integral" mode as before.
    </p>
  </ul>
  <p>
    <b>3. Electromagnetic damping in an oscillating system</b>
    We observe that the successive oscillations are not of the same amplitude.
    This is due to damping. Possible sources are: (i) air resistance, (ii)
    friction at the point of suspension, and (iii) induced emf (Lenz’s law).
  </p>
  <p>
    The system (for small ) and for damping proportional to velocity would
    satisfy the equation.
  </p>
  (8.8)
  <p align="center">
    <img src="resources/images/e7/7.3.jpg" style={{ width: "30%" }} />
  </p>
  <p>
    where I is moment of inertia about origin, k is damping coefficient and λ0
    is restoring couple (Mgl0), if treated as a simple pendulum of length 1.
  </p>
  <p>
    The amplitude would exponentially decay only if k is a constant and damping
    term depends linearly in velocity. Record a large number of oscillations
    starting from initial amplitude of 300 to study the damping behaviour in the
    absence of induced current in the coil. The plot seen on the screen may not
    be correct representation of data since the number of points to be plotted
    is too large. Therefore divide the time axis to approximately 8 to 10 zones
    and take data after magnifying 1 pulse from each zone. Plot ωmax and
    (dω/dt)(vmax) as a function of time or number of oscillations. From your
    data calculate Q of this oscillator using A = Aoert/2 and Q = ωo/r.
  </p>
  <p>
    Now, connect a resistor of about 220 (the coil resistance is around 900) in
    series with the coil and record voltage dropped across the resistor as a
    function of time (for large number of oscillations as in the previous case).
    Repeat analysis of data as above.
  </p>
  <p>
    4. <b>Useful features of the software measure:</b>
  </p>
  <p>
    It is easy to use the software given to you. Take a few minutes to summarize
    yourself with it before going to the detailed experiments. All you have to
    do is to click the required icon given at the top. Some of the important
    ones are as follows:
  </p>
  <p>
    ARROW: In this mode simply point the cursor at the required point to obtain
    values of the coordinates.
  </p>
  <p>
    MARK: Use this mark a portion of the curve. The x-coordinate of the mark
    portion are shown on the bottom. The marked portion is highlighted in a
    different colour.
  </p>
  <p>
    SURVEY: You can adjust the left bottom and right top coordinates of the
    cursor box to obtain coordinates and their differences in this mode. You can
    use this to calculate slopes around a point.
  </p>
  <p>
    SHOW INTEGRAL: Mark the portion of the curve for which you need to calculate
    the integral and then click this icon to obtain the value. If you need to
    start from the origin, each time, take the cursor out of the plotting area
    and drag it across the origin to ensure that starting point is the same.
  </p>
  <p>
    SLOPE: Mark the required portion of the curve for which you need the slope
    and then click this icon to get slope. However, we recommend use of survey
    mode to get slope more accurate.
  </p>
  <p />
  <h4>
    <b>Observations :</b>
  </h4>
  <p />
  <p align="center">
    <img src="resources/images/e7/7.2.jpg" style={{ width: "55%" }} />
  </p>
  <p align="center">
    <img src="resources/images/e7/e7.1.jpg" style={{ width: "55%" }} />
  </p>
  <p />
  <h4>
    <b>Result :</b>
  </h4>
  <p />
  <p>1. </p>
  <p>2. </p>
</div>
		</div>
	)
}
