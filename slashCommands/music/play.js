const ytdl = require("ytdl-core");
const yrS = require("yt-search");    //devuelve dos arrays uno llamado all y otro videos

const {
    AudioPlayer,
    StreamType,
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
} = require ("@discordjs/voice");

async function vdSearch(cancion){
    const vdE = yrS(cancion);   //devuelve video, si la longitud es mayor a 0 es decir si ha encontrado algo, entonces procede

    // return vdE.videos.length > 0 ? vdE.videos[0] : null; //si encuentra algo trae lo primero que haya encontrado y sino devuelve un null como una casa
}

module.exports = {
    name: "play",
    description: "Reproduce una cancion",
    options: [
      {
        name: "cancion",
        description:"Cancion/autor",
        type: "STRING",
        required: "true",
      },
    ],
    run: async (client, interaction) => {
      const vc = interaction.member.voice.channel;
      if(!vc){
          return interaction.reply({
              content: "tienes que estar en un canal de voz",
          });
      }

      const vdRepro = await vdSearch(interaction.options.getString("cancion"));

      if(!vdRepro){
        interaction.reply({
            content: "No se ha encontrado nada...",
          });
      }
      console.log(vdRepro);
    //   interaction.reply({
    //     content: `Reproduciendo: ${vdRepro.title}`,
    //   });

    },
  };