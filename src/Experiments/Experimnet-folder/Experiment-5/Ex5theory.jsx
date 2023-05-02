import React from 'react'

export default function Ex5theory() {
	return (
		<div className='tab-content m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/75 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
			<div className="tab-content">
  <div id="home" className="tab-pane fade in active">
    <br />
    <h4>
      <b>Aim :</b>
    </h4>
    <p>
      1. To understand the accurate leveling and focusing of a spectrometer.
    </p>
    <p>
      2. Investigation of the variation in the refractive index, μ of a prism
      with wavelength λ.
    </p>
    <br />
    <h4>
      <b>Theory :</b>
    </h4>
    <p>
      The fact that a prism is capable of dispersing light is due to the
      variation of its refractive index with wavelength. In this experiment the
      refractive index is obtained for a variety of wavelengths by measuring the
      minimum deviation angle of the prism for each wavelength.
    </p>
    <p>
      To understand what is meant by the term angle of minimum deviation,
      consider Fig. 5.1. The incident parallel light beam is refracted by the
      prism in such a way that it is deviated by the angle θd from the
      undeviated direction. The angle is known as the angle of deviation and
      varies with both the wavelength and the angle at which the incident light
      intersects the prism.
    </p>
    <p>
      If the prism is rotated about the axis it is found that the angle of
      deviation changes but never becomes less than a certain minimum value,
      δmin known as the angle of minimum deviation i.e. no matter what the
      orientation of the prism, as long as it is in the path of the incident
      light beam, the light beam will be deviated through at least this angle.
      When the prism is oriented in such a way that the exit beam is deviated
      through the least possible angle δmin, then further rotation of the prism
      in either direction will cause the exit beam to move further away from the
      least deviated direction. Thus for each wavelength in a spectral light
      source, there is a variation of the angle of deviation, θd with the angle
      of incidence, θi and at some value of the angle of incidence, the angle of
      deviation reaches a minimum as seen in Fig. (5.3).
    </p>
    <h4>
      <b>Relation between μ and λ</b>
    </h4>
    <p align="center">
      <img src="resources/images/e4/4.1.jpg" className="img-responsive" />
    </p>
    <p align="center">
      <img src="resources/images/e4/4.2.jpg" className="img-responsive" />{" "}
    </p>
    <p align="center">
      Figure 5.3: Variation of the angle of deviation (θd) with the angle of
      incidence (θi) for a particular wavelength.
    </p>
    <p>
      by measuring δmin for a variety of wavelengths, the variation of μ with
      wavelength may be determined.
    </p>
    <p>
      To derive the exact relationship, consider the prism as seen in Fig.
      (5.4). It can be shown that the minimum value of the angle of deviation,
      δmin occurs when the ray passes through the prism symmetrically i.e. when
      the angle at which the light emerges is equal to the angle of incidence
      such that the ray passes parallel to the base of the prism as in Fig.
      (5.4). At each face the ray changes direction by θi − θr and so the total
      minimum deviation is
    </p>
    (5.1)
    <p align="center">
      <img src="resources/images/e4/4.3.jpg" />
    </p>
    <p>
      {" "}
      From Fig. 5.4, it is shown that the angle 6 MNO is the same as that of the
      refracting angle of the prism. Referring to the triangle LMN it is
      obvious, using trigonometry, that A = 2θr. Snell’s Law is of course μ =
      sin θi/ sin θr but θi = θmin/2 + θr, where θr = A/2 and hence we have
    </p>
    (5.2)
    <p align="center">
      <img src="resources/images/e4/4.4.jpg" />
    </p>
    <p>An empirical equation of the form</p>(5.3)
    <p align="center">
      <img src="resources/images/e4/4.5.jpg" />
    </p>
    <p align="center">
      <img src="resources/images/e4/4.6.jpg" className="img-responsive" />
    </p>
    <p align="center">Figure 5.4: Condition for minimum deviation</p>
    <p>
      {" "}
      was developed by Cauchy to describe the variation of μ with wavelength.
      Where a, b and c are constants and it is the purpose of this experiment to
      verify this equation (neglecting terms of higher order than the second)
      and to derive the constants a and b for the prism material.
    </p>
    <p>
      {" "}
      <b>Note:</b> As the variation in refractive index over the whole of the
      visible is only of the order of 3% this means that δmin varies only very
      slowly with wavelength. Both a fair degree of experimental skill and great
      care in making the various measurements are necessary if reasonable
      results are to be attained.
    </p>
  </div>
</div>

		</div>
	)
}
