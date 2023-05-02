import React from 'react'

const Ex3theory = () => {
	return (
		<div className='tab-content m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/75 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
			<div className="tab-content">
  <div id="home" className="tab-pane fade in active">
    <br />
    <h4>
      <b>Aim :</b>
    </h4>
    <p>To study the magnetic field produced by current carrying coils.</p>
    <br />
    <h4>
      <b>Theory :</b>
    </h4>
    <p align="center">
      <img src="resources/images/e6/e6.1.jpg" />
    </p>
    <p>
      The magnetic induction of a circular coil of radius R, carrying a current
      I, at a distance z from the center of the loop along the axis (see Fig.
      7.1) is given by
    </p>
    (7.1)
    <p align="center">
      <img src="resources/images/e6/e6.2.jpg" className="img-responsive" />
    </p>
    <p>
      where μ0 is the permeability of free space. At z = 0, B(0) = μoI/(2R) ~=
      B10. If there are two such parallel coils at a distance S such that the
      current flows in the same direction in both the coils (see Fig. 7.2), then
      magnetic field adds in the space between them. Then we have{" "}
    </p>
    <p align="center">
      <img src="resources/images/e6/e6.3.jpg" />
    </p>
    <p>where, st = S/R, zt = z/R and B10 = μoI/(2R).</p>
    <p>
      At the midpoint @~B/@z is zero. Further d2B/dz2 is also equal to zero at z
      = 0 if S = R. Because of these properties, the axial magnetic field is
      fairly constant over certain region in the middle of the pair of coils.
      This arrangement is very popular in producing uniform axial fields in
      regions easily accessible to experimental situations needing such
      uniformity.
    </p>
    <p>
      In this experiment we will study the magnetic field variations for such a
      pair of Helmholtz coils. The magnetic field is measured using a Hall probe
      connected to a gaussmeter.
    </p>
    <h5>
      <b>Construction of Helmholtz coils</b>
    </h5>
    <p>
      The two coils are made of copper wire windings in 14 layers, each of 11
      turns, such that the total number of turns (n) = 154. The sockets of the
      coil winding are cast into the plastic foot of the coil and the connecting
      leads can be used to connect the coils in parallel or series as required.
      The sockets are numbered (1, 2) to make it easier to wire the coils. See
      Fig. 7.3. In the Helmholtz arrangement, the coils are positioned by three
      spacer rails so
    </p>
    <p align="center">
      <img src="resources/images/e6/e6.4.jpg" className="img-responsive" />
    </p>
    <p align="center">Figure 7.3: Experimental setup of Helmholtz coil.</p>
    <p>
      that their axial spacing is equal to the average coil radius. The rails
      can be removed after undoing knurled screws, allowing coils to be used
      individually or with variable spacing.
    </p>
    <p align="center">The coil of the diameter 400 mm</p>
    <p align="center">No of turns per coil 154</p>
    <p align="center">Coil resistance 2.1</p>
  </div>
  
</div>

		</div>
	)
}

export default Ex3theory