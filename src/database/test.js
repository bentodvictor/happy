const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async  db => {
    
    await saveOrphanage(db, {
        lat: "-26.4874358",
        lng: "-49.0979892",
        name: "Lar de amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "32133566",
        images: [
            "https://images.unsplash.com/photo-1561559652-a9ce9bc0df22?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1576024267168-6be5e4eabcf4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Dass 18h até 8h",
        open_on_weekends: "0"
    });

    // consultar dados na tabela
    // const selectedOrphanages = await db.all(`
    //         SELECT * FROM orphanages
    // `)
    
    // console.log(selectedOrphanages)




    // consultar somente um orfanato pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    // console.log(orphanage)


    // // deletar dado databela
    // console.log(await db.run(`
    //     DELETE FROM orphanages WHERE id = "4"
    // `))
    // console.log(await db.run(`
    //     DELETE FROM orphanages WHERE id = "5"
    // `))
})