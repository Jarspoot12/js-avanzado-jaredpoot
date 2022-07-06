const os = require('os');
console.log('version del sistema: ',os.version());  //muestra la versión del kernel
console.log('arquitectura: ',os.arch()); //obtiene la arquitectura
console.log('cpus: ',os.cpus());//información de los cpus
console.log('memoria libre en bytes: ',os.freemem()); //memoria libre
console.log(os.homedir());
console.log('mi dirección ip o hostname: ',os.hostname());
console.log('versión del sistema: ',os.platform());
console.log('versión detallada del sistema: ',os.version());