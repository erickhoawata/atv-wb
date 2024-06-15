import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "../negocio/cadastro";

export default class geraPedidosProd extends Cadastro{
    private clientes: Array<Cliente>

    constructor(empresa:Empresa){
        super()
        this.clientes = empresa.getClientes
    }

    public cadastrar(): void {
        listCliWithProdAndServ.forEach( cliente => {
            let cpf,rg;

            if(cliente.nomeSocial != undefined){

                rg = new RG(cliente.rg.valor, cliente.rg.dataEmissao);
                cpf = new CPF(cliente.cpf.valor, cliente.cpf.dataEmissao);

                const NovoCliente = new Cliente(
                    cliente.nome,
                    cliente.nomeSocial,
                    cpf,       
                    cliente.genero
                );

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(cliente.telefone)

            

                // --- Serviço ---

                if(cliente.servicosConsumidos?.length){                    
                    cliente.servicosConsumidos.forEach( servico => {
                        const NovoServico = new Servico(
                            servico.nomeServico,
                            servico.descServico,
                            servico.precoServico,
                            servico.idServico
                        )    
                        NovoCliente.getServicosConsumidos.push(NovoServico)
                    })
                }

                // --- Produto ---

                if(cliente.produtosConsumidos?.length){
                    cliente.produtosConsumidos.forEach( produto => {
                        const NovoProduto = new Produto(
                                produto.nomeProduto,
                                produto.descricaoProduto,
                                produto.valorProduto,
                                produto.idProduto
                            );

                            NovoCliente.getProdutosConsumidos.push(NovoProduto)

                    })
                }               

                this.clientes.push(NovoCliente)

            // ------------------------- Se não informar o Nome Social... --------------------------------------------------
            }else{
                
                rg = new RG(cliente.rg.valor, cliente.rg.dataEmissao);
                cpf = new CPF(cliente.cpf.valor, cliente.cpf.dataEmissao);

                const NovoCliente = new Cliente(
                    cliente.nome,
                    'não informado',
                    cpf,       
                    cliente.genero
                );

                NovoCliente.getRgs.push(rg)
                NovoCliente.getTelefones.push(cliente.telefone)
                

                if(cliente.servicosConsumidos?.length){                    
                    cliente.servicosConsumidos.forEach( servico => {
                        const NovoServico = new Servico(
                            servico.nomeServico,
                            servico.descServico,
                            servico.precoServico,
                            servico.idServico
                        )    
                        NovoCliente.getServicosConsumidos.push(NovoServico)
                    })
                }

                // --- Produto ---

                if(cliente.produtosConsumidos?.length){
                    cliente.produtosConsumidos.forEach( produto => {
                        const NovoProduto = new Produto(
                                produto.nomeProduto,
                                produto.descricaoProduto,
                                produto.valorProduto,
                                produto.idProduto
                            );

                            NovoCliente.getProdutosConsumidos.push(NovoProduto)

                    })
                }               

                this.clientes.push(NovoCliente)
            }
        })
    }
}

const listCliWithProdAndServ = [

    // --- Cliente 1 ---
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
        telefone: new Telefone('(12)', '3206-2101'),
        produtosConsumidos: [
            {
                nomeProduto: 'Shampoo Masculino',
                descricaoProduto: 'Produto exclusivo para calvos.',
                valorProduto: 36.00,
                idProduto: 1
            },
            {
                nomeProduto: 'Condicionador Hidratante',
                descricaoProduto: 'Condicionador para cabelos secos e danificados.',
                valorProduto: 42.00,
                idProduto: 2
            },
            {
                nomeProduto: 'Loção Pós-Barba',
                descricaoProduto: 'Loção para acalmar a pele após o barbear.',
                valorProduto: 33.00,
                idProduto: 15
            },
            {
                nomeProduto: 'Shampoo Anticaspa',
                descricaoProduto: 'Shampoo para controle da caspa e seborreia.',
                valorProduto: 40.00,
                idProduto: 10
            },
        ],
        servicosConsumidos:[
            {
                nomeServico: 'Sombrancelha',
                descServico: 'Remoção e desenho de sombrancelha',
                precoServico: 25.00,
                idServico: 3,
            },
            {
                nomeServico: 'Corte de cabelo masculino',
                descServico: 'Especializado para masculino',
                precoServico: 50.00,
                idServico: 7,
            },
        ]
    },

     // --- Cliente 2 ---
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
        telefone: new Telefone('(12)', '3206-2106'),
        servicosConsumidos: [
            {
                nomeServico: 'Matizar cabelo',
                descServico: 'Matização de cabelo',
                precoServico: 100.00,
                idServico: 8,
            },
            {
                nomeServico: 'Hidratação',
                descServico: 'Hidratação produnda',
                precoServico: 150.00,
                idServico: 9,
            },
            {
                nomeServico: 'Corte bordado',
                descServico: 'Corte para tirar pontas duplas',
                precoServico: 150.00,
                idServico: 10,
            },
            {
                nomeServico: 'Selagem capilar',
                descServico: 'tratamento para cabelos fracos',
                precoServico: 150.00,
                idServico: 11,
            },
            {
                nomeServico: 'Unhas de gel',
                descServico: 'Alogamento de unhas',
                precoServico: 140.00,
                idServico: 12,
            },
        ]
    },

     // --- Cliente 3 ---
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
        telefone: new Telefone('(12)', '3206-2107'),
        produtosConsumidos: [
            {
                nomeProduto: 'Creme Antienvelhecimento',
                descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
                valorProduto: 75.00,
                idProduto: 11
            },
            {
                nomeProduto: 'Creme Antienvelhecimento',
                descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
                valorProduto: 75.00,
                idProduto: 11
            },
            {
                nomeProduto: 'Creme Antienvelhecimento',
                descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
                valorProduto: 75.00,
                idProduto: 11
            },
            {
                nomeProduto: 'Creme Antienvelhecimento',
                descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
                valorProduto: 75.00,
                idProduto: 11
            },
            {
                nomeProduto: 'Creme Antienvelhecimento',
                descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
                valorProduto: 75.00,
                idProduto: 11
            },          
        ],
    },

     // --- Cliente 4 ---

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
        telefone: new Telefone('(12)', '3206-2112'),
        produtosConsumidos:[
            {
                nomeProduto: 'Loção Pós-Barba',
                descricaoProduto: 'Loção para acalmar a pele após o barbear.',
                valorProduto: 33.00,
                idProduto: 15
            },
            {
                nomeProduto: 'Creme para Olheiras',
                descricaoProduto: 'Creme para reduzir olheiras e inchaço.',
                valorProduto: 60.00,
                idProduto: 16
            },
            {
                nomeProduto: 'Sabonete Líquido Facial',
                descricaoProduto: 'Sabonete líquido para limpeza profunda do rosto.',
                valorProduto: 27.00,
                idProduto: 17
            },
            {
                nomeProduto: 'Tônico Facial',
                descricaoProduto: 'Tônico para equilibrar o pH da pele.',
                valorProduto: 34.00,
                idProduto: 18
            },
        ],

        servicosConsumidos:[
            {
                nomeServico: 'Sombrancelha',
                descServico: 'Remoção e desenho de sombrancelha',
                precoServico: 25.00,
                idServico: 3,
            },
            {
                nomeServico: 'Corte de cabelo masculino',
                descServico: 'Especializado para masculino',
                precoServico: 50.00,
                idServico: 7,
            },
        ]        
    },

// --- Cliente 5 ---
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
    telefone: new Telefone('(12)', '3206-2113'),

    produtosConsumidos:[
        {
            nomeProduto: 'Gel Fixador',
            descricaoProduto: 'Gel de fixação forte para penteados duradouros.',
            valorProduto: 30.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Spray de Brilho',
            descricaoProduto: 'Spray para dar brilho extra aos cabelos.',
            valorProduto: 35.00,
            idProduto: 7
        },
        {
            nomeProduto: 'Serum Reparador de Pontas',
            descricaoProduto: 'Serum para tratamento e prevenção de pontas duplas.',
            valorProduto: 48.00,
            idProduto: 8
        },
        {
            nomeProduto: 'Mousse Volumizador',
            descricaoProduto: 'Mousse para dar volume e textura aos cabelos finos.',
            valorProduto: 32.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Shampoo Anticaspa',
            descricaoProduto: 'Shampoo para controle da caspa e seborreia.',
            valorProduto: 40.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Creme Antienvelhecimento',
            descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
            valorProduto: 75.00,
            idProduto: 11
        },
        {
            nomeProduto: 'Protetor Solar Facial',
            descricaoProduto: 'Protetor solar com fator de proteção 50.',
            valorProduto: 50.00,
            idProduto: 12
        },
        {
            nomeProduto: 'Hidratante Corporal',
            descricaoProduto: 'Hidratante para pele seca e extra seca.',
            valorProduto: 45.00,
            idProduto: 13
        },
        {
            nomeProduto: 'Esfoliante Facial',
            descricaoProduto: 'Esfoliante para remoção de células mortas da pele.',
            valorProduto: 38.00,
            idProduto: 14
        },
        {
            nomeProduto: 'Serum Reparador de Pontas',
            descricaoProduto: 'Serum para tratamento e prevenção de pontas duplas.',
            valorProduto: 48.00,
            idProduto: 8
        },
        {
            nomeProduto: 'Mousse Volumizador',
            descricaoProduto: 'Mousse para dar volume e textura aos cabelos finos.',
            valorProduto: 32.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Shampoo Anticaspa',
            descricaoProduto: 'Shampoo para controle da caspa e seborreia.',
            valorProduto: 40.00,
            idProduto: 10
        },
    ],
    servicosConsumidos:[
        {
            nomeServico: 'Sombrancelha',
            descServico: 'Remoção e desenho de sombrancelha',
            precoServico: 25.00,
            idServico: 3,
        },
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
        {
            nomeServico: 'Hidratação',
            descServico: 'Hidratação produnda',
            precoServico: 150.00,
            idServico: 9,
        },
        {
            nomeServico: 'Corte bordado',
            descServico: 'Corte para tirar pontas duplas',
            precoServico: 150.00,
            idServico: 10,
        },
        {
            nomeServico: 'Selagem capilar',
            descServico: 'tratamento para cabelos fracos',
            precoServico: 150.00,
            idServico: 11,
        },
        {
            nomeServico: 'Unhas de gel',
            descServico: 'Alogamento de unhas',
            precoServico: 140.00,
            idServico: 12,
        },
        {
            nomeServico: 'manicure',
            descServico: 'pintar as unhas das mãos',
            precoServico: 50.00,
            idServico: 13,
        },
        {
            nomeServico: 'pedicure',
            descServico: 'pintar as unhas dos pés',
            precoServico: 50.00,
            idServico: 14,
        },
    ]  
},

// -- Cliente 6 --
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
    telefone: new Telefone('(12)', '3206-2129'),

    produtosConsumidos:[
        {
            nomeProduto: 'Serum Reparador de Pontas',
            descricaoProduto: 'Serum para tratamento e prevenção de pontas duplas.',
            valorProduto: 48.00,
            idProduto: 8
        },
        ],

        servicosConsumidos:[
            {
                nomeServico: 'manicure e pedicure',
                descServico: 'pintar as unhas das mãos e dos pés',
                precoServico: 90.00,
                idServico: 15,
            },
            {
                nomeServico: 'Massagem modeladora',
                descServico: 'Massagem modeladora',
                precoServico: 100.00,
                idServico: 16,
            },
        ]
},

// -- Cliente 7 --
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
    telefone: new Telefone('(12)', '3206-2131'),

    produtosConsumidos:[
        {
            nomeProduto: 'Mousse Volumizador',
            descricaoProduto: 'Mousse para dar volume e textura aos cabelos finos.',
            valorProduto: 32.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Shampoo Anticaspa',
            descricaoProduto: 'Shampoo para controle da caspa e seborreia.',
            valorProduto: 40.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Creme Antienvelhecimento',
            descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
            valorProduto: 75.00,
            idProduto: 11
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Massagem relaxante',
            descServico: 'Massagem relaxante',
            precoServico: 100.00,
            idServico: 17,
        },
        {
            nomeServico: 'Massagem redutora',
            descServico: 'Massagem redutora',
            precoServico: 100.00,
            idServico: 18,
        },
        {
            nomeServico: 'lavagem capitalar',
            descServico: 'lavagem e secagem do cabelo',
            precoServico: 90.00,
            idServico: 19,
        },
    ]
},

// -- Cliente 8 --
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
    telefone: new Telefone('(12)', '3206-2134'),

    produtosConsumidos:[
        {
            nomeProduto: 'Tônico Facial',
            descricaoProduto: 'Tônico para equilibrar o pH da pele.',
            valorProduto: 34.00,
            idProduto: 18
        },
        {
            nomeProduto: 'Bálsamo Labial',
            descricaoProduto: 'Bálsamo para hidratação dos lábios.',
            valorProduto: 18.00,
            idProduto: 19
        },
        {
            nomeProduto: 'Creme para Mãos',
            descricaoProduto: 'Creme para hidratação intensa das mãos.',
            valorProduto: 25.00,
            idProduto: 20
        },
        {
            nomeProduto: 'Condicionador Hidratante',
            descricaoProduto: 'Condicionador para cabelos secos e danificados.',
            valorProduto: 42.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Creme de Pentear',
            descricaoProduto: 'Creme para facilitar o penteado e reduzir o frizz.',
            valorProduto: 28.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Óleo Capilar Nutritivo',
            descricaoProduto: 'Óleo para nutrição profunda dos fios.',
            valorProduto: 55.00,
            idProduto: 4
        },
    ]
},

// -- Cliente 9 --
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
    telefone: new Telefone('(12)', '3206-2140'),

    produtosConsumidos:[
        {
            nomeProduto: 'Spray de Brilho',
            descricaoProduto: 'Spray para dar brilho extra aos cabelos.',
            valorProduto: 35.00,
            idProduto: 7
        },
        {
            nomeProduto: 'Serum Reparador de Pontas',
            descricaoProduto: 'Serum para tratamento e prevenção de pontas duplas.',
            valorProduto: 48.00,
            idProduto: 8
        },
        {
            nomeProduto: 'Mousse Volumizador',
            descricaoProduto: 'Mousse para dar volume e textura aos cabelos finos.',
            valorProduto: 32.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Shampoo Anticaspa',
            descricaoProduto: 'Shampoo para controle da caspa e seborreia.',
            valorProduto: 40.00,
            idProduto: 10
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Selagem capilar',
            descServico: 'tratamento para cabelos fracos',
            precoServico: 150.00,
            idServico: 11,
        },
        {
            nomeServico: 'Unhas de gel',
            descServico: 'Alogamento de unhas',
            precoServico: 140.00,
            idServico: 12,
        },
    ]
},

// -- Cliente 10 --
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
    telefone: new Telefone('(12)', '3206-2142'),

    produtosConsumidos:[
        {
            nomeProduto: 'Óleo Capilar Nutritivo',
            descricaoProduto: 'Óleo para nutrição profunda dos fios.',
            valorProduto: 55.00,
            idProduto: 4
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Corte de cabelo masculino',
            descServico: 'Especializado para masculino',
            precoServico: 50.00,
            idServico: 7,
        },
        {
            nomeProduto: 'Loção Pós-Barba',
            descricaoProduto: 'Loção para acalmar a pele após o barbear.',
            valorProduto: 33.00,
            idProduto: 15
        },
        {
            nomeProduto: 'Creme para Olheiras',
            descricaoProduto: 'Creme para reduzir olheiras e inchaço.',
            valorProduto: 60.00,
            idProduto: 16
        },
        {
            nomeProduto: 'Sabonete Líquido Facial',
            descricaoProduto: 'Sabonete líquido para limpeza profunda do rosto.',
            valorProduto: 27.00,
            idProduto: 17
        },
    ]
},

// -- Cliente 11 --
{
    nome: 'Pablo Marçal',
    nomeSocial: 'Pablinho',
    genero: 'M',
    cpf: {
        valor: '524.696.158-48',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-48',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2148'),

    produtosConsumidos:[
        {
            nomeProduto: 'Protetor Solar Facial',
            descricaoProduto: 'Protetor solar com fator de proteção 50.',
            valorProduto: 50.00,
            idProduto: 12
        },
        {
            nomeProduto: 'Hidratante Corporal',
            descricaoProduto: 'Hidratante para pele seca e extra seca.',
            valorProduto: 45.00,
            idProduto: 13
        },
        {
            nomeProduto: 'Esfoliante Facial',
            descricaoProduto: 'Esfoliante para remoção de células mortas da pele.',
            valorProduto: 38.00,
            idProduto: 14
        },
        {
            nomeProduto: 'Loção Pós-Barba',
            descricaoProduto: 'Loção para acalmar a pele após o barbear.',
            valorProduto: 33.00,
            idProduto: 15
        },
        {
            nomeProduto: 'Creme para Olheiras',
            descricaoProduto: 'Creme para reduzir olheiras e inchaço.',
            valorProduto: 60.00,
            idProduto: 16
        },
        {
            nomeProduto: 'Sabonete Líquido Facial',
            descricaoProduto: 'Sabonete líquido para limpeza profunda do rosto.',
            valorProduto: 27.00,
            idProduto: 17
        },
        {
            nomeProduto: 'Tônico Facial',
            descricaoProduto: 'Tônico para equilibrar o pH da pele.',
            valorProduto: 34.00,
            idProduto: 18
        },
        {
            nomeProduto: 'Bálsamo Labial',
            descricaoProduto: 'Bálsamo para hidratação dos lábios.',
            valorProduto: 18.00,
            idProduto: 19
        },
    ]
},

// -- Cliente 12 --
{
    nome: 'Júlio Cocielo',
    nomeSocial: 'Cocielo',
    genero: 'M',
    cpf: {
        valor: '524.696.158-47',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-47',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2147'),

    produtosConsumidos:[
        {
            nomeProduto: 'Serum Reparador de Pontas',
            descricaoProduto: 'Serum para tratamento e prevenção de pontas duplas.',
            valorProduto: 48.00,
            idProduto: 8
        },
        {
            nomeProduto: 'Mousse Volumizador',
            descricaoProduto: 'Mousse para dar volume e textura aos cabelos finos.',
            valorProduto: 32.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Shampoo Anticaspa',
            descricaoProduto: 'Shampoo para controle da caspa e seborreia.',
            valorProduto: 40.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Creme Antienvelhecimento',
            descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
            valorProduto: 75.00,
            idProduto: 11
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Hidratação',
            descServico: 'Hidratação produnda',
            precoServico: 150.00,
            idServico: 9,
        },
        {
            nomeServico: 'Corte bordado',
            descServico: 'Corte para tirar pontas duplas',
            precoServico: 150.00,
            idServico: 10,
        },
        {
            nomeServico: 'Selagem capilar',
            descServico: 'tratamento para cabelos fracos',
            precoServico: 150.00,
            idServico: 11,
        },
    ]
},

// -- Cliente 13 --
{
    nome: 'Dono do Paysandu',
    nomeSocial: 'Paysanduu',
    genero: 'M',
    cpf: {
        valor: '524.696.158-46',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-46',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2146'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Condicionador Hidratante',
            descricaoProduto: 'Condicionador para cabelos secos e danificados.',
            valorProduto: 42.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Creme de Pentear',
            descricaoProduto: 'Creme para facilitar o penteado e reduzir o frizz.',
            valorProduto: 28.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Óleo Capilar Nutritivo',
            descricaoProduto: 'Óleo para nutrição profunda dos fios.',
            valorProduto: 55.00,
            idProduto: 4
        },
        {
            nomeProduto: 'Máscara de Tratamento',
            descricaoProduto: 'Máscara intensiva para recuperação dos cabelos.',
            valorProduto: 60.00,
            idProduto: 5
        },
        {
            nomeProduto: 'Gel Fixador',
            descricaoProduto: 'Gel de fixação forte para penteados duradouros.',
            valorProduto: 30.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Spray de Brilho',
            descricaoProduto: 'Spray para dar brilho extra aos cabelos.',
            valorProduto: 35.00,
            idProduto: 7
        },
        {
            nomeProduto: 'Serum Reparador de Pontas',
            descricaoProduto: 'Serum para tratamento e prevenção de pontas duplas.',
            valorProduto: 48.00,
            idProduto: 8
        },
        {
            nomeProduto: 'Mousse Volumizador',
            descricaoProduto: 'Mousse para dar volume e textura aos cabelos finos.',
            valorProduto: 32.00,
            idProduto: 9
        },
        {
            nomeProduto: 'Shampoo Anticaspa',
            descricaoProduto: 'Shampoo para controle da caspa e seborreia.',
            valorProduto: 40.00,
            idProduto: 10
        },
        {
            nomeProduto: 'Creme Antienvelhecimento',
            descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
            valorProduto: 75.00,
            idProduto: 11
        },
        {
            nomeProduto: 'Protetor Solar Facial',
            descricaoProduto: 'Protetor solar com fator de proteção 50.',
            valorProduto: 50.00,
            idProduto: 12
        },
        {
            nomeProduto: 'Hidratante Corporal',
            descricaoProduto: 'Hidratante para pele seca e extra seca.',
            valorProduto: 45.00,
            idProduto: 13
        },
        {
            nomeProduto: 'Esfoliante Facial',
            descricaoProduto: 'Esfoliante para remoção de células mortas da pele.',
            valorProduto: 38.00,
            idProduto: 14
        },
        {
            nomeProduto: 'Loção Pós-Barba',
            descricaoProduto: 'Loção para acalmar a pele após o barbear.',
            valorProduto: 33.00,
            idProduto: 15
        },
        {
            nomeProduto: 'Creme para Olheiras',
            descricaoProduto: 'Creme para reduzir olheiras e inchaço.',
            valorProduto: 60.00,
            idProduto: 16
        },
        {
            nomeProduto: 'Sabonete Líquido Facial',
            descricaoProduto: 'Sabonete líquido para limpeza profunda do rosto.',
            valorProduto: 27.00,
            idProduto: 17
        },
        {
            nomeProduto: 'Tônico Facial',
            descricaoProduto: 'Tônico para equilibrar o pH da pele.',
            valorProduto: 34.00,
            idProduto: 18
        },
        {
            nomeProduto: 'Bálsamo Labial',
            descricaoProduto: 'Bálsamo para hidratação dos lábios.',
            valorProduto: 18.00,
            idProduto: 19
        },
        {
            nomeProduto: 'Creme para Mãos',
            descricaoProduto: 'Creme para hidratação intensa das mãos.',
            valorProduto: 25.00,
            idProduto: 20
        },
    ]
},

// -- Cliente 14 --
{
    nome: 'Tia Leila',
    nomeSocial: 'Presida do Palmeiras',
    genero: 'F',
    cpf: {
        valor: '524.696.158-44',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-44',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2144'),

    produtosConsumidos:[
        {
            nomeProduto: 'Shampoo Masculino',
            descricaoProduto: 'Produto exclusivo para calvos.',
            valorProduto: 36.00,
            idProduto: 1
        },
        {
            nomeProduto: 'Condicionador Hidratante',
            descricaoProduto: 'Condicionador para cabelos secos e danificados.',
            valorProduto: 42.00,
            idProduto: 2
        },
        {
            nomeProduto: 'Creme de Pentear',
            descricaoProduto: 'Creme para facilitar o penteado e reduzir o frizz.',
            valorProduto: 28.00,
            idProduto: 3
        },
        {
            nomeProduto: 'Óleo Capilar Nutritivo',
            descricaoProduto: 'Óleo para nutrição profunda dos fios.',
            valorProduto: 55.00,
            idProduto: 4
        },
        {
            nomeProduto: 'Máscara de Tratamento',
            descricaoProduto: 'Máscara intensiva para recuperação dos cabelos.',
            valorProduto: 60.00,
            idProduto: 5
        },
        {
            nomeProduto: 'Gel Fixador',
            descricaoProduto: 'Gel de fixação forte para penteados duradouros.',
            valorProduto: 30.00,
            idProduto: 6
        },
        {
            nomeProduto: 'Creme Antienvelhecimento',
            descricaoProduto: 'Creme para reduzir sinais de envelhecimento.',
            valorProduto: 75.00,
            idProduto: 11
        },
        {
            nomeProduto: 'Protetor Solar Facial',
            descricaoProduto: 'Protetor solar com fator de proteção 50.',
            valorProduto: 50.00,
            idProduto: 12
        },
        {
            nomeProduto: 'Hidratante Corporal',
            descricaoProduto: 'Hidratante para pele seca e extra seca.',
            valorProduto: 45.00,
            idProduto: 13
        },
        {
            nomeProduto: 'Esfoliante Facial',
            descricaoProduto: 'Esfoliante para remoção de células mortas da pele.',
            valorProduto: 38.00,
            idProduto: 14
        },
        {
            nomeProduto: 'Loção Pós-Barba',
            descricaoProduto: 'Loção para acalmar a pele após o barbear.',
            valorProduto: 33.00,
            idProduto: 15
        },
        {
            nomeProduto: 'Creme para Olheiras',
            descricaoProduto: 'Creme para reduzir olheiras e inchaço.',
            valorProduto: 60.00,
            idProduto: 16
        },
        {
            nomeProduto: 'Sabonete Líquido Facial',
            descricaoProduto: 'Sabonete líquido para limpeza profunda do rosto.',
            valorProduto: 27.00,
            idProduto: 17
        },
    ],

    servicosConsumidos:[
        {
            nomeServico: 'Massagem modeladora',
            descServico: 'Massagem modeladora',
            precoServico: 100.00,
            idServico: 16,
        },
        {
            nomeServico: 'Massagem relaxante',
            descServico: 'Massagem relaxante',
            precoServico: 100.00,
            idServico: 17,
        },
        {
            nomeServico: 'Massagem redutora',
            descServico: 'Massagem redutora',
            precoServico: 100.00,
            idServico: 18,
        },
        {
            nomeServico: 'lavagem capitalar',
            descServico: 'lavagem e secagem do cabelo',
            precoServico: 90.00,
            idServico: 19,
        },
    ]
},

// -- Cliente 15 --
{
    nome: 'Júlio Cazares',
    nomeSocial: 'Presida do São Paulo',
    genero: 'M',
    cpf: {
        valor: '524.696.158-43',
        dataEmissao: new Date(2004, 9, 12)
    },
    rg: {
        valor: '56.255.965-43',
        dataEmissao: new Date(2004, 9, 12)
    },
    telefone: new Telefone('(12)', '3206-2143'),

    servicosConsumidos:[
        {
            nomeServico: 'Matizar cabelo',
            descServico: 'Matização de cabelo',
            precoServico: 100.00,
            idServico: 8,
        },
        {
            nomeServico: 'Hidratação',
            descServico: 'Hidratação produnda',
            precoServico: 150.00,
            idServico: 9,
        },
        {
            nomeServico: 'Corte bordado',
            descServico: 'Corte para tirar pontas duplas',
            precoServico: 150.00,
            idServico: 10,
        },
        {
            nomeServico: 'Selagem capilar',
            descServico: 'tratamento para cabelos fracos',
            precoServico: 150.00,
            idServico: 11,
        },
        {
            nomeServico: 'Unhas de gel',
            descServico: 'Alogamento de unhas',
            precoServico: 140.00,
            idServico: 12,
        },
        {
            nomeServico: 'manicure',
            descServico: 'pintar as unhas das mãos',
            precoServico: 50.00,
            idServico: 13,
        },
        {
            nomeServico: 'pedicure',
            descServico: 'pintar as unhas dos pés',
            precoServico: 50.00,
            idServico: 14,
        },
        {
            nomeServico: 'manicure e pedicure',
            descServico: 'pintar as unhas das mãos e dos pés',
            precoServico: 90.00,
            idServico: 15,
        },
        {
            nomeServico: 'Massagem modeladora',
            descServico: 'Massagem modeladora',
            precoServico: 100.00,
            idServico: 16,
        },
        {
            nomeServico: 'Massagem relaxante',
            descServico: 'Massagem relaxante',
            precoServico: 100.00,
            idServico: 17,
        },
        {
            nomeServico: 'Massagem redutora',
            descServico: 'Massagem redutora',
            precoServico: 100.00,
            idServico: 18,
        },
        {
            nomeServico: 'lavagem capitalar',
            descServico: 'lavagem e secagem do cabelo',
            precoServico: 90.00,
            idServico: 19,
        },
        {
            nomeServico: 'Escova modeladora',
            descServico: 'Escovagem modeladora',
            precoServico: 90.00,
            idServico: 20,
        },
        {
            nomeServico: 'Matizar cabelo',
            descServico: 'Matização de cabelo',
            precoServico: 100.00,
            idServico: 8,
        },
        {
            nomeServico: 'Hidratação',
            descServico: 'Hidratação produnda',
            precoServico: 150.00,
            idServico: 9,
        },
        {
            nomeServico: 'Corte bordado',
            descServico: 'Corte para tirar pontas duplas',
            precoServico: 150.00,
            idServico: 10,
        },
        {
            nomeServico: 'Selagem capilar',
            descServico: 'tratamento para cabelos fracos',
            precoServico: 150.00,
            idServico: 11,
        },
        {
            nomeServico: 'Unhas de gel',
            descServico: 'Alogamento de unhas',
            precoServico: 140.00,
            idServico: 12,
        },
    ]
},
]