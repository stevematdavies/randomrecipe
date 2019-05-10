const getTiltClass = () =>  {
    const tiltedClasses = ['tilted-pos','tilted-neg','zero-tilt'];
    const r = Math.floor(Math.random() * tiltedClasses.length);
    console.log(r);
    return tiltedClasses[r];
}

export { getTiltClass }