import React from 'react'

export default function Ex6theory() {
	return (
		<div className='tab-content m-10 p-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/100 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
			<div className="tab-content">
  <div id="home" className="tab-pane fade in active">
    <br />
    <h4>
      <b>Aim :</b>
    </h4>
    <p>
      To determine the wavelength of sodium light by measuring the diameters of
      Newton’s rings
    </p>
    <br />
    <h4>
      <b>Theory :</b>
    </h4>
    <p>
      Fig. 6.1 shows the experimental setup of Newton’s ring. The formation of
      maximum intensities at some points and minimum intensities at the other
      due to the superposition of two coherent light waves (of same frequencies
      and constant phase difference) is called interference of light. The
      interference fringes are observed as an alternate pattern of bright and
      dark fringes. The interference at a point where the intensity of light is
      maximum, is called constructive interference (corresponds to bright
      fringe). For constructive interference, the two waves should have either
      same phase or a constant phase difference of
    </p>
    (6.1)
    <p align="center">φ = 2nπ</p>
    <p>
      where n = 0, 1, 2, .... Phase difference (φ) and path difference (δ) are
      related by the equation
    </p>
    (6.2)
    <p align="center">φ = (2π/λ)δ</p>
    <p>
      where λ is the wavelength of the incident light. So, for constructive
      interference the path difference between the light waves should be
    </p>
    (6.3)
    <p align="center">δ = nλ</p>
    <p>
      The interference at other point where the intensity of light is minimum,
      is called destructive interference (corresponds to dark fringe). For
      destructive interference, the two waves should have either same phase or a
      constant phase difference of
    </p>
    (6.4)
    <p align="center">φ = (2n + 1)π</p>
    <p>where n = 0, 1, 2, ... or a constant path difference of</p>(6.5)
    <p align="center">δ = (2n + 1)λ/2</p>
    <p>
      {" "}
      Interference fringes are obtained by dividing the single coherent source
      into two sources. This can be achieved by one of the following methods
    </p>
    <p>
      1. by division of wave front, that is by taking (or considering) two
      secondary wavelets on the same wave front and superposing them
    </p>
    <p>
      2. by division of amplitude, that is by separating the amplitude of single
      wave and reuniting them.
    </p>
    <p>
      In the case of Newton’s ring interference is due to division of amplitude.
    </p>
    <p align="center">
      <img src="/resources/images/e5/5.1.jpg" style={{ width: "30%" }} />
    </p>
    <p align="center">Figure 6.1: Experimental setup of Newton’s ring</p>
    <p>
      When light is incident on a thin film (thickness of the order of wave
      length of the incident light), it suffers partial reflection and partial
      transmission at both upper as well as lower surfaces of the thin film. The
      transmitted light ray again suffers reflection at the lower surface.
      Interference occurs between the rays in the reflected and transmitted
      parts.
    </p>
    <p>
      Similarly, in a wedge-shaped film, partial reflection as well as partial
      transmission also takes place. Moreover, the path difference changes from
      point to point which results into an interference fringe
    </p>
    <p>
      Fig. 6.2 shows an wedge-shaped air film formed between the convex and
      plane glass plate inclined at an angle say θ. The refractive index of the
      film is μ. Ray AB is incident from a broad monochromatic source almost
      normally on the film. It suffers partial reflection (ray BE) and partial
      transmission (ray BC) on the convex surface. Ray BC again suffers partial
      reflection (ray CF) and partial transmission (not shown) on the plane
      surface at C.
    </p>
    <p>
      The bright rings in the Newton’s ring, as shown in Fig. 6.3, are due to
      constructive interference between the reflected light rays BE and CF. The
      dark rings are caused by destructive interference between the same light
      rays BE and CF.
    </p>
    <p>
      For a wedge-shaped thin film, the path difference between the rays BE and
      CF is given by
    </p>
    (6.6)
    <p align="center">δ = 2μt cosα</p>
    <p align="center">
      <img src="/resources/images/e5/5.2.jpg" style={{ width: "50%" }} />
    </p>
    <p>
      Where t is the thickness of the film at B (or at D) and α is the angle of
      refraction at B. Since the angle of incidence is almost normal, we can
      assume cosα ~ 1. Note that here we ignore the reflections from top of the
      plano-convex lens and bottom of the plane circular glass plate since these
      reflections just contribute to the overall glare. The reflections of
      interest are only those involving the surfaces in contact.
    </p>
    <p>
      Now by Stoke’s law, there is no phase change at the glass-air interface of
      the convex lens (because the wave is going from a higher to a lower
      refractive index medium), whereas the reflection at the air-glass
      interface of the plane glass plate undergoes an additional path difference
      of /2. Therefore, the net path difference is
    </p>
    (6.7)
    <p align="center"> δ + λ/2 = 2μt +λ/2</p>
    <p>Since for bright fringe, net path difference is nλ we have,</p>(6.8)
    <p align="center"> 2μt = (2n + 1)λ/2</p>
    <p>
      Similarly, for dark fringe, the net path difference is (2n + 1)λ/2 and
      thus we have,
    </p>
    (6.9)
    <p align="center"> 2μt = 2nλ</p>
    <p>
      At the centre, no reflection occurs since the two glass surfaces are in
      intimate contact i.e. t = 0 or 2μt = 0. This is the condition for dark
      fringe. Hence the center of the pattern is always dark.
    </p>
    <p>In the right-angled triangle OAB of Fig. 6.4,</p>
    <p align="center"> OB^2 = OA^2 + AB^2</p>
    <p align="center">Or, R^2 = (R-t)^2 + rn^2</p>(6.10)
    <p align="center"> rn^2 = 2Rt</p>
    <p>for t^2 &lt;&lt; 2Rt</p>
    <p align="center"> t = rn^2/2R</p>(6.11)
    <p align="center"> t = Dn^2/8R</p>
    <p align="center"> where, rn = radius of nth ring,</p>
    <p align="center"> Dn = diameter of the nth ring,</p>
    <p align="center"> R = radius of curvature of the plano-convex lens</p>
    <p align="center">
      <img src="/resources/images/e5/5.3.jpg" style={{ width: "50%" }} />
    </p>
    <p>
      In practice, it is not possible to find the exact centre of the bull’s eye
      in order to obtain rn. Rather, the traveling microscope can measure an
      approximate diameter Dn for the interference ring. Therefore, substituting
      the value of t from Eq. 6.9, we obtain the diameters of the nth dark
      fringe as
    </p>
    (6.12)
    <p align="center">Dn^2 = 4nRλ/μ</p>
    <p>
      Since the human eye is more sensitive to small changes in low intensity,
      we will measure positions of dark fringes throughout the experiment.
    </p>
  </div>
</div>

		</div>
	)
}
