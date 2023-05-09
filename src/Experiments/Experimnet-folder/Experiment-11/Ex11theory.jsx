import React from 'react'

export default function Ex11theory() {
  return (
    <div className='tab-content p-10 m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/100 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
      <div id="home" className="tab-pane fade in active">
  <br />
  <h4>
    <b>Aim :</b>
  </h4>
  <p>
    1. To understand the diffraction, diffraction grating and how diffraction
    grating works with the help of basic diffraction grating equations and
    experimental studies.
  </p>
  <p>
    2. To measure the wavelength of the light source with the help of
    diffraction grating.
  </p>
  <br />
  <h4>
    <b>Theory :</b>
  </h4>
  <h5>
    <b>Preliminary discussion:</b>
  </h5>
  <p>
    Interference refers to the interaction of two or more wave trains of light
    having the same frequency and having a phase difference which remains
    constant with time (coherent sources), so that they may combine with the
    result that the energy is not distributed uniformly in space but is a
    maximum at certain points and a minimum (perhaps zero) at others.
  </p>
  (8.1)
  <p>
    Diffraction phenomenon is described as the apparent bending of waves around
    small obstacles and the spreading out of waves past small openings.
    Diffraction patterns are marked by a rapid decrease in intensity with
    increasing distance from the center of the pattern.
  </p>
  <p>
    A diffraction grating is made by making many parallel scratches on the
    surface of a flat piece of transparent material. It is possible to put a
    large number of scratches per centimeter on the material, e.g., the grating
    to be used has 6000 lines/cm on it. The scratches are opaque but the areas
    between the scratches can transmit light. Thus, a diffraction grating
    becomes a multitude of parallel slit sources when light falls upon it.
  </p>
  <h5>
    <b>Diffraction grating equation</b>
  </h5>
  <p>
    When parallel bundle of rays falls on the grating, these rays and their
    associated wave fronts form an orthogonal set so the wave fronts are
    perpendicular to the rays and parallel to the grating (as shown in Fig.
    11.1). According to Huygens’ Principle, every point on a wave front acts
    like a new source, each transparent slit becomes a new source so cylindrical
    wave fronts spread out from each. These wave fronts interfere either
    constructively or destructively depending on how the peaks and valleys of
    the waves are related.
  </p>
  <p>
    Whenever the difference in path length between the light passing through
    different slits is an integral number of wavelengths of the incident light,
    the light from each of these slits will be in phase, and then it will form
    an image at the specified location. Mathematically, the relation is simple
  </p>
  (11.1)
  <p align="center">
    <img src="/src/resources/images/e10/10.1.jpg" style={{ width: "50%" }} />
  </p>
  <p>
    Eq. (11.1) is known as grating equation. The light that corresponds to
    direct transmission
  </p>
  <p align="center">
    <img src="/src/resources/images/e10/10.2.jpg" style={{ width: "20%" }} />
  </p>
  <p>
    (or specular reflection in the case of a reflection grating) is called the
    zero order, and is denoted m = 0. The other maxima occur at angles which are
    represented by non-zero integers m. Note that m can be positive or negative,
    resulting in diffracted orders on both side of the zero order beam.
  </p>
  <p>
    Diffraction gratings are often used in monochromators, spectrometers,
    lasers, wavelength division multiplexing devices, optical pulse compressing
    devices, and many other optical instruments.
  </p>
  <h5>
    <b>Resolving power of grating</b>
  </h5>
  <p>
    This equation then leads to the following expression for the resolving power
    of the diffraction grating
  </p>
  (11.2)
  <p align="center"> R = λ/δλ = mN</p>
  <p>
    Here λ is the average of wavelength, δλ is the difference between
    wavelengths, m is the order and N is the total number of slits on the
    grating. Thus, the distance between maxima depends on the distance between
    slits and the resolution,the relative sharpness of the maxima, depends on
    the total number of slits. (Often a grating is characterized by the number
    of slits per unit length. From this information one can, of course, deduce
    the distance between the slits..
  </p>
</div>

    </div>
  )
}
