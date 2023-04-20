<template >
    <div>
        <div class="container" id="home">
            <div class="containerCentral">
                <div class="imgWrapper">
                    <img src="../assets/homeIlustration.png" alt="foto de fundo da ome">
                </div>
                <div class="textWrapper">
                    <h1>IGOR SOUZA</h1>
                    <h2>Full-Stack Developer</h2>
                    <div class="social">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/igor-souza1/" target="_blank"><font-awesome-icon class="icons" :icon="['fab', 'linkedin']" /></a></li>
                            <li><a href="https://github.com/Igorsouza1" target="_blank"><font-awesome-icon class="icons" :icon="['fab', 'github']" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="about" id="about">
             <div class="title">
                <h1>Sobre</h1>
             </div>
             <div class="resume">
                <p>Olá! Sou Igor Souza, um <span>desenvolvedor Java</span> Júnior 
                    apaixonado por tecnologia, 
                    com mais de 4 anos de experiência em programação. Formei em <span>Análise e Desenvolvimento de S
                    istemas pelo IFMS</span> e adquiri conhecimentos sólidos em linguagens como <span>C, Java, Python e JavaScript.</span>
                    <br><br>
                    Realizei <span>estágios na Embrapa Pantanal</span> e
                    na SOS Informática, onde trabalhei com <span>desenvolvimento de aplicativos e suporte de
                    TI</span>, respectivamente. Além disso, conquistei várias <span>certificações em áreas como desenvolvimento web full stack</span> e <span>análise de dados com Python.</span>
                    <br><br>
                    Estou sempre em busca de aprimorar minhas habilidades e conhecimentos na área de
                    tecnologia. Atualmente, procuro oportunidades para crescer profissionalmente e contribuir
                    com meu conhecimento técnico.</p>
             </div>
             <div class="infoWrapper">
                <div class="contato">
                    <h4>Contato</h4>
                    <ul>
                        <li><span>Idade:</span>  22 Anos</li>
                        <li><span>Email:</span>  igor1_souza@hotmail.com</li>
                        <li><span>Contato:</span>  (67) 9 9240-8191</li>
                        <li><span>Localização:</span> Corumbá - MS, Brasil</li>
                    </ul>
                </div>

                <div class="interesses">
                    <h4>Técnologias</h4>
                    <ul>
                        <li><font-awesome-icon class="icons" :icon="['fab', 'java']" /><p>Java</p></li>
                        <li><font-awesome-icon class="icons" :icon="['fab', 'square-js']" /><p>JavaScript</p></li>
                        <li><font-awesome-icon class="icons" :icon="['fab', 'python']" /><p>Python</p></li>
                        <li><font-awesome-icon class="icons" :icon="['fab', 'html5']" /><p>HTML</p></li>
                        <li><font-awesome-icon class="icons" :icon="['fab', 'css3-alt']" /><p>CSS</p></li>
                        <li><font-awesome-icon class="icons" :icon="['fab', 'vuejs']" /><p>Vuejs</p></li>
                        <li><font-awesome-icon class="icons" :icon="['fab', 'react']" /><p>React</p></li>
                        <li><font-awesome-icon class="icons" :icon="['fa', 'database']" /><p>DataBase</p></li>
                        <li><font-awesome-icon class="icons" :icon="['fab', 'git-alt']" /><p>Git</p></li>
                        <li><font-awesome-icon class="icons" :icon="['fab', 'node-js']" /><p>NodeJS</p></li>
                    </ul>
                </div>
            </div>
             <div class="curriculo">
                <a :href="pdfUrl" download="IgorSouzaFullStack.pdf">Curriculo</a>
             </div>
        </div>

        <div class="projetos" id="projects">
            <div class="title">
                <h1>Projetos</h1>
                <div class="containerProjects">

                    <div class="project">
                        <div class="projectImg">
                        <img src="../assets/projeto1.png" alt="imagem de fundo do projeto Kanban">
                    </div>
                    <div class="infoProject">
                        <h3>Portólio Pessoal</h3>
                        <p>Este projeto é um portfólio pessoal responsivo, criado com HTML, CSS e JavaScript. O portfólio apresenta uma série de páginas, incluindo Home, Sobre, Serviços, Contato e Portfólio, que ajudam a exibir suas habilidades, projetos e informações de contato.</p>
                        <ul>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'html5']" /></li>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'css3-alt']" /></li>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'square-js']" /></li>
                        </ul>
                        <h5>
                            <a href="https://github.com/Igorsouza1/Portfolio-Dev" target="_blank"><font-awesome-icon class="icons" :icon="['fab', 'github']" /></a>
                        </h5>
                    </div>
                    </div>

                    <div class="project invert">
                        <div class="projectImg">
                        <img src="../assets/projeto2.png" alt="imagem de fundo do projeto Kanban">
                    </div>
                    <div class="infoProject">
                        <h3>EquiClass</h3>
                        <p>O EquiClass é um aplicativo desenvolvido para auxiliar os criadores de cavalos Pantaneiros na identificação da qualidade dos cavalos com base em suas medidas corporais.</p>
                        <ul>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'vuejs']" /></li>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'css3-alt']" /></li>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'square-js']" /></li>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'python']" /></li>
                        </ul>
                        <h5>
                            <a href="https://github.com/Igorsouza1/IAHORSE" target="_blank"><font-awesome-icon class="icons" :icon="['fab', 'github']" /></a>
                            <a href="https://iahorse.pages.dev/" target="_blank"><font-awesome-icon class="icons" :icon="['fa', 'microscope']" /></a>
                        </h5>
                    </div>
                    </div>

                    <div class="project">
                        <div class="projectImg">
                        <img src="../assets/Back-end-Project.png" alt="imagem de fundo do projeto Kanban">
                    </div>
                    <div class="infoProject">
                        <h3>Comentários Back-end</h3>
                        <p>Este projeto é o back-end do sistema "Evento Comentários Front-end". Ele é responsável por gerenciar os comentários e autenticação dos usuários utilizando o GitHub. O back-end foi desenvolvido usando Node.js, Express, Prisma e Socket.IO</p>
                        <ul>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'node-js']" /></li>
                            <li><font-awesome-icon class="icons" :icon="['fa', 'database']" /></li>
                        </ul>
                        <h5>
                            <a href="https://github.com/Igorsouza1/Java-Sistema-Cursos" target="_blank"><font-awesome-icon class="icons" :icon="['fab', 'github']" /></a>
                        </h5>
                    </div>
                    </div>

                    <div class="project invert">
                        <div class="projectImg">
                        <img src="../assets/projeto4.png" alt="imagem de fundo do projeto Kanban">
                    </div>
                    <div class="infoProject">
                        <h3>Sistema de Gestão de Multas</h3>
                        <p>aplicação Spring que permite cadastrar placas de carros, infrações e multas, relacionando-os entre si e oferecendo recursos para editar suas informações.</p>
                        <ul>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'java']" /></li>
                            <li><font-awesome-icon class="icons" :icon="['fa', 'database']" /></li>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'html5']" /></li>
                            <li><font-awesome-icon class="icons" :icon="['fab', 'css3-alt']" /></li>
                        </ul>
                        <h5>
                            <a href="https://github.com/Igorsouza1/controleMultasJava" target="_blank"><font-awesome-icon class="icons" :icon="['fab', 'github']" /></a>
                        </h5>
                    </div>
                    </div>
                </div>
            </div>
            <div class="verMais">
                  <a href="https://github.com/Igorsouza1?tab=repositories" target="_blank">Ver Mais</a>
            </div>
        </div>


        <div class="experience" id="exp">
            <h1 class="title">Experiencia</h1>
            <div class="contentExperienceContainer">
                <div class="formacao">
                    <h1>Analise e desenvolvimento de sistemas</h1>
                    <p>Instituto Federal de Mato Grosso do Sul (IFMS)</p>
                    <span>06/2023</span>
                </div>
                <div class="exp-cursos">
                    <div class="exp">
                        <h1>Embrapa Pantanal</h1>
                        <h3>Estágio em desenvolvimento de software</h3>
                        <span>04/2023</span>
                        <p>Desenvolvimento e avaliação de algoritmos de Machine Learning para classificação de cavalos pantaneiros</p>
                        <p>Criação de interfaces responsivas e dinâmicas com Vue.js 3, HTML5 e CSS3</p>
                        <p>Implementação de um sistema modular e escalável para readequação do modelo de Machine Learning no futuro</p>
                        <p>Implantação da aplicação na nuvem utilizando Cloudflare para otimização de velocidade de carregamento e segurança dos dados</p>
                        <p>Colaboração com a equipe de pesquisa e desenvolvimento da Embrapa Pantanal, contribuindo para o avanço do conhecimento sobre cavalos pantaneiros e aprimorando habilidades de trabalho em equipe e comunicação.</p>
                    </div>

                    <div class="exp">
                        <h1>SOS informática</h1>
                        <h3>Suporte de TI</h3>
                        <span>07/2022</span>
                        <p>Suporte técnico para postos de combustível</p>
                        <p>Diagnóstico e solução de problemas do software Linx</p>
                        <p>Manutenção preventiva de computadores e dispositivos</p>
                        <p>Monitoramento e manutenção de servidores e infraestrutura de rede</p>
                        <p>Treinamento e suporte aos funcionários dos postos de combustível</p>
                        <p>Comunicação efetiva com a equipe de TI e gerência</p>
                    </div>

                    <div class="cursos">
                        <h1>Cursos Complementares</h1>
                        <h2>Desenvolvimento Web Full-Stack - HTML, CSS e JavaScript</h2>
                        <h3>ProgramadorBR</h3>

                        <h2>Desenvolvimento Web Full-Stack - NodeJS e MongoDB</h2>
                        <h3>ProgramadorBR</h3>

                        <h2>Data Analysis with Python</h2>
                        <h3>FreeCodeCamp</h3>

                        <h2>Conceitos Avançados sobre Algoritmos e Programação com a linguagem Java</h2>
                        <h3>Instituto Federal de Minas Gerais (IFMG)</h3>

                        <h2>Web Designer</h2>
                        <h3>Instituto Federal de Minas Gerais (IFMG)</h3>

                        <h2>Introdução a Inteligência Artificial</h2>
                        <h3>Instituto Federal de Miato Grosso do Sul (IFMS)</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">

        </div>
    </div>
</template>
<script>
export default {
    computed: {
    pdfUrl() {
      return process.env.BASE_URL + 'IgorSouzaFullStack.pdf';
    },
  },
}
</script>
<style scoped>

    .container{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 90vh;
        background-color: #2C3E50;
    }

    .containerCentral .imgWrapper img{
        width: 150px;
    }

    .containerCentral .textWrapper{
        color: #FFFFFF;
    }

    .containerCentral .textWrapper h1{
        font-weight: 800;
        letter-spacing: 1px;
    }

    .containerCentral .textWrapper h2{
        font-size: 0.999rem;
        font-weight: 400;
    }

    .containerCentral .textWrapper .social ul{
        list-style: none;
        display: flex;
        justify-content: center;
    }

    .containerCentral .textWrapper .social ul li .icons{
        padding: 0.7rem;
        border: 1px solid black;
        background-color: rgb(34, 40, 53);
        border-radius: 50%;
        margin: 0.5rem;
    }

    .containerCentral .textWrapper .social ul li .icons{
        color: #FFFFFF;
        font-size: 1.2rem;
        transition: 0.3s ease;
    }

    .containerCentral .textWrapper .social ul li:hover .icons{
        color: #160c46;
        font-size: 1.3rem;
        background-color: rgb(255, 255, 255);
    }

    .about{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            background-color: #34495E;
            color: #FFFFFF;
        }

        
        .title h1{
            font-weight: 800;
            letter-spacing: 2px;
        }

        


        .about .resume p{
            font-weight: 300;
            font-size: 0.9rem;
        }

        
        .about .resume p span{
            font-weight: 600;
        }

        .curriculo{
            background-color: #2C3E50;
            color: #FFF;
            border: 1px solid #F39C12;
            border-radius: 4px;
            padding: 12px 20px;
            margin: 1.5rem;
            font-family: Arial, sans-serif;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .curriculo:hover {
            background-color: #F39C12;
        }

        .curriculo:hover a{
            color: #2C3E50;
        }

        .curriculo a{
            text-decoration: none;
            color: #ffff;
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 1px;
        }

        .verMais{
        background-color: #2C3E50;
        color: #FFF;
        border: 1px solid #F39C12;
        border-radius: 4px;
        padding: 12px 20px;
        margin: 1.5rem auto;
        font-family: Arial, sans-serif;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .verMais:hover {
            background-color: #F39C12;
        }

        .verMais:hover a{
            color: #2C3E50;
        }

        .verMais a{
            text-decoration: none;
            color: #ffff;
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 1px;
        }

    .experience{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #34495E;
        color: #FFFFFF;
    }

    .footer{
        height: 100px;
        background-color: black;
    }


    @media (max-width: 800px) {
        .title{
            padding: 1rem;
        }

        .about .resume{
            padding: 0.5rem 1.8rem;
            text-align: justify;
        }

        .about .infoWrapper{
            width: 100%;
            height: 100%;
            padding: 0 1.8rem;
            display: flex;
            flex-direction: column;
            justify-content: left;
        }

        .about .infoWrapper .contato{
            padding: 0.5rem 0;
        }

        .about .infoWrapper .contato h4{
            padding: 0.7rem 0rem;
        }

        .about .infoWrapper .contato ul li span{
            font-weight: 700;
        }

        .about .infoWrapper ul{
            list-style: none;
        }

        .about .infoWrapper .interesses h4{
            padding: 0.9rem 0rem 0.5rem;
        }

        .about .infoWrapper .contato ul li {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin: 0.4rem 0;
        }

        .about .infoWrapper .interesses ul{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }

        .about .infoWrapper .interesses ul li{
            display: flex;
            flex-direction: column;
            padding: 0.6rem;
            margin: 0.5rem;
            font-size: 1.4rem;
            background-color: #160c46;
            border-radius: 10px;
        }

        .about .infoWrapper .interesses ul li p{
            font-size: 0.7rem;
            padding-top: 0.2rem;
        }

        .projetos{
            height: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            background-color: #2C3E50;
            color: #FFF;
        }

      

        .containerProjects{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
        }

        .containerProjects .project {
            position: relative;
            width: 90%;
            height: 15rem;
            margin: 0 0 1rem 0;
            border: 1px solid black;
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
            z-index: 1;
            background-size: cover;
         }

     .containerProjects .project .projectImg img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        z-index: -1;
     }

    .containerProjects .project h3{
        z-index: 2;
        color: #fff;
    }

    .containerProjects .project p{
        z-index: 2;
        font-size: 0.7rem;
        color: #fff;
        padding: 0.3rem 0.8rem;
    }

    .containerProjects .project::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6); /* cor semi-transparente */
        border-radius: 20px;
    }

    .containerProjects .project ul{
        list-style: none;
        display: flex;
        justify-content: center;
    }

    .containerProjects .project ul li{
        display: flex;
        align-items: center;
        text-align: center;
        padding: 0.5rem 0.7rem;
        font-size: 1.5rem;
        background-color: #160c46;
        margin: 0.5rem;
        border-radius: 50%;
    }

    .containerProjects .project h5 .icons{
        padding: 0.6rem;
        font-size: 1.5rem;
        background-color: #333333;
        border: 1px solid black;
        margin: 0.5rem;
        border-radius: 50%;
        transition: 0.3s ease;
    }

    .containerProjects .project h5 a{
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }

    .containerProjects .project h5 a:hover .icons{
        color: #160c46;
        font-size: 1.3rem;
        background-color: rgb(255, 255, 255);
    }

    .contentExperienceContainer{
            width: 80%;
            margin: 0 auto;
        }

        .contentExperienceContainer .formacao{
            padding: 1rem 0.8rem;
            position: relative;
            border-left: 2px solid white;
        }

        .contentExperienceContainer .formacao h1::before{
            content: '';
            position: absolute;
            top: 33px;
            left: -8px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid var(--themeColor);
            background-color: white;
        }

        .contentExperienceContainer .formacao h1{
            padding: 0.7rem 0 0 0 ;
            font-size: 1.4rem;
            letter-spacing: 1px;
        }

        .contentExperienceContainer .formacao p{
            padding: 0 0 0.5rem;
            font-weight: 300;
            font-style: italic;
        }

        .contentExperienceContainer .formacao span{
            padding: 4px 22px;
            background-color: lightblue;
            color: black;
            border-radius: 3px;
            font-size: 14px;
            font-weight: 600;
            font-style: italic;
            display: inline-block;
        }

        .exp-cursos .exp{
            padding: 1rem 0.8rem;
            position: relative;
            width: 100%;
            border-left: 2px solid white;
        }

        .exp-cursos .exp h1{
            padding: 0.7rem 0 0 0 ;
            font-size: 1.4rem;
            letter-spacing: 1px;
        }

        .exp-cursos .exp h1::before{
            content: '';
            position: absolute;
            top: 33px;
            left: -8px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid var(--themeColor);
            background-color: white;
        }

        .exp-cursos .exp h3{
            margin-left: 2px;
            font-size: 1rem;
            letter-spacing: 1px;
            font-style: italic;
        }

        .exp-cursos .exp span{
            padding: 4px 22px;
            background-color: lightblue;
            color: black;
            border-radius: 3px;
            font-size: 14px;
            margin: 10px 0;
            font-weight: 600;
            font-style: italic;
            display: inline-block;
        }

        .exp-cursos .exp p{
            margin-left: 2px;
            font-size: 1rem;
            letter-spacing: 1px;
            margin-bottom: 1rem;
        }

        .exp-cursos .cursos{
            margin-top: 2rem;
            padding: 1rem 0;
        }

        .exp-cursos .cursos h1{
            padding: 0.7rem 0;
            font-size: 1.4rem;
            letter-spacing: 1px;
        }

        .exp-cursos .cursos h2{
            margin-top: 1rem;
            font-size: 1rem;
            letter-spacing: 1px;
        }

        .exp-cursos h3{
            font-size: 0.9rem;
            font-style: italic;
            font-weight: 300;
        }

        .exp-cursos p{
            margin-bottom: 1.3rem;
        }
 

       
    }

   

 

    @media (min-width: 800px) {
        .title{
            padding: 1.4rem;
        }

        .about .resume{
            width: 80%;
        }

        .about .resume{
            padding: 0.5rem 3rem;
            text-align: justify;
        }

        .infoWrapper{
            display: flex;
            width: 100%;
            padding: 0 3rem;
            width: 80%;
        }

        .infoWrapper .contato{
            width: 50%;
        }

        .infoWrapper .contato h4{
            padding: 0.6rem 0;
        }

        .infoWrapper .contato ul li{
            padding: 0.5rem 0;
        }

        .infoWrapper .contato ul li span{
            font-weight: 800;
            letter-spacing: 1px;
        }

        .infoWrapper .interesses{
            width: 50%;
        }

        .infoWrapper .interesses h4{
            padding: 0.6rem 0;
        }

        .infoWrapper .interesses ul{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }

        .infoWrapper .interesses ul li{
            display: flex;
            flex-direction: column;
            padding: 0.5rem;
            margin: 0.5rem;
            font-size: 1.2rem;
            background-color: #160c46;
            border-radius: 10px;
        }

        .infoWrapper .interesses ul li p{
            font-size: 1rem;
        }

        .infoWrapper ul{
            list-style: none;
        }

        .projetos{
            height: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            background-color: #2C3E50;
            color: #FFF;
        }

        .containerProjects{
            display: flex;
            width: 80%;
            height: 100%;
            padding: 2rem 0 0 0;
            flex-direction: column;
            margin: 0 auto;
        }

        .project{
            display: flex;
            margin-bottom: 1.9rem;
            width: 100%;
            border-radius: 20px;
        }

        .invert .projectImg img{
            margin-left: 1rem;
        }

        .project .projectImg{
            width: 50%;
            margin-right: 0.5rem;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            position: relative;
        }

        .project .projectImg img{
            width: 100%;
            border-radius: 20px;
        }

        .project .infoProject{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 3rem;
        }

        .project .infoProject h3{
            padding: 0.5rem;
        }

        .project .infoProject p{
            font-size: 0.8rem;
        }

        .project .infoProject ul{
            display: flex;
            justify-content: center;
            list-style: none;
        }

        .project .infoProject ul li{
            padding: 0.5rem;
            font-size: 1.5rem;
            margin: 0.5rem;
            border-radius: 50%;
            display: flex;
            transition: 0.4s ease;
        }

        .project .infoProject ul li:hover{
            background-color: #fff;
            color: #160c46;
        }

        .project .infoProject h5{
            font-size: 1.2rem;
            margin: 0.5rem;
        }

        .project .infoProject h5 a:hover{
            color: #160c46;
            background-color: rgb(255, 255, 255);
        }

        .project .infoProject h5 a:hover{
            color: #160c46;
        }

        .project .infoProject h5 a{
            margin: 0.8rem;
            background-color: rgb(34, 40, 53);
            border-radius: 50%;
            border: 1px solid black;
            padding: 0.7rem;
            text-decoration: none;
            color: #fff;
            cursor: pointer;
        }

        .invert{
            display: flex;
            flex-direction: row-reverse;
        }

        .contentExperienceContainer{
            width: 80%;
            margin: 0 auto;
        }

        .contentExperienceContainer .formacao{
            padding: 1rem 0.8rem;
            position: relative;
            border-left: 2px solid white;
        }

        .contentExperienceContainer .formacao h1::before{
            content: '';
            position: absolute;
            top: 33px;
            left: -8px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid var(--themeColor);
            background-color: white;
        }

        .contentExperienceContainer .formacao h1{
            padding: 0.7rem 0 0 0 ;
            font-size: 1.4rem;
            letter-spacing: 1px;
        }

        .contentExperienceContainer .formacao p{
            padding: 0 0 0.5rem;
            font-weight: 300;
            font-style: italic;
        }

        .contentExperienceContainer .formacao span{
            padding: 4px 22px;
            background-color: lightblue;
            color: black;
            border-radius: 3px;
            font-size: 14px;
            font-weight: 600;
            font-style: italic;
            display: inline-block;
        }

        .exp-cursos .exp{
            padding: 1rem 0.8rem;
            position: relative;
            width: 100%;
            border-left: 2px solid white;
        }

        .exp-cursos .exp h1{
            padding: 0.7rem 0 0 0 ;
            font-size: 1.4rem;
            letter-spacing: 1px;
        }

        .exp-cursos .exp h1::before{
            content: '';
            position: absolute;
            top: 33px;
            left: -8px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid var(--themeColor);
            background-color: white;
        }

        .exp-cursos .exp h3{
            margin-left: 2px;
            font-size: 1rem;
            letter-spacing: 1px;
            font-style: italic;
        }

        .exp-cursos .exp span{
            padding: 4px 22px;
            background-color: lightblue;
            color: black;
            border-radius: 3px;
            font-size: 14px;
            margin: 10px 0;
            font-weight: 600;
            font-style: italic;
            display: inline-block;
        }

        .exp-cursos .exp p{
            margin-left: 2px;
            font-size: 1rem;
            letter-spacing: 1px;
            margin-bottom: 1rem;
        }

        .exp-cursos .cursos{
            margin-top: 2rem;
            padding: 1rem 0;
        }

        .exp-cursos .cursos h1{
            padding: 0.7rem 0;
            font-size: 1.8rem;
            letter-spacing: 1px;
        }

        .exp-cursos .cursos h2{
            margin-top: 1rem;
            font-size: 1.4rem;
            letter-spacing: 1px;
        }

        .exp-cursos h3{
            font-size: 1.1rem;
            font-style: italic;
            font-weight: 300;
        }

        .exp-cursos p{
            margin-bottom: 1.3rem;
        }
 

    }

</style>
