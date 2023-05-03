import React from 'react'

export default function Ex11procedure() {
  return (
    <div className='tab-content m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/75 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
      <div id="menu1" className="tab-pane fade">
  <br />
  <h4>
    <b>Apparatus Required :</b>
  </h4>
  <p>
    Spectrometer, diffraction grating, mercury light source, high voltage power
    supply, magnifying lens, spirit level, torch light, etc.
  </p>
  <h4>
    <b>Procedure :</b>
  </h4>
  <p>
    As with many optical instruments, the spectroscope requires some initial
    adjustments before the desired measurements can be performed. Focusing and
    levelling of the spectrometer for the parallel rays is to be done as per
    previous prism experiment.
  </p>
  <p align="center">
    <img src="/src/resources/images/e10/10.3.jpg" style={{ width: "40%" }} />
  </p>
  <p align="center"> Figure 11.3: Grating settings</p>
  <p>
    <b>To set the telescope axis perpendicular to that of the collimator:</b>
  </p>
  <p>
    Illuminate the slit with the light source. Turn the telescope of the
    spectrometer to view the image of the illuminated slit directly as shown in
    Fig. 11.3(a). The source should directly be in front of the slit such that
    maximum light falls on the slit. Adjust the cross-wires such that the image
    of the slit falls in the middle of the intersection of the cross-wires. Fix
    the prism table with the fixing screw and read any of the two verniers. Let
    this angle be α. Rotate the telescope by an amount 90 ± α such that it is
    exactly perpendicular to the collimator. Fix the telescope in this position
    and unfix the prism table.
  </p>
  <p>
    {" "}
    Fix the grating (G) in the grating holder such that the grating lines are
    perpendicular to the prism table and the ruled surface extend equally on
    both sides of the center. The grating is set parallel to the line joining
    the prism table screws B and C as shown in Fig. 11.3. Turn the prism table
    such that light from the collimator is reflected into the telescope. The
    reflection should be by the unruled surface of the grating. To determine the
    unruled surface use the following procedure. Allow light to be reflected by
    both the grating surface one at a time and view the corresponding image via
    the telescope. The surface from which the image of the slit appears sharper
    is in fact the unruled surface of the grating
  </p>
  <p>
    Once the unruled surface has been determined, view the reflection only via
    the unruled surface while the setup is as shown in Fig. 11.3(b). If the
    center of the grating displace either above or below the intersection of the
    cross-wires, then the grating surface is not vertical. To ensure that the
    grating surface is vertical, turn the prism table screws B and C equally in
    opposite directions until the center of the image coincides with the
    intersection of the cross-wires
  </p>
  <p>
    Turn the unruled surface of the grating by an angle 45° such that the light
    from the collimator falls normally on the unruled surface of the grating.
    Fix the prism table in this position and unfix the telescope.
  </p>
  <p>
    Even though we have made the plane of the grating vertical and the rulings
    perpendicular to the table surface, the rulings of the grating may not be
    vertical. In order to set the rulings vertical, rotate the telescope in its
    own plane on both side of the central image. On both sides on the central
    image different orders of image are seen as shown in Fig. 11.4. In the first
    order images on both sides, if the image on the left is higher than
  </p>
  <p align="center">
    <img src="/src/resources/images/e10/10.4.jpg" style={{ width: "40%" }} />
  </p>
  <p align="center"> Figure 11.4: Grating images of higher order</p>
  <p>
    that of the image on the right or vice-versa, then turn the third screw A on
    the prism table until the images on both the sides are on the same level.
  </p>
  <h4>
    <b>Caution</b>
  </h4>
  <p>
    1. The diffraction grating is a photographic reproduction and should NOT be
    touched. Make sure that the glassy base of grating shouldn’t faces towards
    the source light.
  </p>
  <p>2. Now your setup is ready to report the experimental observations.</p>
  <p />
  <h4>
    <b>Observations :</b>
  </h4>
  <p />
  <p>
    1. Check to make sure that the grating is not too high or low relative to
    the collimator. Affirm maximum brightness for the straight through beam by
    adjusting the source slit alignment. At this step, the slit should be
    narrow, perhaps a few times wider than the hairline. Search for the spectrum
    by moving the telescope to one side or the other. This spectrum should look
    much like the visible spectrum observed with the prism. This is the first
    order spectrum. Record for each color diffraction angle θR (along right
    side) and θL (along left side) from the straight trough beam.
  </p>
  <p>
    2. For each of the seven colors in the mercury spectrum, measure the angles
    R and L to the nearest tenth of a degree by placing the hairline on the
    stationary side of the slit.{" "}
  </p>
  <p>3. You are expected to observe the 1st order diffraction pattern.</p>
  <p>
    4. From your observations calculate various wavelengths of visible
    radiations from the mercury source
  </p>
  <p />
  <h4>
    <b>Calculation</b>
  </h4>
  <p />
  <p>
    1. Use the grating equation with d = (1/6000) cm to find the wavelength  for
    each colour.
  </p>
  <p>2. Calculate % error for your reported λ measurement.</p>
  <p align="center">
    <img src="/src/resources/images/e10/10.5.jpg" style={{ width: "50%" }} />
  </p>
  <p align="center">
    Table 11.1: For first order (m = 1). CSR - Circular scale reading, VSR -
    Vernier scale reading.
  </p>
  <p />
  <h4>
    <b>Result :</b>
  </h4>
  <p />
  <p>1. Percentage measurement error for your analysis. </p>
  <p>
    2. A certain colour emerges at 15o in the first order spectrum. At what
    angle would this same colour emerge in the second order if the same source
    and grating are used?{" "}
  </p>
  <p>3. What could be causing any discrepancy?</p>
  <p>
    4. Why is it necessary that the base side of the grating face toward the
    light source? Draw a ray diagram for the two cases:
  </p>
  <p>a) Base toward the source (correct).</p>
  <p> b) Grating toward the source (incorrect).</p>
  <p>
    5. Mention your special comments for each statement in your lab report as a
    part of experimental outputs.
  </p>
</div>

    </div>
  )
}
