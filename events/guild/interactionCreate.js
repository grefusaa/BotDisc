const path = require("path");

module.exports = async (client, discord, interaction) => {
    //%BUTTONS
    if (interaction.isButton()) {
      interaction.deferReply({ ephemeral: true });
  
      const member = interaction.member;
  
      if (interaction.customId === "acp") {
        let rol = "978273934665482280";
        // member.roles.add(rol);
        return console.log("Acepto");
      }
      if (interaction.customId === "deg") {
        member.kick();
        return console.log("No Acepto");
      }
    }
    //%BUTTONS
  
    //# COMMANDS
    const emb = {
        author: {
          name: "Necesitas permisos",
          icon_url: "https://cdn-icons-png.flaticon.com/512/1633/1633103.png",
        },
        timestamp: interaction.createdTimestamp,
        color: 65280,
      };



    if (interaction.isCommand()) {
      const command = client.slash.get(interaction.commandName);

    if(!interaction.member.permissions.has(command.permissions || [])){
        return interaction.reply({embeds: [emb],ephemeral: true});
    }

      try {
        command.run(client, interaction);
      } catch (error) {
        console.log("Error iC: " + error);
      }
    }
    //# COMMANDS
  




    //& MENU
    if (interaction.isSelectMenu()) {
      if (interaction.customId == "menu1") {
        
        const at = new discord.MessageAttachment(path.join(__dirname,"../../src","foto.png"));
        const vi = new discord.MessageAttachment(path.join(__dirname,"../../src","hola.txt"));
        const vi2 = new discord.MessageAttachment(path.join(__dirname,"../../src","elvirula-pispa.mp3"));

        switch (interaction.values[0]) {
          case "dog":
            await interaction.reply({content:'Pones lo que quieras', ephemeral: true });
            interaction.followUp({ content: "Elegiste Mongo" , files: [at] });
            break;
          case "cat":
            await interaction.reply({content:'Pones lo que quieras', ephemeral: true });
            interaction.followUp({ content: "Elegiste virulas" ,files: [vi,vi2] });
            break;
          case "ing":
            await interaction.reply({content:'Pones lo que quieras', ephemeral: true });
            interaction.followUp({ content: "Elegiste Iguanas" });
            break;
  
          default:
            await interaction.reply({content:'Pones lo que quieras', ephemeral: true });
            interaction.followUp({ content: "Error" });
            break;
        }
      }
    }
    //& MENU
  };














// module.exports = (client,discord,interaction) => {
//     // console.log(interaction);
//     if (interaction.isButton()) {
//         // interaction.deferReply(); // si la interaccion es un boton, devuelve una respuesta efimera(solo la ve el usuario que ha hecho click)
//         // interaction.followUp({content:"Bienvenido"});

//         const member = interaction.member;

//         const channel = member.guild.channels.cache.find(   //realiza la accion en el canal indicado
//             (channel) => channel.name === "despedidas"  //tambien se puede hacer por id
//         );

//         const bv = new discord.MessageEmbed()
//         .setColor("GOLD")
//         .setTitle("¡Bienvenid@!")
//         .setAuthor({                                        //cambiado para que salga la informacion del nuevo miembro que se acaba de unir al canal
//             name: member.user.username,       //nuevo miembro
//             url: member.user.displayAvatarURL(), //avatar
//         })
//         .setDescription(`Bienvenid@ al servidor ${member.guild.name}`)
//         .setTimestamp()
//         .setFooter(
//             {
//                 text: `${member.guild.name}`, 
//                 iconURL: `${member.user.displayAvatarURL()}`
//             }
//         );



//         if(interaction.customId === "acp"){
//             let rol = "978273934665482280";

//             member.roles.add(rol);      //si aceptas las reglas te otorga el rol coder

//             channel.send({embeds:[bv]});

//             return console.log("aceptó");
//         }
//         if(interaction.customId === "deg"){

//             member.kick();      //si haces click en no acepto te expulsa del server
//             return console.log("No aceptó");
//         }
//     }

//     //COMANDOS

//     if(interaction.isCommand()){


//         const command = client.slash.get(interaction.commandName);
//         try {
//             command.run(client,interaction);
//         } catch (error) {
//             console.log("Error en la interaccion:" + error);
//         }
//     }

//     //END COMANDOS
// };