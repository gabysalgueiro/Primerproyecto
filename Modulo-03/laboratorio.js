let contactos = [{
    nombre: "Maxwell Wright",
    telefono: "(0191) 719 6495",
    email: "egestas@nonummyac.co.uk"
    }, {
    nombre: "Raja Villarreal",
    telefono: "0866 398 2895",
    email: "posuere@sed.com"
    }, {
    nombre: "Helen Richards",
    telefono: "0800 1111",
    email: "libero@vallis.edu"
    }];
    
    // Pide Datos al Usuario
    let nombre_contacto=prompt("Ingrese el nombre de su nuevo contacto","Gabriela Salgueiro")
    let telefono_contacto=prompt("Ingrese el telefono de su nuevo contacto","75665315")
    let email_contacto=prompt("Ingrese el correo de su nuevo contacto","gsalgueiro@gmail.com")
    // Asigna Datos de Usuario a un objeto con estructura igual CONTACTOS
    let nuevo_contacto={
        nombre:nombre_contacto,
        telefono:telefono_contacto,
        email:email_contacto
    }
    // Agrega nuevo Elemento
    contactos.push(nuevo_contacto)
    let cantidad_contactos = contactos.length - 1;
    // Muestra por Consola primer y ultimo elemento 
    console.log(`${contactos[0].nombre} / ${contactos[0].telefono} / ${contactos[0].email}`);
    console.log(`${contactos[cantidad_contactos].nombre} / ${contactos[cantidad_contactos].telefono} / ${contactos[cantidad_contactos].email}`);