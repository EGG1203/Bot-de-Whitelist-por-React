const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 
const { Client, MessageEmbed } = require('discord.js');
const firebase = require('firebase');
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
/////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("ready", () => {
  console.log('bot online criado por É GG#1203')
  let status = [
    {name:`Desenvolvido por É GG#1203`, type: 'PLAYING'},
    {name:`Desenvolvido por É GG#1203`, type: 'PLAYING'},
    {name:`Desenvolvido por É GG#1203`, type: 'PLAYING'}

    
]
function setStatus(){ //Função para o BOT mudar de Status aleatoriamente
    let randomStatus = status[Math.floor(Math.random()*status.length)]
    client.user.setActivity({game: randomStatus})
}
setStatus();
setInterval(() => setStatus(),5000)
})






//--#####################################
//--## CRIADO PELO DEUS EPIFANO E ATUALIZADO POR É GG ##
//--#################################

//--鑓塵幗膂蓿f寥寢膃暠瘉甅甃槊槎f碣綮瘋聟碯颱亦尓㍍i:i:i;;:;:: : :
//--澣幗嶌塹傴嫩榛畝皋i袍耘蚌紕欒儼巓襴踟篁f罵f亦尓㍍i:i:i;;:;:: : :
//--漲蔭甃縟諛f麭窶膩I嶮薤篝爰曷樔黎㌢´　　｀ⅷ踟亦尓㍍i:i:i;;:;:: : :
//--蔕漓滿f蕓蟇踴f歙艇艀裲f睚鳫巓襴骸　　　　　贒憊亦尓㍍i:i:i;;:;:: : :
//--榊甃齊爰f懈橈燗殪幢緻I翰儂樔黎夢'”　 　 ,ｨ傾篩縒亦尓㍍i:i:i;;:;:: : :
//--箋聚蜚壊劑薯i暹盥皋袍i耘蚌紕偸′　　　 雫寬I爰曷f亦尓㍍i:i:i;;:;:: : :
//--銕颱麼寰篝螂徑悗f篝嚠篩i縒縡齢　　 　 　 Ⅷ辨f篝I鋗f亦尓㍍i:i:i;;:; : : .
//--碯聟f綴麼辨螢f璟輯駲f迯瓲i軌帶′　　　　　`守I厖孩f奎亦尓㍍i:i:i;;:;:: : : .
//--綮誣撒f曷磔瑩德f幢儂儼巓襴緲′　 　 　 　 　 `守枢i磬廛i亦尓㍍i:i:i;;:;:: : : .
//--慫寫廠徑悗緞f篝嚠篩I縒縡夢'´　　　 　 　 　 　 　 `守峽f徑悗f亦尓㍍i:i:i;;:;:: : : .
//--廛僵I數畝篥I熾龍蚌紕襴緲′　　　　　　　　　　　　　‘守畝皋弊i劍亦尓㍍i:i:i;;:;:: : : .
//--瘧i槲瑩f枢篝磬曷f瓲軌揄′　　　　　　　　　　　　　,gf毯綴徑悗嚠迩忙亦尓㍍i:i:i;;:;::
//--襴罩硼f艇艀裲睚鳫襴緲'　　　　　　　　　　 　 　 奪寔f厦傀揵猯i爾迩忙亦i:i:㍍i:i:i;;:;:: : : .
//--椈棘斐犀耋絎絲絨緲′　　　　　　 　 　 　 　 　 　 　 ”'罨悳萪f蒂渹幇f廏迩忙i亦㍍i:i:i;;:;:: : : .
//--潁樗I瘧德幢i儂巓緲′　　　　　　 　 　 　 　 　 　 r㎡℡〟”'罨椁裂滅楔滄愼愰迩忙㍍i:i:i;;:;:: : : .
//--翦i磅艘溲I搦儼巓登㎜ 艇翦i磅ｧq　 　 緲I　 　 甯體i爺ゎ｡, ”'罨琥焜毳徭i嵬塰慍絲亦尓㍍i:i:i;;:;:: : : .
//--枢篝磬f曷迯i瓲軌f襴暹 甯幗緲 ,fi'　　 緲',纜｡　　贒i綟碕碚爺ゎ｡ ”'罨皴發傲亂I黹靱亦尓㍍i:i:i;;:;:: : : .
//--緞愾慊嵬嵯欒儼巓襴驫 霤I緲 ,緲　　 ＂,纜穐　　甯絛跨飩i髢馳爺ゎ｡`'等誄I筴碌I畷亦尓㍍i:i:i;;:;:: : : .
//--罩硼I蒻筵硺艇艀i裲睚亀 篳'’,緲　　ı亀 Ⅶil齢　　贒罩硼i艇艀裲睚鳫爺靠飭蛸I裘裔亦尓㍍i:i:i;;:;:: : : .
//--椈f棘豢跫跪I衙絎絲絨i爺i㎜iⅣ 　 ,緲i亀 Ⅶ靈,　　甯傅喩I揵揚惹屡絎痙棏敞裔筴敢亦尓㍍i:i:i;;:;:: : :
//--頬i鞏褂f跫詹雋髢i曷迯瓲軌霤 　 ,緲蔭穐 Ⅶ穐 　 讎椈i棘貅f斐犀耋f絎絲觚f覃黹黍亦尓㍍i:i:i;;:;:: : : .
//--襴蔽戮貲艀舅I肅肄肆槿f蝓Ⅷ 　 緲$慚I穐,疊穐　 甯萪碾f鋗輜靠f誹臧鋩f褂跫詹i雋亦尓㍍i:i:i;;:;:: : : .
//--鋐篆f瘧蜑筴裔罩罧I緜孵蓼Ⅷ　 i鷆嫩槞i歉皸鱚　 冑縡諛諺彙溘嵳勠尠錣綴麼辨螢亦尓㍍i:i:i;;:;:: :





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// ESTRUTURA DAS MENSAGEM COM ADIÇAO DAS REACT EM CADA ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var perg1 = ('Roleplay Significa?  \n\n 1⃣ Mata-Mata  \n\n 2⃣ Role com os Amigos \n\n 3⃣  Simular a vida real \n\n 4⃣ Simular a Fantasia')
var perg2 = ('O que é RDM? \n\n 1⃣ RDM é usada para quem abusou de bug. \n\n 2⃣ RDM é atropelar alguém sem motivos. \n\n 3⃣ RDM é matar alguém sem motivos. \n\n 4⃣ RDM é sacar uma arma e ameaçar alguém. ')
var perg3 = ('O que é considerado anti RP? \n\n 1⃣ Vender drogas em área safe \n\n 2⃣ É você quebrar as regras do servidor. \n\n 3⃣ E você cometer infrações de trânsito. \n\n 4⃣ É você fazer rp de bandido. ')
var perg4 = ('O que é AMOR A VIDA? \n\n 1⃣ Reagir a um assalto. \n\n 2⃣ É valorizar a sua vida como ela fosse única. \n\n 3⃣ É ter amor próprio. \n\n 4⃣ E pular de uma ponte para evitar não ser pego. ')
var perg5 = ('O que é PowerGaming? \n\n 1⃣ É você ter super forças no jogo. \n\n 2⃣ E você usar informação fora do jogo. \n\n 3⃣ É abusar da mecânica do jogo \n\n 4⃣ E você fazer um rp forçando com os players.')
var perg6 = ('O que é MetaGaming? \n\n 1⃣ É utilizar-se de informações de fora do jogo dentro do mesmo. \n\n 2⃣ É você fazer RP baseado em metas de missões. \n\n 3⃣ É você pedir alguém em Casamento \n\n 4⃣ É você jogar usando Discord ')
var perg7 = ('O que é COMBAT LOGGING? \n\n 1⃣ É entrar em combate na ação. \n\n 2⃣ É chamar alguém para lutar. \n\n 3⃣ É deslogar do servidor para fugir de abordagem, prisão, roubo. \n\n 4⃣ É tentar fugir ao ser abordado. ')
var perg8 = ('Quais são as safe zones? \n\n 1⃣ Praça, Delegacia, Hospital, Concessionária \n\n 2⃣ Delegacia, Hospital, Concessionária, Areas de Farm Legal \n\n 3⃣ Aeroporto, Garagem, Areas de Farm Legal \n\n 4⃣ Praça, Areas de Farm Legal, Hospital, Delegacia. ')
var perg9 = ('O que é VDM? \n\n 1⃣ É usar um Veiculo para matar alguém \n\n 2⃣ É matar alguém sem motivo. \n\n 3⃣ É ato de abusar da mecânica do jogo \n\n 4⃣ VDM é subir uma montanha com carro de drift. ')
var perg10 = ('Se você morrer o que você deverá fazer? \n\n 1⃣ Reiniciar o FiveM e reentrar no servidor \n\n 2⃣ Aguardar a contagem terminar para voltar ao RP \n\n 3⃣ Pedir para um Staff me reviver \n\n 4⃣ Nenhuma das anterioresde drift. ')
var perg11 = ('Ao ser algemado(a) sua comunicação é cortada automaticamente, logo: \n\n 1⃣ Mando tirarem a algema porque o RP está errado \n\n 2⃣ Devo seguir o RP que está sendo feito no momento \n\n 3⃣ Chamo alguém pelo Discord para me ajudar \n\n 4⃣ Peço pra um staff vim resolver a situação ')
var perg12 = ('Nas áreas de risco elevado o crime é conhecidamente praticado e a policia não patrulha, sendo assim: \n\n 1⃣ Ao entrar numa dessas áreas posso praticar atropelamentos \n\n 2⃣ Posso matar só por matar \n\n 3⃣ Posso roubar e/ou matar, porém com motivos e abordagem correto \n\n 4⃣ Posso ser roubado e morto e depois me vingar ')
var perg13 = ('Ao entrar no servidor você concorda com todas as regras nele impostas? \n\n 1⃣ Discordo \n\n 2⃣ Que regras? \n\n 3⃣ Nulo \n\n 4⃣ Concordo   ')
var inst = (' Leia com atenção todas as questões e reaja com o emoji correspondente a alternativa correta! ')///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////s///////////////////////////////////////
client.on('raw', async dados => {
  if(dados.t === "MESSAGE_REACTION_ADD" && dados.t === "MESSAGE_REACTION_REMOVE")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    global.xp = '';
if(dados.t === "MESSAGE_REACTION_ADD"){
    if(dados.d.user_id === ``)return
    let servidor = client.guilds.cache.get("")
    let membro = servidor.members.cache.get(dados.d.user_id)
    let canal1 = servidor.channels.cache.get('')
        if(dados.d.emoji.id === ""){
            if(dados.d.message_id != "") return 
                let ide = dados.d.user_id     
                database.ref(`Servidores/levels/${dados.d.user_id}`)
                .once('value').then(async function(snap){
                    if(snap.val() == null){
                        database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .set({
                                xp: 0,
                                ip: ide,
                                cont: 0,
                                canal: 0
                            });
                    } else {
                        database.ref(`Servidores/levels/${dados.d.user_id}`)
                        .update({
                            xp: 0,
                            ip: ide,
                            cont: 0,
                            canal: 0
                        });
                    }; 
                });
                let embed = new Discord.MessageEmbed() 
                .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                .setTitle(`Whitelist Nova Geração RP\n`)
                .addField("Instruções: ", `${inst}`)
                .setFooter("Reaja com ✅ para iniciar! | Desenvolvido por É GG#1203")
                .setTimestamp(new Date())
                membro.send(embed).then(msg => {
                msg.react('✅')
                },
            )
        };
        if(dados.d.emoji.name === "✅"){
            let opa1 = dados.d.channel_id
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().cont === 0){
                    if(dados.d.guild_id === undefined){
                        //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                        database.ref(`Servidores/levels/${dados.d.user_id}`)
                        .update({
                            xp: 0,
                            cont: 1,
                            canal: opa1
                        })
                        let pg1 = new Discord.MessageEmbed()
                        .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                        .setTitle(`Pergunta: ** #1**\n`)
                        .addField("Pergunta: ", `${perg1}`)
                        .setTimestamp(new Date())
                        .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203 `)
                        membro.send(pg1).then(msg => {
                            msg.react('1⃣').then(() => {
                                msg.react('2⃣').then(() => {
                                    msg.react("3⃣").then(() => {
                                        msg.react("4⃣").then(() => {
                                        })
                                    })
                                })
                            })
                        }) 
                    }
                }    
            }            
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 1 INCORETA   1ª - 3  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 1){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 2
                            })
                            let pg2 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#2**\n`)
                            .addField("Pergunta: ", `${perg2}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg2).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 2 INCORETA 2ª - 3 ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 2){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 3
                            })                        
                            let pg3 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#3**\n`)
                            .addField("Pergunta: ", `${perg3}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg3).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 3 INCORETA  3ª - 2 ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 3){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 4
                            })                        
                            let pg4 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#4**\n`)
                            .addField("Pergunta: ", `${perg4}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg4).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 4 INCORETA   4ª - 2  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 4){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 5
                            })                        
                            let pg5 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#5**\n`)
                            .addField("Pergunta: ", `${perg5}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg5).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 5 INCORETA   5ª - 3  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 5){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 6
                            })                        
                            let pg6 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#6**\n`)
                            .addField("Pergunta: ", `${perg6}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg6).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 6 INCORETA  6ª - 1  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 6){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 7
                            })                        
                            let pg7 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#7**\n`)
                            .addField("Pergunta: ", `${perg7}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg7).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 7 INCORETA   7ª - 3   ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 7){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 8
                            })                        
                            let pg8 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#8**\n`)
                            .addField("Pergunta: ", `${perg8}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg8).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 8 INCORETA   8ª - 2  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 8){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 9
                            })                        
                            let pg9 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#9**\n`)
                            .addField("Pergunta: ", `${perg9}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg9).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 9 INCORETA   9ª - 1  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 9){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 10
                            })                        
                            let pg10 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#10**\n`)
                            .addField("Pergunta: ", `${perg10}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg10).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 10 INCORETA   10ª - 2  ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "4⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "1⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 10){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 11
                            })                        
                            let pg11 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#11**\n`)
                            .addField("Pergunta: ", `${perg11}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg11).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 11 INCORETA   11ª - 2  ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (dados.d.emoji.name === "4⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "1⃣" ){ 
    database.ref(`Servidores/levels/${dados.d.user_id}`)
    .once('value').then(async function(snap3){
        //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
    if(snap3.val().ip === dados.d.user_id){
        if(snap3.val().canal === dados.d.channel_id){
            if(snap3.val().cont === 11){
                if(dados.d.guild_id === undefined){
                    //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                    database.ref(`Servidores/levels/${dados.d.user_id}`)
                    .update({
                        cont: 12
                    })                        
                    let pg12 = new Discord.MessageEmbed()
                    .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                    .setTitle(`Pergunta: **#12**\n`)
                    .addField("Pergunta: ", `${perg12}`)
                    .setTimestamp(new Date())
                    .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                    membro.send(pg12).then(msg => {
                        msg.react('1⃣').then(() => {
                            msg.react('2⃣').then(() => {
                                msg.react("3⃣").then(() => {
                                    msg.react("4⃣").then(() => {
                                    })
                                })
                            })
                        })
                    })
                }
            }
        }
    }
    })
};



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 12 INCORETA   12ª - 3  ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (dados.d.emoji.name === "4⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" ){ 
    database.ref(`Servidores/levels/${dados.d.user_id}`)
    .once('value').then(async function(snap3){
        //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
    if(snap3.val().ip === dados.d.user_id){
        if(snap3.val().canal === dados.d.channel_id){
            if(snap3.val().cont === 12){
                if(dados.d.guild_id === undefined){
                    //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                    database.ref(`Servidores/levels/${dados.d.user_id}`)
                    .update({
                        cont: 13
                    })                        
                    let pg13 = new Discord.MessageEmbed()
                    .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                    .setTitle(`Pergunta: **#13**\n`)
                    .addField("Pergunta: ", `${perg13}`)
                    .setTimestamp(new Date())
                    .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                    membro.send(pg13).then(msg => {
                        msg.react('1⃣').then(() => {
                            msg.react('2⃣').then(() => {
                                msg.react("3⃣").then(() => {
                                    msg.react("4⃣").then(() => {
                                    })
                                })
                            })
                        })
                    })
                }
            }
        }
    }
    })
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 13 INCORETA  13ª - 4  ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" ){ 
    database.ref(`Servidores/levels/${dados.d.user_id}`)
    .once('value').then(async function(snap3){
        //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
    if(snap3.val().ip === dados.d.user_id){
        if(snap3.val().canal === dados.d.channel_id){
            if(snap3.val().cont === 13){
                if(dados.d.guild_id === undefined){
                    //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                    database.ref(`Servidores/levels/${dados.d.user_id}`)
                    .update({
                        cont: 14
                    })                        
                    let fim3 = new Discord.MessageEmbed()
                    .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                    .setTitle(`SERVER WL`)
                    .addField("Termos: ", 'Se você concorda com as regras e termos do servidor clique em 👾 e saiba se foi aprovado ou não!')
                    .setTimestamp(new Date())
                    .setFooter(` Reaja com 👾 para saber seu resultado! | Desenvolvido por É GG#1203`)
                    membro.send(fim3).then(msg => {
                        msg.react('👾').then(() => {
                        })
                    })
                }
            }
        }
    }
    })
};








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// RESPOSTA CORRETAS 1ª - 3  //////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////// resposta 1
        if (dados.d.emoji.name === "3⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 1){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 2,
                                xp: xp1
                            })                        
                            let pg2 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#2**\n`)
                            .addField("Pergunta: ", `${perg2}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg2).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 2   2ª - 3
        if (dados.d.emoji.name === "3⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 2){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 3,
                                xp: xp1
                            })                        
                            let pg3 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#3**\n`)
                            .addField("Pergunta: ", `${perg3}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`) 
                            membro.send(pg3).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 3   3ª - 2
        if (dados.d.emoji.name === "2⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 3){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 4,
                                xp: xp1
                            })                        
                            let pg4 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#4**\n`)
                            .addField("Pergunta: ", `${perg4}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg4).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 4   4ª - 2
        if (dados.d.emoji.name === "2⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 4){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 5,
                                xp: xp1
                            })                         
                            let pg5 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#5**\n`)
                            .addField("Pergunta: ", `${perg5}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg5).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 5   5ª - 3
        if (dados.d.emoji.name === "3⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 5){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 6,
                                xp: xp1
                            })                        
                            let pg6 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#6**\n`)
                            .addField("Pergunta: ", `${perg6}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg6).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 6  6ª - 1
        if (dados.d.emoji.name === "1⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 6){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 7,
                                xp: xp1
                            })                        
                            let pg7 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#7**\n`)
                            .addField("Pergunta: ", `${perg7}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg7).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 7   7ª - 3
        if (dados.d.emoji.name === "3⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 7){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 8,
                                xp: xp1
                            })                        
                            let pg8 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#8**\n`)
                            .addField("Pergunta: ", `${perg8}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg8).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 8    8ª - 2
        if (dados.d.emoji.name === "2⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 8){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 9,
                                xp: xp1
                            })                        
                            let pg9 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#9**\n`)
                            .addField("Pergunta: ", `${perg9}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg9).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 9   9ª - 1
        if (dados.d.emoji.name === "1⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 9){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 10,
                                xp: xp1
                            })                        
                            let pg10 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#10**\n`)
                            .addField("Pergunta: ", `${perg10}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg10).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 10   10ª - 2
        if (dados.d.emoji.name === "2⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 10){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 11,
                                xp: xp1
                            })                        
                            let pg11 = new Discord.MessageEmbed()
                            .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#11**\n`)
                            .addField("Pergunta: ", `${perg11}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                            membro.send(pg11).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 11   11ª - 2
if (dados.d.emoji.name === "2⃣" ){ 
    database.ref(`Servidores/levels/${dados.d.user_id}`)
    .once('value').then(async function(snap3){
        let xp1 = snap3.val().xp
        //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
    if(snap3.val().ip === dados.d.user_id){
        if(snap3.val().canal === dados.d.channel_id){
            if(snap3.val().cont === 11){
                if(dados.d.guild_id === undefined){
                    xp1 = xp1 + 1
                    //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                    database.ref(`Servidores/levels/${dados.d.user_id}`)
                    .update({
                        cont: 12,
                        xp: xp1
                    })                        
                    let pg12 = new Discord.MessageEmbed()
                    .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                    .setTitle(`Pergunta: **#12**\n`)
                    .addField("Pergunta: ", `${perg12}`)
                    .setTimestamp(new Date())
                    .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                    membro.send(pg12).then(msg => {
                        msg.react('1⃣').then(() => {
                            msg.react('2⃣').then(() => {
                                msg.react("3⃣").then(() => {
                                    msg.react("4⃣").then(() => {
                                    })
                                })
                            })
                        })
                    })
                }
            }
        }
    }
    })
};

///////////////// resposta 12   12ª - 3
if (dados.d.emoji.name === "3⃣" ){ 
    database.ref(`Servidores/levels/${dados.d.user_id}`)
    .once('value').then(async function(snap3){
        let xp1 = snap3.val().xp
        //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
    if(snap3.val().ip === dados.d.user_id){
        if(snap3.val().canal === dados.d.channel_id){
            if(snap3.val().cont === 12){
                if(dados.d.guild_id === undefined){
                    xp1 = xp1 + 1
                    //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                    database.ref(`Servidores/levels/${dados.d.user_id}`)
                    .update({
                        cont: 13,
                        xp: xp1
                    })                        
                    let pg13 = new Discord.MessageEmbed()
                    .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                    .setTitle(`Pergunta: **#13**\n`)
                    .addField("Pergunta: ", `${perg13}`)
                    .setTimestamp(new Date())
                    .setFooter(` Leia com atenção! | Desenvolvido por É GG#1203`)
                    membro.send(pg13).then(msg => {
                        msg.react('1⃣').then(() => {
                            msg.react('2⃣').then(() => {
                                msg.react("3⃣").then(() => {
                                    msg.react("4⃣").then(() => {
                                    })
                                })
                            })
                        })
                    })
                }
            }
        }
    }
    })
};


///////////////// resposta 13   13ª - 4
if (dados.d.emoji.name === "4⃣" ){ 
    database.ref(`Servidores/levels/${dados.d.user_id}`)
    .once('value').then(async function(snap3){
        let xp1 = snap3.val().xp
        //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
    if(snap3.val().ip === dados.d.user_id){
        if(snap3.val().canal === dados.d.channel_id){
            if(snap3.val().cont === 13){
                if(dados.d.guild_id === undefined){
                    xp1 = xp1 + 1
                    //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                    database.ref(`Servidores/levels/${dados.d.user_id}`)
                    .update({
                        cont: 14,
                        xp: xp1
                    })                        
                    let fim3 = new Discord.MessageEmbed()
                    .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                    .setTitle(`SERVIDOR WL`)
                    .addField("Termos: ", 'Se você concorda com as regras e termos do servidor clique em 👾 e saiba se foi aprovado ou não!')
                    .setTimestamp(new Date())
                    .setFooter(` Reaja com 👾 para saber seu resultado! | Desenvolvido por É GG#1203`)
                    membro.send(fim3).then(msg => {
                        msg.react('👾').then(() => {
                        })
                    })
                }
            }
        }
    }
    })
};
















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////coletor e verfificador  /////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "👾" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 14){
                        if(dados.d.guild_id === undefined){
                            if(snap3.val().xp <= 10){
                                database.ref(`Servidores/levels/${dados.d.user_id}`)
                                .update({
                                    cont: 15
                                }) 
                                let fim2 = new Discord.MessageEmbed()
                                .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                                .setTitle(`VOCÊ FOI REPROVADO!`)
                                .addField("Você nao atingiu pontuação: ", ` ${xp1} / 13 .`)
                                .setTimestamp(new Date())
                                .setFooter(` Reaja com 🔁 para refazer a wl! | Desenvolvido por É GG#1203`)
                                membro.send(fim2).then(msg => {
                                    msg.react('🔁').then(() => {
                                    })
                                })
                            }
                        }
                    }
                }
            }
            })
        };
////////////// SE FOR PONT MAXIMA
        if (dados.d.emoji.name === "👾" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 14){
                        if(dados.d.guild_id === undefined){
                            if(snap3.val().xp >= 11){
                                database.ref(`Servidores/levels/${dados.d.user_id}`)
                                .update({
                                    cont: 15
                                }) 
                                let fim1 = new Discord.MessageEmbed()
                                .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                                .setTitle(`VOCÊ FOI APROVADO!`)
                                .addField("Pontuação: ", ` ${xp1} / 13.`)
                                .setTimestamp(new Date())
                                .setFooter(` Parabéns você foi aprovado(a) tenha um bom jogo! \nReaja com 🔝 para confirmar! | Desenvolvido por É GG#1203 `)
                                membro.send(fim1).then(msg => { 
                                    msg.react('🔝').then(() => {
                                    })
                                })
                            }
                        }
                    }
                }
            }
            })
        };
////////////// se nao atingir pontuaçao
        if (dados.d.emoji.name === "🔁" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 15){
                        if(dados.d.guild_id === undefined){
                            if(snap3.val().xp <= 9){
                                database.ref(`Servidores/levels/${dados.d.user_id}`)
                                .update({
                                    cont: 16
                                }) 
                                let embed1 = new Discord.MessageEmbed()
                                .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                                .setTitle(`SERVIDOR WL\n`)
                                .setDescription("Vá em <#> e tente realizar a whitelist novamente!")
                                .addField("Instruções: ", `${inst}`)
                                .setTimestamp(new Date())
                                .setFooter(`Sinto muito 😞| Desenvolvido por É GG#1203`)
                                membro.send(embed1).then(msg => { 
                                  msg.react('✅')
                                })
                            }
                        }
                    }
                }
            }
            })
        };
////////////// TERMINOU WL PONT MAXIMA
        if (dados.d.emoji.name === "🔝" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 15){
                        if(dados.d.guild_id === undefined){
                            if(snap3.val().xp >= 10){
                                database.ref(`Servidores/levels/${dados.d.user_id}`)
                                .update({
                                    cont: 16
                                }) 
                                let cargof = servidor.roles.cache.get('')
                                let cargoh = servidor.roles.cache.get('')
                                membro.roles.add(cargof).catch(console.error);
                                membro.roles.remove(cargoh).catch(console.error);
                                let embed203 = new Discord.MessageEmbed()
                                .setColor("BLUE")//COR DA CAIXA DE DIALOGO
                                .setTitle(`:man_detective: | WHITELIST\n`)
                                .setDescription(`<@${dados.d.user_id}> FOI APROVADO NA WL!`)
                                //.addField("Mensagem: ", ` <@${dados.d.author}> FOI APROVADO NA WL`)
                                /*.addFields([
                                    {
                                    name: `<@${dados.d.user_id}>`,
                                    value: `FOI APROVADO NA WL`,
                                    inline:true
                                    }
                                ])*/
                                //.addField("Mensagem: ", ` <@${dados.d.author}> FOI APROVADO NA WL`)
                                .setTimestamp(new Date())
                                let embed12 = new Discord.MessageEmbed()
                                .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                                .setTitle(`NGRP 2.0 WL\n`)
                                .setDescription(" Agora só falta mandar seu ID no canal <#> ")
                                //.addField(" Agora só falta mandar seu ID no canal #🆔ᴍᴀɴᴅᴇ-ɪᴅ! ")
                                .setFooter(` Bom jogo! | Desenvolvido por É GG#1203 `)
                                membro.send(embed12) 
                                canal1.send(embed203)
                                //let embed12 = new Discord.MessageEmbed()
                                ///.setColor("RED")//COR DA CAIXA DE DIALOGO
                                ///.setTitle(`SERVER WL\n`)
                                //.addField(" Você passou na WL ", `<@${dados.d.user_id}>, execute o comando !historia (e a historia de seu personagem) aqui memso! `)
                                //.setTimestamp(new Date())
                               // .setFooter(` Quase la! `)
                               // membro.send(embed12)
                            }
                        }
                    }
                }
            }
            })
        };
    };

     /*if(dados.t == 'MESSAGE_CREATE'){
        if(dados.d.author.id == '756198711742431264') return;
        let args = dados.d.content
        let msg = args.slice(0, 9)
        let msge = args.slice(0, 4)
        let msge1 = args.slice(4,22)
       
        if(msg == '!historia'){
            let servidor = client.guilds.cache.get(`724649304769167441`)
            let membro = servidor.members.cache.get(dados.d.author.id)
            let canal1 = servidor.channels.cache.get(dados.d.channel_id)
      
      
           
           
            let msg2 = args.slice(10, 120000)
            let msg3 = args.slice(50, 120000)

            if (!msg3) return membro.send(`Historia curta ou inexistente! Repita o comando!`);
            database.ref(`Servidores/levels/${dados.d.author.id}`)
            .once('value').then(async function(snap3){
                //let xp1 = snap3.val().xp
                console.log(`${snap3.val().ip}`);
            if(snap3.val().ip === dados.d.author.id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 16){
                        if(dados.d.guild_id === undefined){
                            if(snap3.val().xp >= 11){
                                database.ref(`user/${dados.d.author.id}`)
                                .once('value').then(async function(snap){
                                    if(snap.val() == null){
                                        database.ref(`user/${dados.d.author.id}`)
                                            .set({
                                              hs: msg2,
                                              name: 0
                                            });
                                    } else {
                                        database.ref(`user/${dados.d.author.id}`)
                                        .update({
                                          hs: msg2
                                        });
                                    }; 
                                });
                                database.ref(`Servidores/levels/${dados.d.author.id}`)
                                .update({
                                    cont: 17
                                }); 
								let cargof = servidor.roles.get('724669549902823456')
                                let cargoh = servidor.roles.get('727907163602944102')
                                membro.addRole(cargof)
                                membro.removeRole(cargoh)
                                let embed203 = new Discord.MessageEmbed()
                                .setColor("BLUE")//COR DA CAIXA DE DIALOGO
                                .setTitle(`:man_detective: |\n`)
                                .addField("Mensagem: ", ` <@${dados.d.author.id}> FOI APROVADO NA WL`)
                                .setTimestamp(new Date())
                                let embed12 = new Discord.MessageEmbed()
                                .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                                .setTitle(`SERVER WL\n`)
                                .addField(" Agora só falta a entrevista fique de olho no chat dos aprovados! ")
                                .setFooter(` Bom jogo! `)
                                membro.send(embed12) 
                                canal1.send(embed203)
                            }
                        }
                    }
                }
            }
            })
        }
        let servidor = client.guilds.cache.get(dados.d.guild_id)
        let canal12 = servidor.channels.cache.get(`724649304769167441`)
  

        if(msge == '!hs'){
            if(dados.d.channel_id == `726247292470034522`){
                database.ref(`user/${dados.d.author.id}`)
                  .once('value').then(async function(snap){
                canal12.send(`<@${dados.d.author.id}>     ${snap.val().hs}  `);
                })
            }
        }
        




    }
 */



})

//client.on('raw', console.log)

//              ___________ CRIADO POR É GG#1203 __________

client.login(config.token); 
