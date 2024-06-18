const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Utilizam tecnologias avançadas para melhorar a qualidade de vida, eficiência de serviços urbanos e sustentabilidade. Integram sensores, big data, IA, e loT para gerenciar recursos em tempo real, desde transporte até energia e segurança, criando ambientes urbanos mais habitáveis e dinâmicos.",
        alternativas: [
            {
                texto: "Isto vai ser algo bom!",
                afirmacao: "Serviços urbanos eficientes, melhor qualidade de vida, e sustentabilidade ambiental. "
            },
            {
                texto: "Isto vai ser algo ruim!",
                afirmacao: "Altos custos, questões de privacidade, desigualdade no acesso, e dependência tecnológica."
            }
        ]
    },
    {
        enunciado: "As cidades inteligentes utilizam a tecnologia para melhorar a qualidade de vida dos seus habitantes?",
        alternativas: [
            {
                texto: "Por meio da integração de sistemas de transporte e comunicação, as cidades inteligentes conseguem reduzir os engarrafamentos e melhorar a mobilidade urbana.",
                afirmacao: "Efetivamente resolve problemas urbanos como o trânsito, melhorando a vida dos cidadãos."
            },
            {
                texto: "As cidades inteligentes dependem exclusivamente de robôs para realizar todas as tarefas diárias, eliminando a necessidade de qualquer trabalho humano.",
                afirmacao: "Irrealista e desconsidera o papel vital do trabalho humano, podendo causar desemprego."
            }
        ]
    },
    {
        enunciado: "A coleta e análise de dados em tempo real é um componente essencial das cidades inteligentes?",
        alternativas: [
            {
                texto: "Os dados em tempo real permitem um monitoramento eficiente da infraestrutura urbana, ajudando na prevenção de problemas como apagões e enchentes.",
                afirmacao: "Ajuda a prevenir problemas urbanos, melhorando a gestão da cidade."
            },
            {
                texto: "A coleta de dados em tempo real nas cidades inteligentes ignora completamente a privacidade dos cidadãos, expondo todas as suas informações pessoais.",
                afirmacao: "Compromete a privacidade, levando a potenciais abusos de dados."
            }
        ]
    },
    {
        enunciado: "A sustentabilidade é um objetivo chave das cidades inteligentes?",
        alternativas: [
            {
                texto: "Cidades inteligentes promovem o uso de energia renovável e implementam sistemas de gestão de resíduos que minimizam o impacto ambiental.",
                afirmacao: "Promove práticas sustentáveis, reduzindo o impacto ambiental."
            },
            {
                texto: "Nas cidades inteligentes, a sustentabilidade é negligenciada em favor do desenvolvimento tecnológico, resultando em um aumento da poluição e do consumo de recursos naturais.",
                afirmacao: "Ignora a sustentabilidade, causando danos ambientais e esgotamento de recursos."
            }
        ]
    },
    {
        enunciado: "A participação cidadã é fundamental para o sucesso das cidades inteligentes? ",
        alternativas: [
            {
                texto: "Plataformas digitais nas cidades inteligentes permitem que os moradores participem ativamente das decisões municipais e proponham soluções para problemas locais.",
                afirmacao: "Encoraja a participação dos cidadãos, melhorando a governança e a solução de problemas."
            },
            {
                texto: "As cidades inteligentes são geridas por algoritmos e inteligência artificial, sem nenhuma necessidade de consulta ou participação dos cidadãos.",
                afirmacao: "Exclui a participação cidadã, podendo levar a decisões desinformadas e falta de aceitação pública."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2065...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();