import React from 'react'

export default function Ex4theory() {
	return (
		<div className='tab-content p-10 m-10 mt-10 min-h-screen rounded-3xl border-2 bg-gray-50/100 pt-10  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
			<div className="tab-content">
  <div id="home" className="tab-pane fade in active">
    <br />
    <h4>
      <b>Aim :</b>
    </h4>
    <p>1. Measurement of resistivity of a semiconductor at room temperature.</p>
    <p>2. Measurement of variation of resistivity with temperature.</p>
    <p>
      3. Evaluation of band gap of the given semiconductor from the plotting of
      acquired data.
    </p>
    <p>
      4. Understanding of the concept of four probe method.Determining the value
      of specific charge e/m of an electron by Thomson Method
    </p>
    <br />
    <h4>
      <b>Theory :</b>
    </h4>
    <h5>
      <b>Semiconductor</b>
    </h5>
    <p>
      Semiconductor is a very important class of materials because of wide
      applications in this modern world. The following are the properties which
      gives a rough description of a semiconductor.
    </p>
    <p>
      1. The electrical conductivity of a semiconductor is generally
      intermediate in magnitude between that of a conductor and an insulator.
      That means conductivity is roughly in the range of 10(3) to 10(−8) siemens
      per centimeter.
    </p>
    <p>
      2. The electrical conductivity of a semiconductor varies widely with
      doping concentration, temperature and carrier injection.
    </p>
    <p>
      3.Semiconductors have two types of charge carriers, electrons and holes.
    </p>
    <p>
      4. Unlike metals, the number of charge carriers in semiconductors largely
      varies with temperature.
    </p>
    <p>
      5. Generally, in case of semiconductor, increase of temperature enhances
      conductivity while in case of metals increase of temperature reduces
      conductivity.
    </p>
    <p>
      6. The semiconductor can be best understood in the light of energy band
      model of solid.
    </p>
    <p align="center">
      <img src="/resources/images/e3/e3.7.jpg" className="img-responsive" />
    </p>
    <p align="center">
      Figure 4.1: Band gaps shown for (a) Insulator (b) Alkali Metal (c) Other
      Metal (d) Gesemiconductor
    </p>
    <h5>
      <b>Energy band structure of solid</b>
    </h5>
    <p>
      Atom has discrete energy levels. When atoms are arranged in a periodic
      arrangement in a solid the relatively outer shell electrons no longer
      remain in a specific discrete energy level. Rather they form a continuous
      energy level, called energy band. In case of semiconductor and insulator,
      at temperature 0K all the energy levels up to a certain energy band,
      called valence band, are completely filled with electrons, while next
      upper band (called conduction band) remains completely empty. The gap
      between bottom of the conduction band and top of the valence band is
      called fundamental energy band gap (Eg), which is a forbidden gap for
      electronic energy states. In case of metals, valence band is either
      partially occupied by electrons or valence band has an overlap with
      conduction band, as shown in Fig. 4.1(b and c).
    </p>
    <p>
      In case of semiconductor, the band gap (~0 − 4eV ) is such that electrons
      can move from valence band to conduction band by absorbing thermal energy.
      When electron moves from valence band (VB) to conduction band (CB), it
      leaves behind a vacant state in valence band, called hole. When electric
      field is applied, movement of large number of electrons in the valence
      band can be visualized by the movement of hole as a positive charge
      particle. The Eg is a very important characteristic property of
      semiconductor which dictates it’s electrical, optical and optoelectrical
      properties. There are two main types of
    </p>
    <p align="center">
      <img src="/resources/images/e3/e3.8.jpg" className="img-responsive" />
    </p>
    <p align="center"> Figure 4.2: Energy band diagram of a semiconductor </p>
    <p>
      semiconductor materials: intrinsic and extrinsic. Intrinsic semiconductor
      doesn’t contain impurity. Extrinsic semiconductors are doped with
      impurities. These discrete impurity energy levels lie in the forbidden
      gap. In p-type semiconductor, acceptor impurity, which can accept an
      electron, lies close to the valence band and in n-type semiconductor,
      donor
    </p>
    <p align="center">
      <img src="/resources/images/e3/e3.9.jpg" className="img-responsive" />
    </p>
    <p align="center">
      Figure 4.3: Temperature variation of carrier concentration
    </p>
    <p>impurity, which can donate an electron lies close to conduction band.</p>
    <h5>
      <b> Temperature variation of carrier concentration</b>
    </h5>
    <p>
      Fig. 4.3 shows the variation of carrier concentration (concentration of
      holes) in a ptype semiconductor with respect to 1000/T , where T is the
      temperature. Initially as temperature increases from 0K (i.e. ionization
      region), the discrete impurity vacant states starts getting filled up from
      valence band, which creates holes in valence band. Beyond a certain
      temperature all the impurity states will be filled up with electrons,
      which lead to the saturation region.
    </p>
    <p>
      As temperature increases to further higher values, electrons, in the
      valence band, get sufficient energy to occupy empty states of conduction
      band (C.B). This region is called intrinsic region. The temperature above
      which the semiconductor behaves like intrinsic semiconductor is called
      “Intrinsic temperature”.
    </p>
    <h5>
      <b> Conductivity of a semiconductor</b>
    </h5>
    <p>The conductivity of a semiconductor is given by </p>(4.1)
    <p align="center">
      <img src="/resources/images/e3/e3.1.jpg" />
    </p>
    <p>
      Where μn and μp refer to the mobilities of the electrons and holes, and n
      and p refer to the density of electrons and holes, respectively. The
      mobility is drift velocity per electric field applied across the material,
      μ = Vd/E. Mobility of a charge carrier can get affected by different
      scattering processes.
    </p>
    <h5>
      <b> Effects of temperature on conductivity of a semiconductor</b>
    </h5>
    <p>
      In the semiconductor, both mobility and carrier concentration are
      temperature dependent. So conductivity as a function of temperature can be
      expressed by
    </p>
    (4.2)
    <p align="center">
      <img src="/resources/images/e3/e3.2.jpg" />
    </p>
    <p>
      One interesting special case is when temperature is above intrinsic
      temperature where mobility is dominated by only lattice scattering (/
      T−3/2). That means in this temperature region mobility decreases with
      increase of temperature as T−3/2 due to increase of thermal vibration of
      atoms in a solid.
    </p>
    <p>
      In the intrinsic region, n ~ p ~ ni, where ni is the intrinsic carrier
      concentration. The intrinsic carrier concentration is given by
    </p>
    (4.3)
    <p align="center">
      <img src="/resources/images/e3/e3.3.jpg" className="img-responsive" />
    </p>
    <p>
      where, m(n)* and m(p)* are effective mass of electron and hole. Here the
      exponential temperature dependence dominates ni(T). The conductivity can
      easily be shown to vary with temperature as
    </p>
    (4.4)
    <p align="center">
      <img src="/resources/images/e3/e3.4.jpg" />
    </p>
    <p>
      In this case, conductivity depends only on the semiconductor band gap and
      the temperature. In this temperature range, plot of ln σ vs 1000/T is a
      straight line. From the slope of the straight line, the band gap (Eg) can
      be determined. The procedure of measurement of conductivity is given
      below.
    </p>
    <h5>
      <b>Four probe technique</b>
    </h5>
    <p>
      Four probe technique is generally used for the measurement of resistivity
      of semiconductor sample. Before we introduce four probe technique, it is
      important to know two probe techniques by which you measured resistivity
      of a nicrome wire. In two probe technique, two probes (wires) are
      connected to a sample to supply constant current and measure voltage. In
      the case of nicrome wire (1st experiment), connections are made by
      pressing the multimeter probes on nichrome wire. The contact between metal
      to metal probe of multimeter does not create appreciable contact
      resistance. But in the case of semiconductor the metal – semiconductor
      contact gives rise to high contact resistance. If two probe configuration
      is followed for semiconductor sample, voltmeter measures the potential
      drop across the resistance of the sample as well as the contact
      resistance. This is shown in the Fig. 4.4(a).
    </p>
    <p>
      The potential drop across high contact resistance can be avoided by using
      four probe technique. In the four probe configuration, two outer probes
      are used to supply current and two inner probes are used to measure
      potential difference. When a digital voltmeter with very high impedance is
      connected to the inner two probes, almost no current goes through the
      voltmeter. So, the potential drop it measures, is only the potential drop
      across the sample resistance. This is shown in the equivalent circuit
      diagram given in Fig. 4.4(b). From the measurement of current supplied and
      voltage drop across the sample, the resistance can be found out.
      Resistivity of a sample is given by  = cV/I, where c is a constant
    </p>
    <p>
      For the specific arrangement, where the probes are equispaced with the
      distance between two successive probes as a, and the thickness of the
      sample is h, the resistivity can be calculated by the following formulas.
    </p>
    <p>
      <b>CASE-1: </b> h &gt;&gt; a. In this case it is assumed that the four
      probes are far from the edge of the sample and the sample is placed on an
      insulating material to avoid leakage current. The resistivity in this case
      is given by
    </p>
    (4.5)
    <p align="center">
      <img src="/resources/images/e3/e3.5.jpg" />
    </p>
    <p>This is the setup used for our experiment.</p>
    <p>
      <b>CASE-2: </b> h &lt;&lt; a. In this case the resistivity is given by
    </p>
    (4.6)
    <p align="center">
      <img src="/resources/images/e3/e3.6.jpg" className="img-responsive" />
    </p>
    <p>Derivation for this is given at the end.</p>
    <p align="center">
      <img src="/resources/images/e3/e3.10.jpg" className="img-responsive" />
    </p>
    <p align="center">
      Figure 4.4: (a) Equivalent circuit for two probe measurement. R1,R2 are
      the contact resistances (b) Equivalent circuit for four probe measurement.
      R1,R2 and R3,R4 are the contact resistances of current and voltage probes.
    </p>
    <p>
      {" "}
      Once resistivity (ρ) is determined, conductivity (σ) can be calculated by
      taking reciprocal of it (σ = 1/ρ).
    </p>
    <h5>
      <b>Advantages of using four probe method</b>
    </h5>
    <ul>
      <li>
        The key advantage of four-terminal sensing is that the separation of
        current and voltage electrodes eliminates the impedance contribution of
        the wiring and contact resistances.
      </li>
      <li>
        If the probes are separated by equal distance a, and a &lt;&lt; h then
        resistivity can be found out without knowing the exact shape and size of
        the sample.
      </li>
    </ul>
    <p align="center">
      <img src="/resources/images/e3/e3.11.jpg" className="img-responsive" />
    </p>
    <p align="center">
      Figure 4.5: Pictorial representations of field lines generated by the
      applied potential.
    </p>
    <h5>
      <b>Description of the experimental set-up</b>
    </h5>
    <p>
      <b>Probes arrangement</b> It has four individually spring loaded probes.
      The probes are collinear and equally spaced. The probes are mounted in a
      teflon bush, which ensure a good electrical insulation between the probes.
      A teflon spacer near the tips is also provided to keep the probes at equal
      distance. The whole arrangement is mounted on a suitable stand and leads
      are provided for the voltage measurement.
    </p>
    <p>
      <b>Sample</b> Germanium crystal in the form of a chip.
    </p>
    <p>
      <b>Oven</b> It is a small oven for the variation of temperature of the
      crystal from the room temperature to about 200oC (max).
    </p>
    <p align="center">
      <img src="/resources/images/e3/e3.12.jpg" className="img-responsive" />
    </p>
    <p align="center"> Figure 4.6: Four probe experimental setup. </p>
  </div>
</div>

		</div>
	)
}
