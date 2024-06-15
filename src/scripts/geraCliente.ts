import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";
import CPF from "../modelo/cpf";
import Cadastro from "../negocio/cadastro";
import Produto from "../modelo/produto";

export default class geraCliente extends Cadastro{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public cadastrar(): void {
        Clientlist.forEach(Clientlist=>{
            let nome,nomeSocial,genero,cpf,rg, telefone;

            if(Clientlist.nomeSocial != undefined){
                nome = Clientlist.nome;
                nomeSocial = Clientlist.nomeSocial;
                genero = Clientlist.genero;
                rg = new RG(Clientlist.rg.valor, Clientlist.rg.dataEmissao);
                cpf = new CPF(Clientlist.cpf.valor, Clientlist.cpf.dataEmissao);
                telefone = Clientlist.telefone;

                const NovoCliente = new Cliente(
                    nome,
                    nomeSocial,
                    cpf,       
                    genero
                );
                

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(telefone)
                this.clientes.push(NovoCliente)

            } else{
                nome = Clientlist.nome;            
                genero = Clientlist.genero;
                rg.push(new RG(Clientlist.rg.valor, Clientlist.rg.dataEmissao))
                cpf = new CPF(Clientlist.cpf.valor, Clientlist.cpf.dataEmissao)
                telefone.push(Clientlist.telefone);
    
                const NovoCliente = new Cliente(
                    nome,
                    'não informado',
                    genero,
                    cpf
                );
                this.clientes.push(NovoCliente)        
            }
        })
    }

}

const Clientlist = [
    {
    nome: 'Abner Douglas Ribeiro Machado',
    nomeSocial: 'Abner Machado',
    genero: 'M',
    cpf: {
        valor: '524.696.158-01',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-01',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2101')
},
{
    nome: 'Alan Araujo Rodrigues',
    nomeSocial: 'Alan Rodrigues',
    genero: 'M',
    cpf: {
        valor: '524.696.158-02',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-02',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2102')
},
{
    nome: 'Ana Luisa Bernardo de Andrade',
    nomeSocial: 'Ana Andrade',
    genero: 'F',
    cpf: {
        valor: '524.696.158-03',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-03',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2103')
},
{
    nome: 'Arthur Sousa Silva',
    nomeSocial: 'Arthur Silva',
    genero: 'M',
    cpf: {
        valor: '524.696.158-04',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-04',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2104')
},
{
    nome: 'Bianca Capelo da Silva',
    nomeSocial: 'Bianca Silva',
    genero: 'F',
    cpf: {
        valor: '524.696.158-05',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-05',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2105')
},
{
    nome: 'Bruno Silvério Vieira',
    nomeSocial: 'Bruno Vieira',
    genero: 'M',
    cpf: {
        valor: '524.696.158-06',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-06',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2106')
},
{
    nome: 'Caua Nascimento Coelho Sbruzi Dezidera',
    nomeSocial: 'Caua Dezidera',
    genero: 'M',
    cpf: {
        valor: '524.696.158-07',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-07',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2107')
},
{
    nome: 'Cauan Cesar de Oliveira Almeida',
    nomeSocial: 'Cauan Almeida',
    genero: 'M',
    cpf: {
        valor: '524.696.158-08',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-08',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2108')
},
{
    nome: 'Dianne Faria de Brito',
    nomeSocial: 'Dianne Brito',
    genero: 'F',
    cpf: {
        valor: '524.696.158-09',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-09',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2109')
},
{
    nome: 'Diego Rafael Moreno Vitvicki',
    nomeSocial: 'Diego Vitvicki',
    genero: 'M',
    cpf: {
        valor: '524.696.158-10',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-10',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2110')
},
{
    nome: 'Elizabeth Cristina Alves Leite',
    nomeSocial: 'Elizabeth Leite',
    genero: 'F',
    cpf: {
        valor: '524.696.158-11',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-11',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2111')
},
{
    nome: 'Enzo Sidney Pereira',
    nomeSocial: 'Enzo Pereira',
    genero: 'M',
    cpf: {
        valor: '524.696.158-12',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-12',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2112')
},
{
    nome: 'Erick Hideki Oyakawa Awata',
    nomeSocial: 'Erick Awata',
    genero: 'M',
    cpf: {
        valor: '524.696.158-13',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-13',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2113')
},
{
    nome: 'Erik Zanetti Ferraz',
    nomeSocial: 'Erik Ferraz',
    genero: 'M',
    cpf: {
        valor: '524.696.158-14',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-14',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2114')
},
{
    nome: 'Felipe Sobral',
    nomeSocial: 'Felipe Sobral',
    genero: 'M',
    cpf: {
        valor: '524.696.158-15',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-15',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2115')
},
{
    nome: 'Gabriel Timoteo dos Santos',
    nomeSocial: 'Gabriel Santos',
    genero: 'M',
    cpf: {
        valor: '524.696.158-16',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-16',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2116')
},
{
    nome: 'Gustavo de Sena Moraes Pessoa',
    nomeSocial: 'Gustavo Pessoa',
    genero: 'M',
    cpf: {
        valor: '524.696.158-17',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-17',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2117')
},
{
    nome: 'Igor Suzuki Kira',
    nomeSocial: 'Igor Kira',
    genero: 'M',
    cpf: {
        valor: '524.696.158-18',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-18',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2118')
},
{
    nome: 'Jaqueline Maria França Veloso da Silva',
    nomeSocial: 'Jaqueline Silva',
    genero: 'F',
    cpf: {
        valor: '524.696.158-19',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-19',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2119')
},
{
    nome: 'Jhuan Araujo de Souza',
    nomeSocial: 'Jhuan Souza',
    genero: 'M',
    cpf: {
        valor: '524.696.158-20',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-20',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2120')
},
{
    nome: 'Joao Eduardo Messias Moreira',
    nomeSocial: 'Joao Moreira',
    genero: 'M',
    cpf: {
        valor: '524.696.158-21',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-21',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2121')
},
{
    nome: 'Julia Gonzalez Moreira',
    nomeSocial: 'Julia Moreira',
    genero: 'F',
    cpf: {
        valor: '524.696.158-22',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-22',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2122')
},
{
    nome: 'Kalil Alves Pereira',
    nomeSocial: 'Kalil Pereira',
    genero: 'M',
    cpf: {
        valor: '524.696.158-23',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-23',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2123')
},
{
    nome: 'Lucas Rodrigo Leite Fonseca Moreira',
    nomeSocial: 'Lucas Moreira',
    genero: 'M',
    cpf: {
        valor: '524.696.158-24',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-24',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2124')
},
{
    nome: 'Lucas Rodrigues Monteiro da Silva',
    nomeSocial: 'Lucas Silva',
    genero: 'M',
    cpf: {
        valor: '524.696.158-25',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-25',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2125')
},
{
    nome: 'Luiz Felipe Borges de Souza',
    nomeSocial: 'Luiz Souza',
    genero: 'M',
    cpf: {
        valor: '524.696.158-26',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-26',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2126')
},
{
    nome: 'Luiz Felipe Goncalves Braga',
    nomeSocial: 'Luiz Braga',
    genero: 'M',
    cpf: {
        valor: '524.696.158-27',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-27',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2127')
},
{
    nome: 'Luiz Henrique do Carmo Gonzaga Berti',
    nomeSocial: 'Luiz Berti',
    genero: 'M',
    cpf: {
        valor: '524.696.158-28',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-28',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2128')
},
{
    nome: 'Luiz Henrique Souza Silva',
    nomeSocial: 'Luiz Silva',
    genero: 'M',
    cpf: {
        valor: '524.696.158-29',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-29',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2129')
},
{
    nome: 'Marcos Antonio Rodrigues dos Santos',
    nomeSocial: 'Marcos Santos',
    genero: 'M',
    cpf: {
        valor: '524.696.158-30',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-30',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2130')
},
{
    nome: 'Maria Eduarda Peleteiro Leite',
    nomeSocial: 'Maria Leite',
    genero: 'F',
    cpf: {
        valor: '524.696.158-31',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-31',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2131')
},
{
    nome: 'Maria Luiza Guedes da Silva',
    nomeSocial: 'Maria Silva',
    genero: 'F',
    cpf: {
        valor: '524.696.158-32',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-32',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2132')
},
{
    nome: 'Markos Vinicius Nunes da Silva',
    nomeSocial: 'Markos Silva',
    genero: 'M',
    cpf: {
        valor: '524.696.158-33',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-33',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2133')
},
{
    nome: 'Mateus Ferreira Madeira',
    nomeSocial: 'Mateus Madeira',
    genero: 'M',
    cpf: {
        valor: '524.696.158-34',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-34',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2134')
},
{
    nome: 'Murilo Jose de Brito Junior',
    nomeSocial: 'Murilo Junior',
    genero: 'M',
    cpf: {
        valor: '524.696.158-35',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-35',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2135')
},
{
    nome: 'Pablo Rafael Rosa da Silva',
    nomeSocial: 'Pablo Silva',
    genero: 'M',
    cpf: {
        valor: '524.696.158-36',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-36',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2136')
},
{
    nome: 'Patrick Gabriel de Souza',
    nomeSocial: 'Patrick Souza',
    genero: 'M',
    cpf: {
        valor: '524.696.158-37',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-37',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2137')
},
{
    nome: 'Pedro Henrique Ribeiro',
    nomeSocial: 'Pedro Ribeiro',
    genero: 'M',
    cpf: {
        valor: '524.696.158-38',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-38',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2138')
},
{
    nome: 'Pedro Lucas dos Santos Rodrigues',
    nomeSocial: 'Pedro Rodrigues',
    genero: 'M',
    cpf: {
        valor: '524.696.158-39',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-39',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2139')
},
{
    nome: 'Pedro Santos Kajiya',
    nomeSocial: 'Pedro Kajiya',
    genero: 'M',
    cpf: {
        valor: '524.696.158-40',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-40',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2140')
},
{
    nome: 'Rodrigo de Andrade Paula',
    nomeSocial: 'Rodrigo Paula',
    genero: 'M',
    cpf: {
        valor: '524.696.158-41',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-41',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2141')
},
{
    nome: 'Ryan Seiji Wakugawa',
    nomeSocial: 'Ryan Wakugawa',
    genero: 'M',
    cpf: {
        valor: '524.696.158-42',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-42',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2142')
},
{
    nome: 'Sandro Roberto Pimentel Junior',
    nomeSocial: 'Sandro Junior',
    genero: 'M',
    cpf: {
        valor: '524.696.158-43',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-43',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2143')
},
{
    nome: 'Sofia Matos Lessa',
    nomeSocial: 'Sofia Lessa',
    genero: 'F',
    cpf: {
        valor: '524.696.158-44',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-44',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2144')
},
{
    nome: 'Thiago de Freitas Alves Canedo',
    nomeSocial: 'Thiago Canedo',
    genero: 'M',
    cpf: {
        valor: '524.696.158-45',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-45',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2145')
},
{
    nome: 'Vinícius Felipe Forcato',
    nomeSocial: 'Vinícius Forcato',
    genero: 'M',
    cpf: {
        valor: '524.696.158-46',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-46',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2146')
},
{
    nome: 'Vitor Henrique Saborito da Silva Rocha',
    nomeSocial: 'Vitor Rocha',
    genero: 'M',
    cpf: {
        valor: '524.696.158-47',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-47',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2147')
},
{
    nome: 'Wesley Ferreira da Silva',
    nomeSocial: 'Wesley Silva',
    genero: 'M',
    cpf: {
        valor: '524.696.158-48',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-48',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2148')
},
]