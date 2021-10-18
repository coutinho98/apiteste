import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    const novoAluno = await Aluno.create( { 
      nome: "Mateus",
      sobrenome: 'Couto',
      email: 'mateuscouto98@outlook.com',
      idade: 40,
      peso: 93,
      altura: 1.80
     } )
    res.json(novoAluno);
  }
}

export default new Home();
