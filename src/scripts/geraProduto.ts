import Produto from "../modelo/produto";
import Cadastro from "../negocio/cadastro";

export default class geraProduto extends Cadastro{
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    public cadastrar(): void {
        Prodlist.forEach(Prodlist=>{
            let nomeProduto,descricaoProduto,valorProduto,idProduto

            nomeProduto = Prodlist.nomeProduto;
            descricaoProduto = Prodlist.descricaoProduto;
            valorProduto = Prodlist.valorProduto;
            idProduto = Prodlist.idProduto;

            const NovoProduto = new Produto(
                nomeProduto,
                descricaoProduto,
                valorProduto,
                idProduto
            );
            this.produtos.push(NovoProduto)

        })
    }

}

const Prodlist = [

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